$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$manifest = Get-Content (Join-Path $root "projects-manifest.json") -Raw | ConvertFrom-Json
$projectsDir = Join-Path $root "projects"
$errors = @()

foreach ($project in $manifest.projects) {
    $folderName = "{0:D2}-{1}" -f $project.id, $project.slug
    $dir = Join-Path $projectsDir $folderName
    $required = @("index.html", "style.css", "script.js", "README.md")

    if (-not (Test-Path $dir)) {
        $errors += "Missing folder: $folderName"
        continue
    }

    foreach ($file in $required) {
        if (-not (Test-Path (Join-Path $dir $file))) {
            $errors += "Missing file: $folderName/$file"
        }
    }
}

if ($errors.Count -eq 0) {
    Write-Host "OK: All 100 projects present with required files."
    exit 0
} else {
    $errors | ForEach-Object { Write-Host "ERROR: $_" }
    exit 1
}
