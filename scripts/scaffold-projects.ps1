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

$moduleFiles = @{
    1 = "module-01-foundations"
    2 = "module-02-layout"
    3 = "module-03-interactive"
    4 = "module-04-forms"
    5 = "module-05-creative"
}

$manifest = Get-Content $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json

foreach ($project in $manifest.projects) {
    if ($project.id -lt $From -or $project.id -gt $To) { continue }

    $folderName = "{0:D2}-{1}" -f $project.id, $project.slug
    $targetDir = Join-Path $projectsDir $folderName

    if ((Test-Path $targetDir) -and -not $Force) {
        Write-Host "Skip (exists): $folderName"
        continue
    }

    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    $modulePadded = "{0:D2}" -f $project.module
    $difficulty = if ($project.PSObject.Properties.Name -contains "difficulty") { $project.difficulty } else { "-" }
    $challenge = if ($project.PSObject.Properties.Name -contains "challenge_th") { $project.challenge_th } else { "See curriculum module file" }
    $moduleFile = $moduleFiles[[int]$project.module]

    $replacements = [ordered]@{
        '{{EP_ID}}'       = "{0:D2}" -f $project.id
        '{{EP_TITLE}}'    = $project.title_th
        '{{MODULE}}'      = $modulePadded
        '{{MODULE_FILE}}' = $moduleFile
        '{{DIFFICULTY}}'  = $difficulty
        '{{CHALLENGE}}'   = $challenge
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
