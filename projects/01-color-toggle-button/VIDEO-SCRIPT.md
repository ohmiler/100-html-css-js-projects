# EP01 Video Script: ปุ่มเปลี่ยนสีเมื่อคลิก

**ชื่อวิดีโอ:** [EP01] ทำปุ่มเปลี่ยนสีเมื่อคลิก ด้วย HTML CSS JS | สอนมือใหม่  
**ความยาวเป้าหมาย:** 18 นาที  
**concepts_new:** `addEventListener`, `classList.toggle`  
**เฉลยอ้างอิง:** [`solution/`](solution/)

---

## 0:00–0:30 — Hook

**บทพูด:**

> สวัสดีครับ ยินดีต้อนรับสู่ EP01 ของคอร์ส 100 โปรเจกต์ HTML CSS JS สำหรับมือใหม่ วันนี้เราจะทำปุ่มที่กดแล้วเปลี่ยนสีแบบนี้ ตอนจบคุณจะเข้าใจพื้นฐาน HTML structure, CSS class, และ JavaScript event listener มาเริ่มกันเลย

**บนจอ:** เปิด `solution/index.html` สาธิตคลิกปุ่ม สีน้ำเงิน ↔ แดง

---

## 0:30–5:00 — HTML

**บทพูด:**

> สร้างไฟล์ index.html ก่อน ใส่ปุ่มหนึ่งปุ่ม ให้ id กับ class ไว้เพื่อเอาไป style และเขียน JS ทีหลัง

**พิมพ์โค้ดทีละส่วน:**

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

**สาธิต:** เปิด Live Server — ปุ่มยังไม่สวย (ยังไม่มี CSS)

---

## 5:00–12:00 — CSS

**บทพูด:**

> ใส่ CSS ให้ปุ่มสวย สร้าง class สำหรับสถานะ active แยกไว้ จะได้สลับด้วย JavaScript ทีหลัง

**พิมพ์โค้ด `style.css`:**

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

**สาธิต:** เปิด DevTools → เพิ่ม class `btn--active` ให้ปุ่ม → สีเปลี่ยนแดง

---

## 12:00–17:00 — JavaScript

**บทพูด:**

> เลือกปุ่มจาก DOM ด้วย getElementById แล้วฟัง event click เมื่อกดให้ toggle class active

**พิมพ์โค้ด `script.js`:**

```javascript
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("btn--active");
});
```

**สาธิต:** คลิกปุ่มบนหน้าเว็บ — สีสลับได้

---

## 17:00–19:00 — อธิบายหลักการ

**1. DOM และ getElementById**

> DOM คือต้นไม้ของ element ในหน้าเว็บ JavaScript เข้าถึง element ผ่าน id, class, หรือ querySelector

**2. addEventListener**

> addEventListener บอกว่าเมื่อเกิด event อะไร (เช่น click) ให้รัน function นี้ ดีกว่า onclick ใน HTML เพราะแยก logic ออกจาก structure

**3. classList.toggle**

> classList จัดการ class ของ element toggle คือมีอยู่แล้วเอาออก ไม่มีก็ใส่เข้า — เหมาะกับสถานะเปิด/ปิด

---

## 19:00–20:00 — ท้าทาย

**โจทย์:** เปลี่ยนสี active เป็นสีเขียว หรือเปลี่ยนข้อความปุ่มเป็น "เปิด"/"ปิด" ตามสถานะ

**Hint:**

- สีเขียว: แก้ `.btn--active { background: #22c55e; }`
- ข้อความ: ใน event handler ตรวจ `classList.contains('btn--active')` แล้วเปลี่ยน `textContent`

**บทพูดปิด:**

> ท้าทายหลังจบตอน: ปรับสี active หรือข้อความบนปุ่มตามสถานะ ลองทำดูแล้วเจอกัน EP02 ครับ
