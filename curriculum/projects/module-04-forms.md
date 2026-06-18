# Module 04: Forms — ฟอร์มและ Validation (EP61–EP80)

**ธีม:** Form events, validation, input UX patterns  
**ระดับความยาก:** 3–4

---

## EP61 — Login form UI

| Field | ค่า |
|-------|-----|
| slug | `login-form` |
| difficulty | 3 |
| concepts_new | `form`, `preventDefault` |
| concepts_review | input, button |
| estimated_minutes | 20 |

**video_title:** `[EP61] ทำ Login form UI ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ฟอร์ม login สวย + แสดงข้อความเมื่อ submit
- HTML: `form`, email, password, submit
- CSS: form layout, focus styles
- JS: preventDefault, อ่าน FormData
- อธิบาย: form submit flow
- ท้าทาย: แสดง loading บนปุ่ม submit

**challenge_th:** ปุ่มแสดง "กำลังเข้าสู่ระบบ..." ชั่วคราว

---

## EP62 — Register + validate

| Field | ค่า |
|-------|-----|
| slug | `register-validate` |
| difficulty | 4 |
| concepts_new | regex, error state |
| concepts_review | preventDefault |
| estimated_minutes | 25 |

**video_title:** `[EP62] ทำ Register + validate ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: สมัครสมาชิก ตรวจ email/password ก่อนส่ง
- HTML: ฟอร์มหลาย field + error spans
- CSS: `.input--error` border แดง
- JS: regex email, ความยาว password
- อธิบาย: client-side validation
- ท้าทาย: ยืนยันรหัสผ่านต้องตรงกัน

**challenge_th:** ตรวจ password === confirmPassword

---

## EP63 — Contact form

| Field | ค่า |
|-------|-----|
| slug | `contact-form` |
| difficulty | 3 |
| concepts_new | textarea, `required` |
| concepts_review | validation |
| estimated_minutes | 19 |

**video_title:** `[EP63] ทำ Contact form ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ฟอร์มติดต่อ ชื่อ อีเมล ข้อความ
- HTML: inputs + textarea
- CSS: label บน input pattern
- JS: ตรวจ required ก่อน submit
- อธิบาย: HTML5 required attribute
- ท้าทาย: แสดง success message หลังส่ง

**challenge_th:** ซ่อนฟอร์มแสดง "ส่งสำเร็จ" แทน

---

## EP64 — Search + suggestions

| Field | ค่า |
|-------|-----|
| slug | `search-suggestions` |
| difficulty | 4 |
| concepts_new | debounce เบื้องต้น |
| concepts_review | filter, dropdown |
| estimated_minutes | 23 |

**video_title:** `[EP64] ทำ Search + suggestions ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พิมพ์ค้นหาแล้ว dropdown แนะนำ
- HTML: input + suggestion list
- CSS: dropdown ใต้ input
- JS: debounce 300ms แล้ว filter
- อธิบาย: ลดการยิง event ถี่เกิน
- ท้าทาย: ลูกศรเลือก suggestion

**challenge_th:** คีย์บอร์ดขึ้น/ลงเลือกรายการ

---

## EP65 — Multi-step wizard

| Field | ค่า |
|-------|-----|
| slug | `multi-step-wizard` |
| difficulty | 4 |
| concepts_new | step state machine |
| concepts_review | form validation |
| estimated_minutes | 28 |

**video_title:** `[EP65] ทำ Multi-step wizard ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ฟอร์ม 3 ขั้น ถัดไป/ย้อนกลับ
- HTML: 3 step panels + progress
- CSS: แสดงทีละ step
- JS: `currentStep` variable, validate ต่อขั้น
- อธิบาย: wizard state pattern
- ท้าทาย: progress bar บนสุด

**challenge_th:** แถบความคืบหน้า 1/3 2/3 3/3

---

## EP66 — Checkbox group

| Field | ค่า |
|-------|-----|
| slug | `checkbox-group` |
| difficulty | 3 |
| concepts_new | `querySelectorAll`, `checked` |
| concepts_review | form |
| estimated_minutes | 18 |

**video_title:** `[EP66] ทำ Checkbox group ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เลือกหลายตัวเลือก แสดงสรุปที่เลือก
- HTML: checkbox หลายอัน
- CSS: custom checkbox style
- JS: รวบรวมค่าที่ checked
- อธิบาย: checkbox groups
- ท้าทาย: ปุ่ม "เลือกทั้งหมด"

**challenge_th:** toggle เลือก/ยกเลิกทั้งหมด

---

## EP67 — Radio group styled

| Field | ค่า |
|-------|-----|
| slug | `radio-group-styled` |
| difficulty | 3 |
| concepts_new | hidden input + styled label |
| concepts_review | checked |
| estimated_minutes | 18 |

**video_title:** `[EP67] ทำ Radio group styled ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ปุ่มเลือกแพ็กเกจแบบ radio สวย
- HTML: radio ซ่อน + label เป็นการ์ด
- CSS: selected state border
- JS: แสดงราคาตามที่เลือก
- อธิบาย: custom radio pattern
- ท้าทาย: animation เมื่อเลือก

**challenge_th:** scale เล็กน้อยเมื่อเลือกการ์ด

---

## EP68 — Range slider value

| Field | ค่า |
|-------|-----|
| slug | `range-slider-value` |
| difficulty | 3 |
| concepts_new | `input` event, live update |
| concepts_review | DOM text |
| estimated_minutes | 17 |

**video_title:** `[EP68] ทำ Range slider value ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: สไลด์ปรับค่า ตัวเลขอัปเดตทันที
- HTML: `input[type=range]` + output
- CSS: track/thumb custom (webkit)
- JS: input event อัปเดต label
- อธิบาย: range input events
- ท้าทาย: แสดงป้าย min/max

**challenge_th:** ป้ายบอกค่าต่ำสุดและสูงสุด

---

## EP69 — File upload preview

| Field | ค่า |
|-------|-----|
| slug | `file-upload-preview` |
| difficulty | 4 |
| concepts_new | `FileReader`, `readAsDataURL` |
| concepts_review | input change event |
| estimated_minutes | 22 |

**video_title:** `[EP69] ทำ File upload preview ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เลือกรูปแล้ว preview ก่อนอัปโหลด
- HTML: file input + img preview
- CSS: preview box ขนาดคงที่
- JS: FileReader แสดง data URL
- อธิบาย: อ่านไฟล์ฝั่ง client
- ท้าทาย: จำกัดเฉพาะไฟล์รูป

**challenge_th:** แจ้งเตือนถ้าไม่ใช่ไฟล์รูป

---

## EP70 — OTP 6 ช่อง

| Field | ค่า |
|-------|-----|
| slug | `otp-input` |
| difficulty | 4 |
| concepts_new | focus next input, paste handling |
| concepts_review | input event |
| estimated_minutes | 24 |

**video_title:** `[EP70] ทำ OTP 6 ช่อง ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กรอก OTP 6 หลัก ข้ามช่องอัตโนมัติ
- HTML: 6 inputs maxlength=1
- CSS: ช่องสี่เหลี่ยมเท่ากัน
- JS: พิมพ์แล้ว focus ถัดไป, backspace ย้อน
- อธิบาย: multi-input UX
- ท้าทาย: วาง paste 6 หลักพร้อมกัน

**challenge_th:** รองรับ paste รหัส 6 หลัก

---

## EP71 — Textarea char count

| Field | ค่า |
|-------|-----|
| slug | `textarea-char-count` |
| difficulty | 3 |
| concepts_new | `maxlength`, live counter |
| concepts_review | input event |
| estimated_minutes | 16 |

**video_title:** `[EP71] ทำ Textarea char count ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: นับตัวอักษร 0/200 เปลี่ยนสีใกล้เต็ม
- HTML: textarea + counter span
- CSS: สีเตือนเมื่อใกล้ limit
- JS: input อัปเดต length
- อธิบาย: maxlength enforcement
- ท้าทาย: ห้ามพิมพ์เกิน (hard limit)

**challenge_th:** ตัวนับแดงเมื่อเกิน 90%

---

## EP72 — Password strength

| Field | ค่า |
|-------|-----|
| slug | `password-strength` |
| difficulty | 4 |
| concepts_new | scoring rules |
| concepts_review | regex |
| estimated_minutes | 22 |

**video_title:** `[EP72] ทำ Password strength ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แถบแข็งแรง อ่อน/ปานกลาง/แรง
- HTML: password input + meter bar
- CSS: สีตามระดับ 3 สี
- JS: คะแนนจากความยาว, ตัวเลข, สัญลักษณ์
- อธิบาย: heuristic strength meter
- ท้าทาย: ข้อความคำแนะนำใต้แถบ

**challenge_th:** แสดง "เพิ่มตัวเลขและสัญลักษณ์" เมื่ออ่อน

---

## EP73 — Inline error messages

| Field | ค่า |
|-------|-----|
| slug | `inline-errors` |
| difficulty | 3 |
| concepts_new | validation map object |
| concepts_review | error state CSS |
| estimated_minutes | 20 |

**video_title:** `[EP73] ทำ Inline error messages ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: error ใต้แต่ละ field แยกชัด
- HTML: field + `.error-msg`
- CSS: ซ่อน error จนมี class show
- JS: object เก็บ errors ต่อ field
- อธิบาย: field-level validation UX
- ท้าทาย: ลบ error เมื่อแก้ถูก

**challenge_th:** error หายเมื่อผู้ใช้แก้ค่าถูกต้อง

---

## EP74 — Autocomplete dropdown

| Field | ค่า |
|-------|-----|
| slug | `autocomplete-dropdown` |
| difficulty | 4 |
| concepts_new | keyboard nav, match highlight |
| concepts_review | debounce, filter |
| estimated_minutes | 25 |

**video_title:** `[EP74] ทำ Autocomplete dropdown ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พิมพ์ชื่อเมือง แนะนำ + เลือกด้วยคีย์บอร์ด
- HTML: combobox pattern
- CSS: highlight match ในรายการ
- JS: filter + arrow keys + enter select
- อธิบาย: combobox accessibility basics
- ท้าทาย: ปิดรายการเมื่อ blur

**challenge_th:** คลิกนอกแล้วปิด dropdown

---

## EP75 — Date picker UI

| Field | ค่า |
|-------|-----|
| slug | `date-picker-ui` |
| difficulty | 4 |
| concepts_new | native `input[type=date]` + custom display |
| concepts_review | form |
| estimated_minutes | 21 |

**video_title:** `[EP75] ทำ Date picker UI ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ปุ่มเปิด native date picker แสดงวันที่ไทย
- HTML: hidden/native input + display button
- CSS: ปุ่มวันที่สวย
- JS: change event แปลง format ไทย
- อธิบาย: native vs custom picker
- ท้าทาย: ห้ามเลือกวันในอดีต

**challenge_th:** ตั้ง min เป็นวันนี้

---

## EP76 — Toggle switch

| Field | ค่า |
|-------|-----|
| slug | `toggle-switch` |
| difficulty | 3 |
| concepts_new | checkbox hack CSS |
| concepts_review | checked state |
| estimated_minutes | 17 |

**video_title:** `[EP76] ทำ Toggle switch ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: สวิตช์เปิด/ปิด แบบ iOS
- HTML: checkbox ซ่อน + label slider
- CSS: `:checked` sibling selector
- JS: แสดงข้อความสถานะ ON/OFF
- อธิบาย: checkbox เป็น state store
- ท้าทาย: สีต่างกันเมื่อเปิด/ปิด

**challenge_th:** track สีเขียวเมื่อเปิด เทาเมื่อปิด

---

## EP77 — Survey scale 1–5

| Field | ค่า |
|-------|-----|
| slug | `survey-scale` |
| difficulty | 3 |
| concepts_new | radio styling แนวนอน |
| concepts_review | radio group |
| estimated_minutes | 18 |

**video_title:** `[EP77] ทำ Survey scale 1–5 ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ให้คะแนนความพึงพอใจ 1–5 ปุ่มกลม
- HTML: 5 radio + labels
- CSS: วงกลมเรียงแนวนอน
- JS: แสดงข้อความขอบคุณหลังเลือก
- อธิบาย: Likert scale UI
- ท้าทาย: hover preview ก่อนเลือก

**challenge_th:** hover ไฮไลต์จนถึงคะแนนนั้น

---

## EP78 — Newsletter signup

| Field | ค่า |
|-------|-----|
| slug | `newsletter-signup` |
| difficulty | 3 |
| concepts_new | success state UI |
| concepts_review | email validation |
| estimated_minutes | 17 |

**video_title:** `[EP78] ทำ Newsletter signup ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: อีเมล + สมัคร → ข้อความสำเร็จ
- HTML: inline form อีเมล + ปุ่ม
- CSS: compact horizontal form
- JS: validate email แสดง success
- อธิบาย: inline signup pattern
- ท้าทาย: ปุ่ม disabled จน email ถูก

**challenge_th:** เปิดปุ่มเมื่อ email format ถูกต้อง

---

## EP79 — Filter chips

| Field | ค่า |
|-------|-----|
| slug | `filter-chips` |
| difficulty | 4 |
| concepts_new | multiple active filters |
| concepts_review | filter array |
| estimated_minutes | 21 |

**video_title:** `[EP79] ทำ Filter chips ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: chip หมวดหมู่ กดหลายอันกรองสินค้า
- HTML: chips + product list
- CSS: chip active state
- JS: Set เก็บ filter ที่ active
- อธิบาย: multi-filter logic
- ท้าทาย: ปุ่มล้าง filter ทั้งหมด

**challenge_th:** ปุ่ม "ล้างตัวกรอง" รีเซ็ตทุก chip

---

## EP80 — Sortable table headers

| Field | ค่า |
|-------|-----|
| slug | `sortable-table` |
| difficulty | 4 |
| concepts_new | sort callback, asc/desc toggle |
| concepts_review | DOM reorder หรือ re-render |
| estimated_minutes | 23 |

**video_title:** `[EP80] ทำ Sortable table headers ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คลิกหัวคอลัมน์เรียงตัวเลข/ข้อความ
- HTML: `table` + clickable `th`
- CSS: sort arrow indicator
- JS: sort array, toggle direction
- อธิบาย: client-side table sort
- ท้าทาย: เรียงหลายคอลัมน์ไม่ได้พร้อมกัน

**challenge_th:** ลูกศรแสดงทิศทาง asc/desc

---

## สรุปโมดูล 04

**สิ่งที่ผู้เรียนได้:** Validation, wizard, OTP, autocomplete, form UX  
**แนะนำท้ายโมดูล:** วิดีโอสรุป + รวม login + register validation ในหน้าเดียว (แบบฝึก)
