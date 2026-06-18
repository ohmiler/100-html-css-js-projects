# Design Spec: 100 HTML/CSS/JS Projects สำหรับมือใหม่

**วันที่:** 2026-06-18  
**สถานะ:** Implementation เสร็จสมบูรณ์ — starter 100 โปรเจกต์ + EP01 solution + landing page  
**Implementation plan:** [`docs/superpowers/plans/2026-06-18-100-projects-implementation.md`](../plans/2026-06-18-100-projects-implementation.md)

---

## 1. วัตถุประสงค์

สร้างแผนหลักสูตรวิดีโอสอนพื้นฐาน HTML, CSS, JavaScript ภาษาไทย โดยพาผู้เรียนมือใหม่ทำโปรเจกต์ component เล็ก 100 ชิ้น เพื่อให้เข้าใจหลักการและฝึกทำเอง ไม่ใช่แค่คัดลอกโค้ด

**Deliverable เฟสนี้:**
- รายการ 100 โปรเจกต์พร้อม metadata
- Video outline แต่ละตอน (build-first)
- เทมเพลตสคริปต์วิดีโอ
- แผนที่ concept ข้ามทั้งคอร์ส

**อยู่นอกขอบเขตเฟสนี้:** บันทึกวิดีโอ, โค้ดจริง, เว็บไซต์คอร์ส, framework/build tools

---

## 2. ข้อตกลงจาก Brainstorming

| หัวข้อ | การตัดสินใจ |
|--------|-------------|
| เป้าหมายเฟสนี้ | แผนหลักสูตรก่อน |
| กลุ่มผู้ชม | คัดลอกโค้ดได้ แต่อยากเข้าใจหลักการ |
| ภาษา | ไทยทั้งหมด (วิดีโอ, เอกสาร, comment ในโค้ด) |
| ขนาดโปรเจกต์ | Component เล็ก (~15–30 นาที/ตอน) |
| รูปแบบสอน | Build-first — พาทำก่อน → อธิบายทีหลัง |
| เทคโนโลยี | Vanilla HTML/CSS/JS เท่านั้น |
| การเรียนรู้ | ทุกโปรเจกต์ใช้ HTML+CSS+JS ร่วมกัน |
| Deliverable | รายการ 100 โปรเจกต์ + outline วิดีโอแต่ละตอน |

---

## 3. แนวทางหลักสูตร: Spiral + Concept Tags

### ทางเลือกที่พิจารณา

1. **จัดตามประเภท UI** — ผลิตเป็น batch ได้เร็ว แต่ความยากไม่สม่ำเสมอ
2. **จัดตามระดับ JS** — learning curve ชัด แต่ playlist แยกยาก
3. **Spiral + Concept Tags (เลือก)** — ทุกตอนใช้ HTML+CSS+JS, เพิ่ม concept ใหม่ทีละ 1–2 อย่าง, ทบทวน concept เดิมในโปรเจกต์ใหม่

### เหตุผลที่เลือกแนวทาง 3

- สอดคล้องกับข้อกำหนด "ทุกโปรเจกต์ใช้ทั้งสามอย่าง"
- เหมาะกับกลุ่มผู้ชมที่อยากเข้าใจหลักการ ไม่ใช่ท่องสูตร
- แต่ละโปรเจกต์มี `concepts_new` และ `concepts_review` ชัดเจน

---

## 4. โครงสร้าง 5 โมดูล

| โมดูล | โปรเจกต์ | ธีม | ระดับความยาก |
|-------|----------|-----|--------------|
| 01 Foundations | 01–20 | DOM, event, classList, flexbox เบื้องต้น | 1–2 |
| 02 Layout | 21–40 | Flexbox, grid, responsive, sticky | 2–3 |
| 03 Interactive | 41–60 | Modal, animation, timer, event delegation | 3–4 |
| 04 Forms | 61–80 | Validation, form UX, input patterns | 3–4 |
| 05 Creative | 81–100 | Animation, mini apps, game loop, localStorage | 4–5 |

แต่ละโมดูลจบด้วยวิดีโอสรุป (optional) ใน production phase

---

## 5. โครงสร้างไฟล์ใน Repo

```
100-html-css-js-projects/
├── docs/superpowers/specs/     # design spec (ไฟล์นี้)
├── docs/superpowers/plans/     # implementation plan (เฟสถัดไป)
├── curriculum/
│   ├── README.md
│   ├── video-template.md
│   ├── concept-map.md
│   └── projects/
│       ├── module-01-foundations.md
│       ├── module-02-layout.md
│       ├── module-03-interactive.md
│       ├── module-04-forms.md
│       └── module-05-creative.md
└── projects/                   # โค้ดจริง (เฟส implementation)
    └── {NN}-{slug}/
```

---

## 6. Schema ข้อมูลโปรเจกต์

แต่ละโปรเจกต์ในไฟล์ module มี fields ดังนี้:

| Field | คำอธิบาย |
|-------|----------|
| `id` | เลข 01–100 |
| `title_th` | ชื่อภาษาไทย |
| `slug` | ชื่อโฟลเดอร์ภาษาอังกฤษ เช่น `color-toggle-button` |
| `module` | 1–5 |
| `difficulty` | 1–5 |
| `concepts_new` | concept ใหม่ที่สอนในตอนนี้ |
| `concepts_review` | concept ที่ทบทวนจากตอนก่อน |
| `video_title` | ชื่อวิดีโอ YouTube |
| `video_outline` | bullet ตามเทมเพลต build-first |
| `challenge_th` | โจทย์ท้าทายหลังจบตอน |
| `estimated_minutes` | 15–30 |

### กฎการตั้งชื่อ

- **วิดีโอ:** `[EP{NN}] ทำ{ชื่อโปรเจกต์} ด้วย HTML CSS JS | สอนมือใหม่`
- **โฟลเดอร์:** `projects/{NNN}-{slug}/` (เลข 3 หลัก) เช่น `projects/001-color-toggle-button/`, `projects/010-single-todo/`, `projects/100-portfolio-section/`
- **โค้ด:** ข้อความ UI และ comment เป็นภาษาไทยได้ แต่ `class`, `id`, ชื่อ function/variable ใช้ภาษาอังกฤษ

---

## 7. เทมเพลตวิดีโอ (Build-first)

ความยาวเป้าหมาย ~20 นาที (โปรเจกต์ยากถึง 30 นาที)

| ช่วงเวลา | เนื้อหา |
|----------|---------|
| 0:00–0:30 | โชว์ผลลัพธ์สุดท้าย + บอกว่าตอนนี้จะได้อะไร |
| 0:30–5:00 | สร้าง HTML structure (ยังไม่อธิบายลึก) |
| 5:00–12:00 | ใส่ CSS จนหน้าตาสวย |
| 12:00–17:00 | เพิ่ม JS ให้ทำงาน |
| 17:00–19:00 | ย้อนอธิบาย "ทำไมถึงทำแบบนี้" (2–3 concept) |
| 19:00–20:00 | ท้าทาย: ปรับแต่ง/เพิ่มฟีเจอร์เล็กน้อย |

รายละเอียดเต็มและตัวอย่าง EP01 อยู่ใน [`curriculum/video-template.md`](../../../curriculum/video-template.md)

---

## 8. เครื่องมือที่ผู้เรียนต้องมี

- เบราว์เซอร์ (Chrome หรือ Firefox)
- [VS Code](https://code.visualstudio.com/)
- Extension: Live Server
- ไม่ต้องติดตั้ง Node.js หรือ npm

---

## 9. ความเสี่ยงและการจัดการ

| ความเสี่ยง | แนวทาง |
|-----------|--------|
| 100 ตอนยาวเกิน ผู้ชมเลิกกลางทาง | แบ่ง playlist ตามโมดูล, สรุปสิ่งที่ได้ท้ายแต่ละโมดูล |
| Concept ซ้ำในโมดูลต้น | ใช้ `concepts_review` อย่างมีสติ — ทบทวนไม่ใช่สอนใหม่ |
| โปรเจกต์ท้ายยากเกิน (Snake, game) | Module 5 ระบุเป็น playlist "โบนัส" ในคำอธิบายวิดีโอ |
| ภาษาไทยในโค้ด | UI/comment ไทยได้, identifier อังกฤษเสมอ |

---

## 10. รายการโปรเจกต์ทั้ง 100

รายละเอียดครบทุกโปรเจกต์ (video outline, challenge, concepts) อยู่ใน:

- [`curriculum/projects/module-01-foundations.md`](../../../curriculum/projects/module-01-foundations.md)
- [`curriculum/projects/module-02-layout.md`](../../../curriculum/projects/module-02-layout.md)
- [`curriculum/projects/module-03-interactive.md`](../../../curriculum/projects/module-03-interactive.md)
- [`curriculum/projects/module-04-forms.md`](../../../curriculum/projects/module-04-forms.md)
- [`curriculum/projects/module-05-creative.md`](../../../curriculum/projects/module-05-creative.md)

แผนที่ concept รวมอยู่ใน [`curriculum/concept-map.md`](../../../curriculum/concept-map.md)

---

## 11. เฟสถัดไป (หลัง User อนุมัติ Spec)

1. สร้าง `projects/01–100/` พร้อม starter template (`index.html`, `style.css`, `script.js`)
2. เขียนสคริปต์วิดีโอละเอียดสำหรับ EP01 เป็นแม่แบบ
3. (Optional) Landing page รวมลิงก์ทุกโปรเจกต์
