# 100 Projects Codebase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** สร้าง repo โค้ดพร้อมใช้งานสำหรับคอร์ส 100 โปรเจกต์ — starter template ครบ 100 โฟลเดอร์, โซลูชันอ้างอิง EP01, สคริปต์วิดีโอ EP01, และ landing page รวมลิงก์

**Architecture:** ใช้ `projects-manifest.json` เป็น single source of truth สำหรับ id/slug/title แล้ว scaffold ด้วย PowerShell script แต่ละโปรเจกต์มี `index.html`, `style.css`, `script.js`, `README.md` แยกอิสระ (vanilla, ไม่มี build step) EP01 มีโฟลเดอร์ `solution/` เป็น reference implementation สำหรับอัดวิดีโอ

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, PowerShell (scaffold), Live Server (dev)

**อ้างอิง:** [`docs/superpowers/specs/2026-06-18-100-projects-curriculum-design.md`](../specs/2026-06-18-100-projects-curriculum-design.md)

---

## File Map

| Path | หน้าที่ |
|------|---------|
| `README.md` | ภาพรวม repo + วิธีรัน |
| `.gitignore` | ไฟล์ที่ไม่ต้อง commit |
| `projects-manifest.json` | รายการ 100 โปรเจกต์ (id, slug, title_th, module) |
| `scripts/scaffold-projects.ps1` | สร้างโฟลเดอร์ + starter files |
| `scripts/verify-structure.ps1` | ตรวจว่าครบ 100 โปรเจกต์ |
| `templates/starter/` | ไฟล์ต้นแบบ HTML/CSS/JS/README |
| `projects/{NN}-{slug}/` | starter สำหรับผู้เรียน |
| `projects/01-color-toggle-button/solution/` | โซลูชัน EP01 สมบูรณ์ |
| `projects/01-color-toggle-button/VIDEO-SCRIPT.md` | สคริปต์วิดีโอละเอียด EP01 |
| `index.html` | Landing page รวมลิงก์ทุกโปรเจกต์ |

---

## Task 1: Root README และ .gitignore

**Files:**
- Create: `README.md`
- Create: `.gitignore`

- [ ] **Step 1: สร้าง `.gitignore`**

```
.DS_Store
Thumbs.db
.vscode/
*.log
```

- [ ] **Step 2: สร้าง `README.md`**

```markdown
# 100 HTML/CSS/JS Projects

คอร์สสอนมือใหม่ภาษาไทย — 100 โปรเจกต์ component เล็กด้วย Vanilla HTML, CSS, JavaScript

## เริ่มต้น

1. Clone repo นี้
2. ติดตั้ง [VS Code](https://code.visualstudio.com/) + extension **Live Server**
3. เปิดโฟลเดอร์ `projects/01-color-toggle-button/` แล้วคลิก "Go Live"
4. อ่านแผนหลักสูตรใน [`curriculum/README.md`](curriculum/README.md)

## โครงสร้าง

- `curriculum/` — แผนหลักสูตร, video outline, concept map
- `projects/` — โปรเจกต์ 01–100 (starter สำหรับฝึกทำ)
- `projects/01-color-toggle-button/solution/` — ตัวอย่างเฉลย EP01
- `index.html` — หน้ารวมลิงก์ทุกโปรเจกต์

## สร้างโปรเจกต์ใหม่ (สำหรับผู้ดูแล)

```powershell
.\scripts\scaffold-projects.ps1
```

## ตรวจสอบโครงสร้าง

```powershell
.\scripts\verify-structure.ps1
```
```

- [ ] **Step 3: Commit**

```bash
git add README.md .gitignore
git commit -m "docs: add root README and gitignore"
```

---

## Task 2: Projects Manifest

**Files:**
- Create: `projects-manifest.json`

- [ ] **Step 1: สร้าง `projects-manifest.json`**

ไฟล์นี้มี array `projects` 100 รายการ ตัวอย่าง 5 รายการแรกและท้าย — **ต้องใส่ครบ 100 รายการตาม slug ใน curriculum**

```json
{
  "projects": [
    { "id": 1, "slug": "color-toggle-button", "title_th": "ปุ่มเปลี่ยนสีเมื่อคลิก", "module": 1 },
    { "id": 2, "slug": "show-hide-text", "title_th": "ปุ่มแสดง/ซ่อนข้อความ", "module": 1 },
    { "id": 3, "slug": "profile-card", "title_th": "การ์ดโปรไฟล์ง่ายๆ", "module": 1 },
    { "id": 4, "slug": "status-badge", "title_th": "Badge สถานะ", "module": 1 },
    { "id": 5, "slug": "progress-bar", "title_th": "Progress bar", "module": 1 }
  ]
}
```

**รายการ slug ครบ 100 (ใช้ตรวจสอบ):**

| ID | slug | module |
|----|------|--------|
| 01 | color-toggle-button | 1 |
| 02 | show-hide-text | 1 |
| 03 | profile-card | 1 |
| 04 | status-badge | 1 |
| 05 | progress-bar | 1 |
| 06 | tooltip-hover | 1 |
| 07 | dismissible-alert | 1 |
| 08 | dark-mode-toggle | 1 |
| 09 | counter-plus-minus | 1 |
| 10 | single-todo | 1 |
| 11 | image-swap | 1 |
| 12 | star-rating | 1 |
| 13 | color-picker-preview | 1 |
| 14 | quote-card | 1 |
| 15 | pricing-card | 1 |
| 16 | avatar-status-dot | 1 |
| 17 | breadcrumb | 1 |
| 18 | tag-input | 1 |
| 19 | copy-to-clipboard | 1 |
| 20 | like-button-counter | 1 |
| 21 | basic-navbar | 2 |
| 22 | navbar-hamburger | 2 |
| 23 | sidebar-menu | 2 |
| 24 | footer-three-columns | 2 |
| 25 | hero-section | 2 |
| 26 | feature-cards-grid | 2 |
| 27 | testimonial-card | 2 |
| 28 | stats-counter-section | 2 |
| 29 | team-member-card | 2 |
| 30 | blog-post-card | 2 |
| 31 | image-card-overlay | 2 |
| 32 | photo-grid | 2 |
| 33 | sticky-header | 2 |
| 34 | two-column-layout | 2 |
| 35 | split-screen | 2 |
| 36 | tabs-css-js | 2 |
| 37 | pagination-ui | 2 |
| 38 | bento-grid | 2 |
| 39 | dashboard-widgets | 2 |
| 40 | responsive-gallery | 2 |
| 41 | modal-popup | 3 |
| 42 | modal-click-outside | 3 |
| 43 | accordion | 3 |
| 44 | dropdown-menu | 3 |
| 45 | toast-notification | 3 |
| 46 | tab-switcher-js | 3 |
| 47 | image-slider | 3 |
| 48 | loading-spinner | 3 |
| 49 | skeleton-loader | 3 |
| 50 | search-filter-list | 3 |
| 51 | show-hide-password | 3 |
| 52 | animated-hamburger | 3 |
| 53 | back-to-top | 3 |
| 54 | tooltip-js-position | 3 |
| 55 | confirm-dialog | 3 |
| 56 | image-zoom | 3 |
| 57 | drag-reorder-list | 3 |
| 58 | load-more-mock | 3 |
| 59 | typewriter-effect | 3 |
| 60 | countdown-timer | 3 |
| 61 | login-form | 4 |
| 62 | register-validate | 4 |
| 63 | contact-form | 4 |
| 64 | search-suggestions | 4 |
| 65 | multi-step-wizard | 4 |
| 66 | checkbox-group | 4 |
| 67 | radio-group-styled | 4 |
| 68 | range-slider-value | 4 |
| 69 | file-upload-preview | 4 |
| 70 | otp-input | 4 |
| 71 | textarea-char-count | 4 |
| 72 | password-strength | 4 |
| 73 | inline-errors | 4 |
| 74 | autocomplete-dropdown | 4 |
| 75 | date-picker-ui | 4 |
| 76 | toggle-switch | 4 |
| 77 | survey-scale | 4 |
| 78 | newsletter-signup | 4 |
| 79 | filter-chips | 4 |
| 80 | sortable-table | 4 |
| 81 | animated-button | 5 |
| 82 | neon-text | 5 |
| 83 | flip-card | 5 |
| 84 | 3d-hover-card | 5 |
| 85 | particle-background | 5 |
| 86 | weather-card | 5 |
| 87 | mini-music-player | 5 |
| 88 | pomodoro-timer | 5 |
| 89 | quiz-card | 5 |
| 90 | memory-game-4 | 5 |
| 91 | tic-tac-toe | 5 |
| 92 | rock-paper-scissors | 5 |
| 93 | color-match-game | 5 |
| 94 | snake-mini | 5 |
| 95 | calculator | 5 |
| 96 | stopwatch | 5 |
| 97 | random-quote | 5 |
| 98 | bmi-calculator | 5 |
| 99 | expense-entry | 5 |
| 100 | portfolio-section | 5 |

- [ ] **Step 2: ตรวจ JSON valid**

```powershell
Get-Content projects-manifest.json | ConvertFrom-Json | Select-Object -ExpandProperty projects | Measure-Object
```

Expected: `Count : 100`

- [ ] **Step 3: Commit**

```bash
git add projects-manifest.json
git commit -m "chore: add projects manifest with all 100 entries"
```

---

## Task 3: Starter Templates

**Files:**
- Create: `templates/starter/index.html`
- Create: `templates/starter/style.css`
- Create: `templates/starter/script.js`
- Create: `templates/starter/README.md`

- [ ] **Step 1: สร้าง `templates/starter/index.html`**

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{EP_TITLE}} — EP{{EP_ID}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h1>{{EP_TITLE}}</h1>
    <p class="hint">เริ่มเขียนโค้ดที่นี่ — เปิด Live Server เพื่อดูผลลัพธ์</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: สร้าง `templates/starter/style.css`**

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  background: #f5f5f5;
  color: #1a1a1a;
}

.container {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.hint {
  color: #666;
  font-size: 0.95rem;
}
```

- [ ] **Step 3: สร้าง `templates/starter/script.js`**

```javascript
// EP{{EP_ID}}: {{EP_TITLE}}
// เขียน JavaScript ของคุณที่นี่

console.log("EP{{EP_ID}} พร้อมแล้ว — เริ่มเขียนโค้ดได้เลย");
```

- [ ] **Step 4: สร้าง `templates/starter/README.md`**

```markdown
# EP{{EP_ID}}: {{EP_TITLE}}

**โมดูล:** {{MODULE}}  
**ความยาก:** {{DIFFICULTY}}/5

## วิธีเริ่ม

1. เปิดโฟลเดอร์นี้ใน VS Code
2. คลิกขวา `index.html` → Open with Live Server
3. แก้ไข `index.html`, `style.css`, `script.js`

## โจทย์ท้าทาย

{{CHALLENGE}}

## อ้างอิง

- Video outline: `curriculum/projects/module-0{{MODULE}}-*.md`
```

- [ ] **Step 5: Commit**

```bash
git add templates/
git commit -m "chore: add starter templates for project scaffolding"
```

---

## Task 4: Scaffold Script

**Files:**
- Create: `scripts/scaffold-projects.ps1`
- Create: `scripts/verify-structure.ps1`

- [ ] **Step 1: สร้าง `scripts/scaffold-projects.ps1`**

```powershell
param(
    [int]$From = 1,
    [int]$To = 100,
    [switch]$Force
)

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$manifestPath = Join-Path $root "projects-manifest.json"
$templateDir = Join-Path $root "templates/starter"
$projectsDir = Join-Path $root "projects"

$manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json

foreach ($project in $manifest.projects) {
    if ($project.id -lt $From -or $project.id -gt $To) { continue }

    $folderName = "{0:D2}-{1}" -f $project.id, $project.slug
    $targetDir = Join-Path $projectsDir $folderName

    if ((Test-Path $targetDir) -and -not $Force) {
        Write-Host "Skip (exists): $folderName"
        continue
    }

    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

    $replacements = @{
        "{{EP_ID}}"    = "{0:D2}" -f $project.id
        "{{EP_TITLE}}" = $project.title_th
        "{{MODULE}}"   = $project.module
        "{{DIFFICULTY}}" = if ($project.PSObject.Properties.Name -contains "difficulty") { $project.difficulty } else { "—" }
        "{{CHALLENGE}}"  = if ($project.PSObject.Properties.Name -contains "challenge_th") { $project.challenge_th } else { "ดูใน curriculum module file" }
    }

    foreach ($file in Get-ChildItem $templateDir -File) {
        $content = Get-Content (Join-Path $templateDir $file.Name) -Raw
        foreach ($key in $replacements.Keys) {
            $content = $content.Replace($key, $replacements[$key])
        }
        Set-Content -Path (Join-Path $targetDir $file.Name) -Value $content -Encoding UTF8
    }

    Write-Host "Created: $folderName"
}

Write-Host "Done. Run verify-structure.ps1 to check."
```

- [ ] **Step 2: สร้าง `scripts/verify-structure.ps1`**

```powershell
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
```

- [ ] **Step 3: รัน scaffold ครั้งแรก**

```powershell
.\scripts\scaffold-projects.ps1
.\scripts\verify-structure.ps1
```

Expected: `OK: All 100 projects present with required files.`

- [ ] **Step 4: Commit**

```bash
git add scripts/ projects/
git commit -m "chore: scaffold all 100 project starter folders"
```

---

## Task 5: EP01 Reference Solution

**Files:**
- Create: `projects/01-color-toggle-button/solution/index.html`
- Create: `projects/01-color-toggle-button/solution/style.css`
- Create: `projects/01-color-toggle-button/solution/script.js`

- [ ] **Step 1: สร้าง `solution/index.html`**

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ปุ่มเปลี่ยนสีเมื่อคลิก — EP01</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h1>EP01: ปุ่มเปลี่ยนสีเมื่อคลิก</h1>
    <button id="toggleBtn" class="btn" type="button">กดเปลี่ยนสี</button>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: สร้าง `solution/style.css`**

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  background: #f0f4f8;
}

.container {
  text-align: center;
}

h1 {
  font-size: 1.25rem;
  color: #334155;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.btn:hover {
  background: #2563eb;
}

.btn:active {
  transform: scale(0.98);
}

.btn--active {
  background: #ef4444;
}

.btn--active:hover {
  background: #dc2626;
}
```

- [ ] **Step 3: สร้าง `solution/script.js`**

```javascript
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("btn--active");
});
```

- [ ] **Step 4: ทดสอบด้วยตา**

เปิด `projects/01-color-toggle-button/solution/index.html` ด้วย Live Server  
Expected: ปุ่มสีน้ำเงิน → คลิกเปลี่ยนแดง → คลิกอีกทีกลับน้ำเงิน

- [ ] **Step 5: Commit**

```bash
git add projects/01-color-toggle-button/solution/
git commit -m "feat: add EP01 color toggle button reference solution"
```

---

## Task 6: EP01 Video Script (ละเอียด)

**Files:**
- Create: `projects/01-color-toggle-button/VIDEO-SCRIPT.md`
- Modify: `projects/01-color-toggle-button/README.md`

- [ ] **Step 1: สร้าง `VIDEO-SCRIPT.md`**

คัดลอกและขยายจาก `curriculum/video-template.md` ส่วน EP01 ให้มี:
- บทพูดทุกช่วงเวลา (0:00–20:00)
- โค้ดที่พิมพ์ทีละบล็อก (HTML → CSS → JS)
- จุดที่ต้องสาธิตคลิกปุ่ม
- บทอธิบาย 3 concepts ท้ายตอน
- โจทย์ท้าทายพร้อม hint

โครงสร้างขั้นต่ำ:

```markdown
# EP01 Video Script: ปุ่มเปลี่ยนสีเมื่อคลิก

**ชื่อวิดีโอ:** [EP01] ทำปุ่มเปลี่ยนสีเมื่อคลิก ด้วย HTML CSS JS | สอนมือใหม่
**ความยาวเป้าหมาย:** 18 นาที

## 0:00–0:30 Hook
[บทพูด + สิ่งที่แสดงบนจอ]

## 0:30–5:00 HTML
[บทพูด + โค้ด index.html ทีละบรรทัด]

## 5:00–12:00 CSS
[บทพูด + โค้ด style.css]

## 12:00–17:00 JavaScript
[บทพูด + โค้ด script.js]

## 17:00–19:00 อธิบายหลักการ
1. DOM / getElementById
2. addEventListener
3. classList.toggle

## 19:00–20:00 ท้าทาย
โจทย์: เปลี่ยนสี active เป็นเขียว หรือข้อความ "เปิด"/"ปิด"
```

- [ ] **Step 2: อัปเดต `README.md` ของ EP01**

เพิ่มลิงก์:
- `solution/` — ดูเฉลย (อย่าเปิดก่อนทำเอง)
- `VIDEO-SCRIPT.md` — สำหรับผู้สอน
- `curriculum/projects/module-01-foundations.md` — outline

- [ ] **Step 3: Commit**

```bash
git add projects/01-color-toggle-button/
git commit -m "docs: add EP01 detailed video script and README links"
```

---

## Task 7: Landing Page

**Files:**
- Create: `index.html`
- Create: `landing.css`
- Create: `scripts/generate-landing.ps1`

- [ ] **Step 1: สร้าง `scripts/generate-landing.ps1`**

Script อ่าน `projects-manifest.json` แล้ว generate `index.html` อัตโนมัติ (ป้องกันลิงก์พังเมื่อเพิ่มโปรเจกต์)

```powershell
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$manifest = Get-Content (Join-Path $root "projects-manifest.json") -Raw | ConvertFrom-Json

$moduleNames = @{
    1 = "Foundations"
    2 = "Layout"
    3 = "Interactive"
    4 = "Forms"
    5 = "Creative"
}

$groups = $manifest.projects | Group-Object module | Sort-Object Name

$sections = foreach ($group in $groups) {
    $mod = $group.Name
    $title = $moduleNames[[int]$mod]
    $items = foreach ($p in ($group.Group | Sort-Object id)) {
        $folder = "{0:D2}-{1}" -f $p.id, $p.slug
        "        <li><a href=`"projects/$folder/index.html`">EP$("{0:D2}" -f $p.id): $($p.title_th)</a></li>"
    }
    @"
    <section class="module">
      <h2>Module $mod — $title</h2>
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
    <p>คอร์สสอนมือใหม่ภาษาไทย — คลิกโปรเจกต์เพื่อเริ่มฝึก</p>
    <a class="btn" href="curriculum/README.md">อ่านแผนหลักสูตร</a>
  </header>
  <main class="grid">
$($sections -join "`n")
  </main>
</body>
</html>
"@

Set-Content -Path (Join-Path $root "index.html") -Value $html -Encoding UTF8
Write-Host "Generated index.html"
```

- [ ] **Step 2: สร้าง `landing.css`**

```css
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #1e3a5f, #0f172a);
}

.hero h1 { margin: 0 0 0.5rem; font-size: 2rem; }
.hero p { color: #94a3b8; margin-bottom: 1.5rem; }

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #3b82f6;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
}

.grid {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

.module h2 {
  font-size: 1.1rem;
  color: #38bdf8;
  border-bottom: 1px solid #334155;
  padding-bottom: 0.5rem;
}

.module ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.module li { margin: 0.4rem 0; }

.module a {
  color: #cbd5e1;
  text-decoration: none;
}

.module a:hover { color: #fff; text-decoration: underline; }
```

- [ ] **Step 3: รัน generate และทดสอบ**

```powershell
.\scripts\generate-landing.ps1
```

เปิด `index.html` ด้วย Live Server — คลิกลิงก์ EP01 ต้องไปที่ starter ได้

- [ ] **Step 4: Commit**

```bash
git add index.html landing.css scripts/generate-landing.ps1
git commit -m "feat: add landing page with links to all 100 projects"
```

---

## Task 8: อัปเดต Design Spec สถานะ

**Files:**
- Modify: `docs/superpowers/specs/2026-06-18-100-projects-curriculum-design.md`

- [ ] **Step 1: เปลี่ยนสถานะ spec**

บรรทัด `**สถานะ:**` จาก `เฟส Curriculum` เป็น:

```
**สถานะ:** Implementation กำลังดำเนินการ — starter + EP01 solution + landing page
```

เพิ่มลิงก์ plan:

```markdown
**Implementation plan:** [`docs/superpowers/plans/2026-06-18-100-projects-implementation.md`](../plans/2026-06-18-100-projects-implementation.md)
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/specs/2026-06-18-100-projects-curriculum-design.md
git commit -m "docs: update spec status to implementation phase"
```

---

## Verification Checklist (ก่อนปิดเฟส)

- [ ] `projects-manifest.json` มี 100 entries
- [ ] `.\scripts\verify-structure.ps1` ผ่าน
- [ ] EP01 starter ว่างพร้อมฝึก, `solution/` ทำงานถูกต้อง
- [ ] `index.html` ลิงก์ครบ 100 โปรเจกต์
- [ ] ไม่มี npm/build step — เปิด Live Server ได้ทันที
- [ ] ชื่อโฟลเดอร์ตรง `{NN}-{slug}` ตาม curriculum

---

## Out of Scope (เฟสนี้)

- โซลูชันเต็ม EP02–EP100 (ทำระหว่างอัดวิดีโอทีละตอน)
- สคริปต์วิดีโอละเอียด EP02–EP100
- บันทึกวิดีโอจริง
- Unit test framework (manual browser test เพียงพอ)

---

## Spec Coverage Self-Review

| Spec Requirement | Task |
|------------------|------|
| `projects/{NN}-{slug}/` structure | Task 2, 4 |
| starter `index.html`, `style.css`, `script.js` | Task 3, 4 |
| EP01 reference + video script | Task 5, 6 |
| Landing page | Task 7 |
| Vanilla only, no build tools | ทุก task |
| Thai UI, English identifiers | ระบุใน templates |

**Placeholder scan:** ไม่มี TBD — slug table ครบ 100, code blocks ครบทุก task

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-18-100-projects-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** — dispatch fresh subagent per task, review between tasks

**2. Inline Execution** — execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
