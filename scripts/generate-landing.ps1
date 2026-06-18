$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$manifest = Get-Content (Join-Path $root "projects-manifest.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$strings = Get-Content (Join-Path $root "landing-strings.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$utf8Bom = New-Object System.Text.UTF8Encoding $true

$moduleNames = @{
    1 = "Foundations"
    2 = "Layout"
    3 = "Interactive"
    4 = "Forms"
    5 = "Creative"
}

$groups = $manifest.projects | Group-Object module | Sort-Object { [int]$_.Name }

$sections = foreach ($group in $groups) {
    $mod = $group.Name
    $title = $moduleNames[[int]$mod]
    $items = foreach ($p in ($group.Group | Sort-Object id)) {
        $folder = "{0:D3}-{1}" -f $p.id, $p.slug
        "        <li><a href=`"projects/$folder/index.html`">EP$("{0:D2}" -f $p.id): $($p.title_th)</a></li>"
    }
    @"
    <section class="module">
      <h2>Module $mod - $title</h2>
      <ul>
$($items -join "`n")
      </ul>
    </section>
"@
}

$html = @"
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>100 HTML/CSS/JS Projects</title>
  <link rel="stylesheet" href="landing.css">
</head>
<body>
  <header class="hero">
    <h1>100 HTML/CSS/JS Projects</h1>
    <p>$($strings.heroSubtitle)</p>
    <a class="btn" href="curriculum/README.md">$($strings.heroCta)</a>
  </header>
  <main class="grid">
$($sections -join "`n")
  </main>
</body>
</html>
"@

[System.IO.File]::WriteAllText((Join-Path $root "index.html"), $html, $utf8Bom)
Write-Host "Generated index.html"
