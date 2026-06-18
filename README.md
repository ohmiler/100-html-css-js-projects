# 100 HTML/CSS/JS Projects

ชุดโปรเจกต์ฝึกเขียนเว็บ **100 ชิ้น** ด้วย Vanilla HTML, CSS และ JavaScript — ออกแบบมาสำหรับมือใหม่ที่อยากลงมือทำจริง ทีละ component เล็กๆ จนครบทั้งคอร์ส

ทุกโปรเจกต์เป็นโค้ดที่รันได้ทันที มีคำอธิบายภาษาไทยในโค้ด และแต่ละหน้าแสดงเฉพาะส่วนงานของโปรเจกต์นั้น ไม่มี framework ไม่ต้องติดตั้ง npm

---

## เหมาะกับใคร

- เคยเห็นหรือคัดลอกโค้ด HTML/CSS/JS มาบ้าง แต่อยากเข้าใจว่าทำงานอย่างไร
- อยากสะสมผลงาน UI component เป็นพอร์ตโฟลิโอ
- ต้องการฐานรากก่อนไปเรียน React, Vue หรือ framework อื่น

---

## จะได้อะไรจากคอร์สนี้

หลังทำครบ 100 โปรเจกต์ ผู้เรียนจะคุ้นเคยกับ:

- DOM, event, classList, และการอัปเดตหน้าเว็บด้วย JavaScript
- Layout ด้วย Flexbox และ CSS Grid รวมถึง responsive design
- UI ที่ตอบสนองผู้ใช้ — modal, slider, toast, animation
- ฟอร์มและ validation — OTP, wizard, autocomplete
- Mini app และเกมเล็กๆ — timer, calculator, snake, portfolio

---

## วิธีเริ่มต้น

```bash
git clone https://github.com/ohmiler/100-html-css-js-projects.git
cd 100-html-css-js-projects
```

1. ติดตั้ง [VS Code](https://code.visualstudio.com/) และ extension **Live Server**
2. เปิด [`index.html`](index.html) แล้วกด **Go Live** — จะเห็นลิงก์ไปทุกโปรเจกต์
3. เลือก EP ที่สนใจ แล้วเปิด `index.html` ในโฟลเดอร์นั้น
4. อ่านลำดับการเรียนและรายละเอียดแต่ละตอนได้ที่ [`curriculum/README.md`](curriculum/README.md)

ตัวอย่างโปรเจกต์แรก: `projects/001-color-toggle-button/`

---

## โครงสร้างคอร์ส (5 โมดูล)

| โมดูล | EP | เนื้อหา |
|-------|-----|---------|
| **01 — Foundations** | 01–20 | ปุ่ม, การ์ด, counter, toggle, dark mode |
| **02 — Layout** | 21–40 | Navbar, grid, hero, sticky header, bento |
| **03 — Interactive** | 41–60 | Modal, accordion, slider, toast, countdown |
| **04 — Forms** | 61–80 | Login, validation, OTP, wizard, autocomplete |
| **05 — Creative** | 81–100 | Animation, เกม, mini app, portfolio |

รายละเอียดแต่ละ EP (video outline, challenge) อยู่ในโฟลเดอร์ [`curriculum/projects/`](curriculum/projects/)

---

## โครงสร้างใน Repo

```
├── index.html                 # หน้ารวมลิงก์ทุกโปรเจกต์
├── projects-manifest.json     # ชื่อและ metadata ของ 100 โปรเจกต์
├── curriculum/                # แผนหลักสูตร + concept map
└── projects/
    └── 001-color-toggle-button/
        ├── index.html
        ├── style.css
        └── script.js
```

โฟลเดอร์โปรเจกต์ใช้เลขนำหน้า **3 หลัก** (`001`, `010`, `100`) เพื่อให้เรียงลำดับถูกต้อง

---

## รูปแบบโค้ด

แต่ละโปรเจกต์มี 3 ไฟล์ — `index.html`, `style.css`, `script.js`

- โค้ดทำงานได้ครบ เปิดแล้วลองได้เลย
- คำอธิบายภาษาไทยอยู่ใน comment ของโค้ด ช่วยให้ตามทำและเข้าใจทีละบรรทัด
- ข้อความบนหน้าเว็บเป็นภาษาไทย ส่วน `class`, `id` และ function ใช้ภาษาอังกฤษตาม convention ทั่วไป
- หน้าเว็บแสดงเฉพาะ component ไม่มีหัวข้อ EP หรือคำแนะนำรบกวน

---

## แนวทางการเรียน

คอร์สนี้ใช้รูปแบบ **Build-first** — ลงมือทำให้เห็นผลก่อน แล้วค่อยอธิบาย concept ทีหลัง

ท้ายแต่ละ EP มี challenge เล็กๆ ให้ลองต่อยอดเอง ดูได้จาก `challenge_th` ใน [`projects-manifest.json`](projects-manifest.json) หรือไฟล์ curriculum ของแต่ละโมดูล

---

## Tech Stack

| | |
|---|---|
| HTML5 | โครงสร้างหน้าเว็บ |
| CSS3 | Flexbox, Grid, animation, custom properties |
| JavaScript | Vanilla ES6+ ไม่มี library |
| เครื่องมือ | VS Code + Live Server |

ไม่มี build step ไม่ต้อง `npm install`

---

## เอกสารเพิ่มเติม

- [แผนหลักสูตร](curriculum/README.md)
- [Concept map](curriculum/concept-map.md) — แผนที่ concept ที่เรียนซ้ำและสะสมไปเรื่อยๆ
- [Video template](curriculum/video-template.md) — โครงวิดีโอแต่ละ EP

---

## License

โค้ดใน repo นี้เปิดให้ใช้เพื่อการเรียนรู้และอ้างอิงสำหรับคอร์ส 100 HTML/CSS/JS Projects
