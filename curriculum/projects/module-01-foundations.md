# Module 01: Foundations — พื้นฐานที่ใช้ซ้ำได้ (EP01–EP20)

**ธีม:** DOM, event listener, classList, flexbox เบื้องต้น, state ง่ายๆ  
**ระดับความยาก:** 1–2

---

## EP01 — ปุ่มเปลี่ยนสีเมื่อคลิก

| Field | ค่า |
|-------|-----|
| slug | `color-toggle-button` |
| difficulty | 1 |
| concepts_new | `addEventListener`, `classList.toggle` |
| concepts_review | — |
| estimated_minutes | 18 |

**video_title:** `[EP01] ทำปุ่มเปลี่ยนสีเมื่อคลิก ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: โชว์ปุ่มคลิกแล้วสลับสีน้ำเงิน/แดง
- HTML: `button#toggleBtn.btn`
- CSS: `.btn`, `.btn--active`, flex center body
- JS: `getElementById`, `addEventListener('click')`, `classList.toggle`
- อธิบาย: DOM, event listener, classList
- ท้าทาย: เปลี่ยนสีหรือข้อความตามสถานะ

**challenge_th:** เปลี่ยนสี active เป็นสีเขียว หรือเปลี่ยนข้อความปุ่มเป็น "เปิด"/"ปิด"

---

## EP02 — ปุ่มแสดง/ซ่อนข้อความ

| Field | ค่า |
|-------|-----|
| slug | `show-hide-text` |
| difficulty | 1 |
| concepts_new | `textContent`, toggle `display` |
| concepts_review | `addEventListener`, `classList` |
| estimated_minutes | 16 |

**video_title:** `[EP02] ทำปุ่มแสดง/ซ่อนข้อความ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มแล้วข้อความหาย/โผล่
- HTML: `button` + `p#message`
- CSS: style ข้อความ, class `.hidden { display: none }`
- JS: toggle class hidden หรือเปลี่ยน `textContent`
- อธิบาย: การซ่อน element, textContent vs innerHTML
- ท้าทาย: เปลี่ยนข้อความปุ่มตามสถานะ

**challenge_th:** เปลี่ยนข้อความปุ่มเป็น "แสดง"/"ซ่อน" ตาม state

---

## EP03 — การ์ดโปรไฟล์ง่ายๆ

| Field | ค่า |
|-------|-----|
| slug | `profile-card` |
| difficulty | 1 |
| concepts_new | semantic HTML, box model |
| concepts_review | flexbox center |
| estimated_minutes | 18 |

**video_title:** `[EP03] ทำการ์ดโปรไฟล์ง่ายๆ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดรูป + ชื่อ + ปุ่มติดตาม
- HTML: `article`, `img`, `h2`, `p`, `button`
- CSS: card shadow, border-radius, padding, box model
- JS: ปุ่มติดตามเปลี่ยนข้อความเมื่อคลิก
- อธิบาย: semantic tags, margin/padding/border
- ท้าทาย: เพิ่ม badge "ออนไลน์"

**challenge_th:** เพิ่มจุดสีเขียวแสดงสถานะออนไลน์ข้างชื่อ

---

## EP04 — Badge สถานะ

| Field | ค่า |
|-------|-----|
| slug | `status-badge` |
| difficulty | 1 |
| concepts_new | inline elements, `border-radius` |
| concepts_review | classList, semantic HTML |
| estimated_minutes | 15 |

**video_title:** `[EP04] ทำ Badge สถานะ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: badge สีต่างๆ (สำเร็จ, รอ, ยกเลิก) สลับได้
- HTML: `span.badge` หลายแบบ
- CSS: pill shape, สีตาม modifier class
- JS: คลิกสลับสถานะ badge
- อธิบาย: inline vs block, modifier class pattern
- ท้าทาย: เพิ่มสถานะใหม่

**challenge_th:** เพิ่ม badge "กำลังดำเนินการ" สีส้ม

---

## EP05 — Progress bar

| Field | ค่า |
|-------|-----|
| slug | `progress-bar` |
| difficulty | 1 |
| concepts_new | width %, CSS custom properties เบื้องต้น |
| concepts_review | box model |
| estimated_minutes | 17 |

**video_title:** `[EP05] ทำ Progress bar ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แถบความคืบหน้าเพิ่มเมื่อกดปุ่ม
- HTML: `.progress` > `.progress__bar`
- CSS: container + bar, `--progress` variable
- JS: ปุ่ม +10% อัปเดต width และตัวเลข
- อธิบาย: percentage width, CSS variables
- ท้าทาย: หยุดที่ 100% ไม่เกิน

**challenge_th:** ป้องกันไม่ให้ progress เกิน 100%

---

## EP06 — Tooltip hover

| Field | ค่า |
|-------|-----|
| slug | `tooltip-hover` |
| difficulty | 2 |
| concepts_new | `:hover`, `position: relative/absolute` |
| concepts_review | inline elements |
| estimated_minutes | 18 |

**video_title:** `[EP06] ทำ Tooltip hover ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: hover ปุ่มแล้วขึ้นคำอธิบาย
- HTML: wrapper + trigger + `.tooltip`
- CSS: absolute positioning, opacity transition
- JS: คลิกปุ่ม lock tooltip เปิด/ปิด (เสริม)
- อธิบาย: relative/absolute, :hover pseudo-class
- ท้าทาย: ย้าย tooltip ไปด้านล่าง

**challenge_th:** แสดง tooltip ด้านล่างปุ่มแทนด้านบน

---

## EP07 — Alert box ปิดได้

| Field | ค่า |
|-------|-----|
| slug | `dismissible-alert` |
| difficulty | 2 |
| concepts_new | `remove()`, close button |
| concepts_review | addEventListener |
| estimated_minutes | 16 |

**video_title:** `[EP07] ทำ Alert box ปิดได้ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กล่องแจ้งเตือนกด X แล้วหาย
- HTML: `.alert` + ปุ่มปิด + ข้อความ
- CSS: สีตามประเภท (info, warning)
- JS: คลิกปิด → `element.remove()`
- อธิบาย: ลบ element จาก DOM
- ท้าทาย: กดปิดแล้ว fade out ก่อนหาย

**challenge_th:** เพิ่ม animation fade out ก่อน remove

---

## EP08 — Toggle Dark Mode

| Field | ค่า |
|-------|-----|
| slug | `dark-mode-toggle` |
| difficulty | 2 |
| concepts_new | `data-theme`, CSS custom properties |
| concepts_review | classList.toggle |
| estimated_minutes | 20 |

**video_title:** `[EP08] ทำ Toggle Dark Mode ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: สลับธีมสว่าง/มืดทั้งหน้า
- HTML: ปุ่ม toggle + เนื้อหาตัวอย่าง
- CSS: `:root` variables, `[data-theme="dark"]` overrides
- JS: สลับ `data-theme` บน `document.documentElement`
- อธิบาย: CSS variables, data attributes
- ท้าทาย: จำธีมใน localStorage (เตรียม EP99)

**challenge_th:** เปลี่ยนสี accent ในโหมดมืด

---

## EP09 — Counter +/-

| Field | ค่า |
|-------|-----|
| slug | `counter-plus-minus` |
| difficulty | 2 |
| concepts_new | ตัวแปร state, อัปเดต DOM |
| concepts_review | addEventListener |
| estimated_minutes | 17 |

**video_title:** `[EP09] ทำ Counter +/- ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ปุ่ม + และ - เปลี่ยนตัวเลข
- HTML: ปุ่มลบ, `span#count`, ปุ่มบวก
- CSS: flex row, ปุ่มกลม
- JS: `let count = 0`, อัปเดต `textContent`
- อธิบาย: state ใน JS vs DOM
- ท้าทาย: ห้ามต่ำกว่า 0

**challenge_th:** ป้องกันตัวเลขติดลบ

---

## EP10 — Todo รายการเดียว

| Field | ค่า |
|-------|-----|
| slug | `single-todo` |
| difficulty | 2 |
| concepts_new | `input` value, checkbox `checked` |
| concepts_review | state, textContent |
| estimated_minutes | 18 |

**video_title:** `[EP10] ทำ Todo รายการเดียว ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พิมพ์งาน + เช็คแล้วขีดฆ่า
- HTML: `input[type=text]`, `checkbox`, `label`
- CSS: strikethrough เมื่อ checked
- JS: อัปเดต label, toggle class done
- อธิบาย: input value, checked property
- ท้าทาย: กด Enter แล้วบันทึกข้อความ

**challenge_th:** กด Enter ในช่อง input แล้วอัปเดตรายการ

---

## EP11 — สลับรูป 2 รูป

| Field | ค่า |
|-------|-----|
| slug | `image-swap` |
| difficulty | 2 |
| concepts_new | `src` attribute, array index |
| concepts_review | addEventListener |
| estimated_minutes | 16 |

**video_title:** `[EP11] ทำสลับรูป 2 รูป ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกแล้วรูปสลับไปอีกรูป
- HTML: `img#photo`, ปุ่มสลับ
- CSS: ขนาดรูปคงที่, border-radius
- JS: array 2 URL, สลับ index อัปเดต src
- อธิบาย: เปลี่ยน attribute ด้วย JS
- ท้าทาย: เพิ่มรูปที่ 3

**challenge_th:** ขยายเป็น 3 รูปวนลูป

---

## EP12 — Star rating คลิก

| Field | ค่า |
|-------|-----|
| slug | `star-rating` |
| difficulty | 2 |
| concepts_new | loop, active state |
| concepts_review | classList |
| estimated_minutes | 20 |

**video_title:** `[EP12] ทำ Star rating คลิก ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกดาว 1–5 แล้วไฮไลต์
- HTML: 5 ปุ่มหรือ span ดาว
- CSS: ดาวว่าง/เต็ม, hover effect
- JS: loop ใส่/เอา class active ตามคะแนน
- อธิบาย: for loop, state คะแนน
- ท้าทาย: แสดงข้อความ "คุณให้ X ดาว"

**challenge_th:** แสดงข้อความคะแนนใต้ดาว

---

## EP13 — Color picker preview

| Field | ค่า |
|-------|-----|
| slug | `color-picker-preview` |
| difficulty | 2 |
| concepts_new | `input[type=color]`, style binding |
| concepts_review | addEventListener |
| estimated_minutes | 17 |

**video_title:** `[EP13] ทำ Color picker preview ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เลือกสีแล้วกล่องเปลี่ยนสีทันที
- HTML: `input[type=color]`, `.preview-box`
- CSS: กล่องใหญ่, transition สี
- JS: `input` event อัปเดต `backgroundColor`
- อธิบาย: input event, style property
- ท้าทาย: แสดง hex code ใต้กล่อง

**challenge_th:** แสดงรหัสสี hex ที่เลือก

---

## EP14 — Quote card

| Field | ค่า |
|-------|-----|
| slug | `quote-card` |
| difficulty | 2 |
| concepts_new | typography, `blockquote` |
| concepts_review | card layout |
| estimated_minutes | 17 |

**video_title:** `[EP14] ทำ Quote card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดคำคมสวย + ปุ่มสุ่มคำคมใหม่
- HTML: `blockquote`, `cite`, ปุ่มสุ่ม
- CSS: font-size, line-height, เครื่องหมายคำพูด
- JS: array คำคม, สุ่ม index แสดงใหม่
- อธิบาย: typography basics, blockquote
- ท้าทาย: ปุ่มกดแล้วไม่ซ้ำคำคมเดิมทันที

**challenge_th:** หลีกเลี่ยงคำคมซ้ำติดกัน

---

## EP15 — Pricing card

| Field | ค่า |
|-------|-----|
| slug | `pricing-card` |
| difficulty | 2 |
| concepts_new | flexbox, visual emphasis |
| concepts_review | button click |
| estimated_minutes | 18 |

**video_title:** `[EP15] ทำ Pricing card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดราคา 3 แพ็ก ไฮไลต์แพ็กกลาง
- HTML: ราคา, รายการ feature, ปุ่มเลือก
- CSS: flex column, featured scale/border
- JS: คลิกปุ่มแสดง "เลือกแพ็ก X"
- อธิบาย: flexbox column, emphasis ด้วย CSS
- ท้าทาย: สลับแพ็ก featured ได้

**challenge_th:** คลิกการ์ดแล้วไฮไลต์การ์ดนั้น

---

## EP16 — Avatar + status dot

| Field | ค่า |
|-------|-----|
| slug | `avatar-status-dot` |
| difficulty | 2 |
| concepts_new | `position`, pseudo-element |
| concepts_review | toggle state |
| estimated_minutes | 17 |

**video_title:** `[EP16] ทำ Avatar + status dot ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: รูปโปรไฟล์ + จุดสีสถานะ คลิกสลับออนไลน์/ออฟไลน์
- HTML: `.avatar` wrapper + `img`
- CSS: `::after` จุดสี, position absolute
- JS: toggle class online/offline
- อธิบาย: pseudo-element, positioned children
- ท้าทาย: เพิ่มสถานะ "ไม่ว่าง" สีเหลือง

**challenge_th:** รองรับ 3 สถานะ: ออนไลน์, ออฟไลน์, ไม่ว่าง

---

## EP17 — Breadcrumb

| Field | ค่า |
|-------|-----|
| slug | `breadcrumb` |
| difficulty | 2 |
| concepts_new | list semantics, separator |
| concepts_review | typography |
| estimated_minutes | 16 |

**video_title:** `[EP17] ทำ Breadcrumb ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เส้นทาง หน้าแรก > สินค้า > รายละเอียด คลิกได้
- HTML: `nav` > `ol` > `li` + links
- CSS: separator ด้วย `::after` หรือ content
- JS: คลิกแล้วแสดงชื่อหน้าปัจจุบัน
- อธิบาย: nav/ol semantics, breadcrumb UX
- ท้าทาย: หน้าสุดท้ายไม่ใช่ link

**challenge_th:** รายการสุดท้ายเป็นข้อความธรรมดา ไม่คลิกได้

---

## EP18 — Tag เพิ่ม/ลบ

| Field | ค่า |
|-------|-----|
| slug | `tag-input` |
| difficulty | 2 |
| concepts_new | `createElement`, `appendChild` |
| concepts_review | input value |
| estimated_minutes | 20 |

**video_title:** `[EP18] ทำ Tag เพิ่ม/ลบ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พิมพ์ tag กด Enter แล้วปรากฏ chip ลบได้
- HTML: `input`, `.tag-list`
- CSS: chip pill + ปุ่ม x
- JS: สร้าง element ใหม่, ลบเมื่อคลิก x
- อธิบาย: สร้าง/ลบ DOM แบบ dynamic
- ท้าทาย: ห้าม tag ซ้ำ

**challenge_th:** ป้องกันเพิ่ม tag ชื่อซ้ำ

---

## EP19 — ปุ่ม Copy ข้อความ

| Field | ค่า |
|-------|-----|
| slug | `copy-to-clipboard` |
| difficulty | 2 |
| concepts_new | `navigator.clipboard`, fallback |
| concepts_review | addEventListener |
| estimated_minutes | 18 |

**video_title:** `[EP19] ทำปุ่ม Copy ข้อความ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มแล้วคัดลอกข้อความ + แสดง "คัดลอกแล้ว"
- HTML: ข้อความ + ปุ่ม copy
- CSS: ปุ่ม + toast เล็ก
- JS: `clipboard.writeText`, fallback `execCommand`
- อธิบาย: Clipboard API, UX feedback
- ท้าทาย: กลับข้อความปุ่มเป็นเดิมหลัง 2 วินาที

**challenge_th:** ข้อความ "คัดลอกแล้ว" หายหลัง 2 วินาที

---

## EP20 — Like button + ตัวนับ

| Field | ค่า |
|-------|-----|
| slug | `like-button-counter` |
| difficulty | 2 |
| concepts_new | toggle state, เก็บ count |
| concepts_review | classList, textContent |
| estimated_minutes | 18 |

**video_title:** `[EP20] ทำ Like button + ตัวนับ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดหัวใจ ตัวเลข +1 และเปลี่ยนสี กดอีกที -1
- HTML: ปุ่มไอคอน + `span#count`
- CSS: สีเทา/แดง, scale animation
- JS: `liked` boolean, อัปเดต count
- อธิบาย: toggle + derived display
- ท้าทาย: ห้ามต่ำกว่า 0

**challenge_th:** ป้องกัน unlike จน count ติดลบ

---

## สรุปโมดูล 01

**สิ่งที่ผู้เรียนได้:** DOM, events, classList, flexbox เบื้องต้น, state, สร้าง/ลบ element  
**แนะนำท้ายโมดูล:** วิดีโอสรุป EP01–EP20 + ทบทวน concept map โมดูล 1
