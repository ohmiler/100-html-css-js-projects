# Module 03: Interactive — UI ที่ตอบสนองผู้ใช้ (EP41–EP60)

**ธีม:** Modal, animation, timer, event delegation, keyboard interaction  
**ระดับความยาก:** 3–4

---

## EP41 — Modal popup

| Field | ค่า |
|-------|-----|
| slug | `modal-popup` |
| difficulty | 3 |
| concepts_new | `display:none`, focus trap เบื้องต้น |
| concepts_review | overlay, button |
| estimated_minutes | 20 |

**video_title:** `[EP41] ทำ Modal popup ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มเปิดกล่องโมดัลกลางจอ
- HTML: overlay + `.modal` + ปุ่มปิด
- CSS: fixed full screen, center modal
- JS: toggle class `modal--open`
- อธิบาย: modal layering, z-index
- ท้าทาย: กด Escape ปิด modal

**challenge_th:** ปุ่ม Escape บนคีย์บอร์ดปิด modal ได้

---

## EP42 — Modal ปิดเมื่อคลิกนอก

| Field | ค่า |
|-------|-----|
| slug | `modal-click-outside` |
| difficulty | 3 |
| concepts_new | event `target` vs `currentTarget` |
| concepts_review | modal |
| estimated_minutes | 18 |

**video_title:** `[EP42] ทำ Modal ปิดเมื่อคลิกนอก ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกพื้นหลังมืดแล้วปิด คลิกในกล่องไม่ปิด
- HTML: ต่อจาก EP41
- CSS: (ใช้เดิม)
- JS: ตรวจ `e.target === overlay`
- อธิบาย: event bubbling, target
- ท้าทาย: ป้องกัน scroll body เมื่อ modal เปิด

**challenge_th:** ล็อก scroll หน้าหลักเมื่อ modal เปิด

---

## EP43 — Accordion

| Field | ค่า |
|-------|-----|
| slug | `accordion` |
| difficulty | 3 |
| concepts_new | max-height transition |
| concepts_review | toggle class |
| estimated_minutes | 20 |

**video_title:** `[EP43] ทำ Accordion ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกหัวข้อขยาย/ยุบเนื้อหา
- HTML: หลาย `.accordion-item`
- CSS: ซ่อน content, animate max-height
- JS: เปิดทีละอัน (หรือหลายอัน)
- อธิบาย: height animation caveat
- ท้าทาย: ไอคอน + หมุนเมื่อเปิด

**challenge_th:** ลูกศรหมุน 180° เมื่อขยาย

---

## EP44 — Dropdown menu

| Field | ค่า |
|-------|-----|
| slug | `dropdown-menu` |
| difficulty | 3 |
| concepts_new | click outside, aria เบื้องต้น |
| concepts_review | position absolute |
| estimated_minutes | 21 |

**video_title:** `[EP44] ทำ Dropdown menu ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มเมนู dropdown ลงมา
- HTML: trigger + `ul.menu`
- CSS: absolute dropdown, show/hide
- JS: toggle + ปิดเมื่อคลิกนอก
- อธิบาย: dropdown accessibility basics
- ท้าทาย: ลูกศรคีย์บอร์ดเลือกรายการ

**challenge_th:** กดลูกศรลงเลือกรายการในเมนู

---

## EP45 — Toast notification

| Field | ค่า |
|-------|-----|
| slug | `toast-notification` |
| difficulty | 3 |
| concepts_new | `setTimeout`, toast queue |
| concepts_review | fixed position |
| estimated_minutes | 20 |

**video_title:** `[EP45] ทำ Toast notification ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มแล้วข้อความลอยมุมขวาล่าง
- HTML: container สำหรับ toast
- CSS: slide in, auto dismiss
- JS: สร้าง toast, setTimeout ลบ
- อธิบาย: ephemeral UI feedback
- ท้าทาย: แสดงหลาย toast ซ้อนกัน

**challenge_th:** รองรับ toast 3 อันซ้อนกัน

---

## EP46 — Tab switcher (JS)

| Field | ค่า |
|-------|-----|
| slug | `tab-switcher-js` |
| difficulty | 3 |
| concepts_new | data attributes (`data-tab`) |
| concepts_review | tabs |
| estimated_minutes | 19 |

**video_title:** `[EP46] ทำ Tab switcher ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แท็บสลับด้วย data attribute
- HTML: `button[data-tab]` + `div[data-panel]`
- CSS: active styles
- JS: query คู่ tab-panel ด้วย data
- อธิบาย: data-* สำหรับ coupling
- ท้าทาย: จำแท็บ active หลัง reload (sessionStorage)

**challenge_th:** จำแท็บล่าสุดด้วย sessionStorage

---

## EP47 — Image slider

| Field | ค่า |
|-------|-----|
| slug | `image-slider` |
| difficulty | 4 |
| concepts_new | `translateX`, slide index |
| concepts_review | array, buttons |
| estimated_minutes | 25 |

**video_title:** `[EP47] ทำ Image slider ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: สไลด์รูป prev/next + จุด indicator
- HTML: track + slides + controls
- CSS: overflow hidden, flex track
- JS: index สลับ translateX
- อธิบาย: carousel state machine
- ท้าทาย: autoplay ทุก 3 วินาที

**challenge_th:** เลื่อนอัตโนมัติทุก 3 วินาที

---

## EP48 — Loading spinner

| Field | ค่า |
|-------|-----|
| slug | `loading-spinner` |
| difficulty | 3 |
| concepts_new | CSS animation `@keyframes` |
| concepts_review | toggle display |
| estimated_minutes | 17 |

**video_title:** `[EP48] ทำ Loading spinner ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดโหลดแล้วหมุน 2 วินาทีแล้วแสดงข้อมูล
- HTML: spinner + content
- CSS: `@keyframes spin`
- JS: แสดง spinner → setTimeout ซ่อน
- อธิบาย: keyframe animation
- ท้าทาย: ปุ่ม disabled ขณะโหลด

**challenge_th:** ปิดการกดปุ่มระหว่าง loading

---

## EP49 — Skeleton loader

| Field | ค่า |
|-------|-----|
| slug | `skeleton-loader` |
| difficulty | 3 |
| concepts_new | shimmer effect |
| concepts_review | loading state |
| estimated_minutes | 19 |

**video_title:** `[EP49] ทำ Skeleton loader ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: placeholder กระพริบแล้วแทนที่ด้วยเนื้อหาจริง
- HTML: skeleton blocks + real content
- CSS: gradient shimmer animation
- JS: สลับ skeleton → content หลัง delay
- อธิบาย: perceived performance
- ท้าทาย: skeleton รูปแบบเดียวกับ content จริง

**challenge_th:** skeleton มีโครงร่างใกล้เคียง layout จริง

---

## EP50 — Search filter list

| Field | ค่า |
|-------|-----|
| slug | `search-filter-list` |
| difficulty | 3 |
| concepts_new | `filter()`, input event |
| concepts_review | loop, DOM update |
| estimated_minutes | 20 |

**video_title:** `[EP50] ทำ Search filter list ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พิมพ์ค้นหาแล้วรายการกรองทันที
- HTML: input + list items
- CSS: highlight match (optional)
- JS: filter array, re-render list
- อธิบาย: live search pattern
- ท้าทาย: แสดง "ไม่พบผลลัพธ์"

**challenge_th:** ข้อความเมื่อไม่มีรายการตรงคำค้น

---

## EP51 — Show/hide password

| Field | ค่า |
|-------|-----|
| slug | `show-hide-password` |
| difficulty | 3 |
| concepts_new | `type` toggle password/text |
| concepts_review | button icon |
| estimated_minutes | 16 |

**video_title:** `[EP51] ทำ Show/hide password ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ไอคอนตาแสดง/ซ่อนรหัสผ่าน
- HTML: `input[type=password]` + toggle
- CSS: input group layout
- JS: สลับ `type` password/text
- อธิบาย: input type switching
- ท้าทาย: เปลี่ยนไอคอนตามสถานะ

**challenge_th:** ไอคอนตา/ตาขีดสลับตาม state

---

## EP52 — Animated hamburger

| Field | ค่า |
|-------|-----|
| slug | `animated-hamburger` |
| difficulty | 3 |
| concepts_new | transform rotate |
| concepts_review | hamburger menu |
| estimated_minutes | 18 |

**video_title:** `[EP52] ทำ Animated hamburger ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: 3 ขีดหมุนเป็น X เมื่อเปิด
- HTML: 3 spans ในปุ่ม
- CSS: transform transition แต่ละขีด
- JS: toggle class `is-open`
- อธิบาย: CSS transform composition
- ท้าทาย: animation ลื่น 0.3s

**challenge_th:** ปรับ timing ให้รู้สึกลื่นไหล

---

## EP53 — Back to top

| Field | ค่า |
|-------|-----|
| slug | `back-to-top` |
| difficulty | 3 |
| concepts_new | `scrollY`, smooth scroll |
| concepts_review | fixed button |
| estimated_minutes | 17 |

**video_title:** `[EP53] ทำ Back to top ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ปุ่มโผล่เมื่อ scroll ลง กดแล้วกลับบน
- HTML: ปุ่มลอย + เนื้อหายาว
- CSS: fixed bottom-right, fade in
- JS: `scrollY > 300` แสดง, `scrollTo smooth`
- อธิบาย: scroll events (throttle เบื้องต้น)
- ท้าทาย: ซ่อนปุ่มเมื่ออยู่บนสุดแล้ว

**challenge_th:** ปุ่มหายเมื่อ scroll กลับถึงบนสุด

---

## EP54 — Tooltip ตำแหน่ง JS

| Field | ค่า |
|-------|-----|
| slug | `tooltip-js-position` |
| difficulty | 4 |
| concepts_new | `getBoundingClientRect` |
| concepts_review | tooltip |
| estimated_minutes | 22 |

**video_title:** `[EP54] ทำ Tooltip ตำแหน่ง JS ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: tooltip ตามตำแหน่งเมาส์หรือ element
- HTML: elements หลายจุด + tooltip floating
- CSS: fixed tooltip
- JS: คำนวณ top/left จาก rect
- อธิบาย: layout geometry API
- ท้าทาย: ไม่ให้ tooltip ล้นขอบจอ

**challenge_th:** ปรับตำแหน่งเมื่อใกล้ขอบขวา

---

## EP55 — Confirm dialog

| Field | ค่า |
|-------|-----|
| slug | `confirm-dialog` |
| difficulty | 3 |
| concepts_new | return value pattern (callback) |
| concepts_review | modal |
| estimated_minutes | 19 |

**video_title:** `[EP55] ทำ Confirm dialog ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดลบ → ถามยืนยัน → ลบหรือยกเลิก
- HTML: modal confirm + ปุ่ม 2 ปุ่ม
- CSS: danger button style
- JS: function `confirm(msg, onOk)`
- อธิบาย: reusable dialog pattern
- ท้าทาย: กด Enter = ยืนยัน

**challenge_th:** Enter ยืนยัน Escape ยกเลิก

---

## EP56 — Image zoom

| Field | ค่า |
|-------|-----|
| slug | `image-zoom` |
| difficulty | 3 |
| concepts_new | `scale` transform |
| concepts_review | click event |
| estimated_minutes | 18 |

**video_title:** `[EP56] ทำ Image zoom ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกรูปซูม คลิกอีกทีย่อ
- HTML: `img` ใน container
- CSS: `transform: scale`, transition
- JS: toggle class `zoomed`
- อธิบาย: transform origin
- ท้าทาย: ซูมที่ตำแหน่งคลิก

**challenge_th:** zoom ศูนย์กลางที่จุดคลิก

---

## EP57 — Drag reorder list

| Field | ค่า |
|-------|-----|
| slug | `drag-reorder-list` |
| difficulty | 4 |
| concepts_new | mousedown/mousemove/mouseup |
| concepts_review | list DOM |
| estimated_minutes | 25 |

**video_title:** `[EP57] ทำ Drag reorder list ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ลากรายการสลับลำดับ
- HTML: `ul` > `li` draggable handles
- CSS: dragging state, cursor grab
- JS: track index, swap on drop
- อธิบาย: mouse event drag pattern
- ท้าทาย: ghost preview ขณะลาก

**challenge_th:** แสดง shadow ของรายการขณะลาก

---

## EP58 — Load more mock

| Field | ค่า |
|-------|-----|
| slug | `load-more-mock` |
| difficulty | 3 |
| concepts_new | `slice`, render batch |
| concepts_review | button state |
| estimated_minutes | 19 |

**video_title:** `[EP58] ทำ Load more mock ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แสดง 5 รายการ กดโหลดเพิ่มอีก 5
- HTML: list + ปุ่ม load more
- CSS: card list
- JS: data array, slice page, append
- อธิบาย: client-side pagination
- ท้าทาย: ซ่อนปุ่มเมื่อโหลดครบ

**challenge_th:** ปุ่มหายเมื่อไม่มีข้อมูลเหลือ

---

## EP59 — Typewriter effect

| Field | ค่า |
|-------|-----|
| slug | `typewriter-effect` |
| difficulty | 4 |
| concepts_new | `setInterval`, substring |
| concepts_review | textContent |
| estimated_minutes | 20 |

**video_title:** `[EP59] ทำ Typewriter effect ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ข้อความพิมพ์ทีละตัวอักษร
- HTML: `span#typed`
- CSS: cursor blink `|` optional
- JS: interval เพิ่มตัวอักษร
- อธิบาย: timed character reveal
- ท้าทาย: วนลูปหลายประโยค

**challenge_th:** พิมพ์ 3 ประโยควนลูป

---

## EP60 — Countdown timer

| Field | ค่า |
|-------|-----|
| slug | `countdown-timer` |
| difficulty | 4 |
| concepts_new | `setInterval`, `clearInterval` |
| concepts_review | DOM update |
| estimated_minutes | 22 |

**video_title:** `[EP60] ทำ Countdown timer ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: นับถอยหลัง 5 นาที แสดง นาที:วินาที
- HTML: display + start/reset
- CSS: ตัวเลขใหญ่ monospace
- JS: interval ลดทีละวินาที, clear เมื่อ 0
- อธิบาย: timer lifecycle
- ท้าทาย: ปุ่ม pause/resume

**challenge_th:** หยุดชั่วคราวและเล่นต่อได้

---

## สรุปโมดูล 03

**สิ่งที่ผู้เรียนได้:** Modal, animation, timer, search, drag, toast  
**แนะนำท้ายโมดูล:** วิดีโอสรุป + รวม modal + toast + slider ในหน้าเดียว (แบบฝึก)
