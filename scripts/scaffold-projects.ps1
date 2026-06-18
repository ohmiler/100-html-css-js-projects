param(
    [int]$From = 1,
    [int]$To = 100,
    [switch]$Force
)

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$manifestPath = Join-Path $root "projects-manifest.json"
$templateDir = Join-Path $root "templates/starter"
$projectsDir = Join-Path $root "projects"
$utf8Bom = New-Object System.Text.UTF8Encoding $true

$manifest = Get-Content $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json

foreach ($project in $manifest.projects) {
    if ($project.id -lt $From -or $project.id -gt $To) { continue }

    $folderName = "{0:D3}-{1}" -f $project.id, $project.slug
    $targetDir = Join-Path $projectsDir $folderName

    if ((Test-Path $targetDir) -and -not $Force) {
        Write-Host "Skip (exists): $folderName"
        continue
    }

    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    $replacements = [ordered]@{
        '{{EP_ID}}'    = "{0:D2}" -f $project.id
        '{{EP_TITLE}}' = $project.title_th
    }

    foreach ($file in Get-ChildItem $templateDir -File) {
        $content = Get-Content (Join-Path $templateDir $file.Name) -Raw -Encoding UTF8
        foreach ($key in $replacements.Keys) {
            $content = $content.Replace($key, $replacements[$key])
        }
        $outPath = Join-Path $targetDir $file.Name
        [System.IO.File]::WriteAllText($outPath, $content, $utf8Bom)
    }

    Write-Host "Created: $folderName"
}

Write-Host "Done. Run verify-structure.ps1 to check."
