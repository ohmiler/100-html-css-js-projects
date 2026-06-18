# 100 HTML/CSS/JS Projects

คอร์สสอนมือใหม่ภาษาไทย — 100 โปรเจกต์ component เล็กด้วย Vanilla HTML, CSS, JavaScript

## เริ่มต้น

1. Clone repo นี้
2. ติดตั้ง [VS Code](https://code.visualstudio.com/) + extension **Live Server**
3. เปิด `index.html` หรือโฟลเดอร์โปรเจกต์ที่ต้องการ แล้วคลิก "Go Live"
4. อ่านแผนหลักสูตรใน [`curriculum/README.md`](curriculum/README.md)

## โครงสร้าง

- `curriculum/` — แผนหลักสูตร, video outline, concept map
- `projects/` — โปรเจกต์ 01–100 (โค้ดสมบูรณ์พร้อม comment สำหรับอัดวิดีโอ)
- `index.html` — หน้ารวมลิงก์ทุกโปรเจกต์

## รูปแบบโค้ดในแต่ละโปรเจกต์

- โค้ดทำงานได้ครบทุกไฟล์ (`index.html`, `style.css`, `script.js`)
- มี **comment ภาษาไทย** อธิบายในโค้ด — ใช้เป็นสคริปต์ตอนสอนในวิดีโอ
- ข้อความ UI เป็นภาษาไทย, `class`/`id`/function เป็นภาษาอังกฤษ

## สถานะโปรเจกต์

| โมดูล | EP | สถานะ |
|-------|-----|--------|
| 01 Foundations | 01–20 | โค้ดสมบูรณ์ |
| 02–05 | 21–100 | รอทำ (starter) |

## สร้างโปรเจกต์ใหม่ (สำหรับผู้ดูแล)

```powershell
.\scripts\scaffold-projects.ps1
```

## ตรวจสอบโครงสร้าง

```powershell
.\scripts\verify-structure.ps1
```
