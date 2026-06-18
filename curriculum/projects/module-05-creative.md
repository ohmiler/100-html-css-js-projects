# Module 05: Creative — สร้างสรรค์และ Mini Apps (EP81–EP100)

**ธีม:** CSS animation, mini apps, game loop เบื้องต้น, localStorage, รวมทุก skill  
**ระดับความยาก:** 4–5  
**หมายเหตุ:** โมดูลนี้เหมาะเป็น playlist "โบนัส" สำหรับผู้ที่ผ่านโมดูล 1–4 แล้ว

---

## EP81 — Animated button

| Field | ค่า |
|-------|-----|
| slug | `animated-button` |
| difficulty | 4 |
| concepts_new | `transition` + `@keyframes` ร่วมกัน |
| concepts_review | hover, transform |
| estimated_minutes | 18 |

**video_title:** `[EP81] ทำ Animated button ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ปุ่ม ripple/pulse เมื่อ hover และคลิก
- HTML: ปุ่ม CTA
- CSS: keyframes pulse, transition transform
- JS: คลิกแล้วเพิ่ม class ชั่วคราว
- อธิบาย: micro-interaction
- ท้าทาย: สี ripple ตามตำแหน่งคลิก

**challenge_th:** เอฟเฟกต์ ripple ออกจากจุดคลิก

---

## EP82 — Neon text

| Field | ค่า |
|-------|-----|
| slug | `neon-text` |
| difficulty | 4 |
| concepts_new | `text-shadow`, glow layers |
| concepts_review | keyframes |
| estimated_minutes | 17 |

**video_title:** `[EP82] ทำ Neon text ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ข้อความนีออนกระพริบ
- HTML: `h1` ข้อความ
- CSS: หลายชั้น text-shadow สีนีออน
- JS: ปุ่มสลับสีนีออน 3 แบบ
- อธิบาย: layered shadow glow
- ท้าทาย: animation flicker เบาๆ

**challenge_th:** กระพริบแบบนีออนจริง

---

## EP83 — Flip card

| Field | ค่า |
|-------|-----|
| slug | `flip-card` |
| difficulty | 4 |
| concepts_new | `transform: rotateY(180deg)` |
| concepts_review | transition |
| estimated_minutes | 20 |

**video_title:** `[EP83] ทำ Flip card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดพลิกหน้า-หลัง
- HTML: `.card` > front + back
- CSS: `perspective`, `backface-visibility`
- JS: คลิกพลิก toggle class
- อธิบาย: 3D flip CSS
- ท้าทาย: พลิกเมื่อ hover แทนคลิก

**challenge_th:** โหมด hover flip สำหรับ desktop

---

## EP84 — 3D hover card

| Field | ค่า |
|-------|-----|
| slug | `3d-hover-card` |
| difficulty | 4 |
| concepts_new | `perspective`, tilt ตามเมาส์ |
| concepts_review | transform |
| estimated_minutes | 22 |

**video_title:** `[EP84] ทำ 3D hover card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดเอียงตามตำแหน่งเมาส์
- HTML: card + content
- CSS: perspective container
- JS: mousemove คำนวณ rotateX/Y
- อธิบาย: mouse-driven transform
- ท้าทาย: จำกัดมุมเอียงไม่เกิน 15°

**challenge_th:** clamp มุมไม่ให้เอียงเกินไป

---

## EP85 — Particle background

| Field | ค่า |
|-------|-----|
| slug | `particle-background` |
| difficulty | 5 |
| concepts_new | canvas หรือ pure CSS particles |
| concepts_review | animation loop |
| estimated_minutes | 28 |

**video_title:** `[EP85] ทำ Particle background ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: พื้นหลังจุดลอยเคลื่อนไหว
- HTML: canvas เต็มจอ หรือ div หลายจุด
- CSS: (ถ้า CSS-only) animation random
- JS: canvas draw loop หรือ spawn particles
- อธิบาย: ambient animation
- ท้าทาย: คลิกเพิ่ม particle

**challenge_th:** คลิกหน้าจอแล้วเกิด particle ใหม่

---

## EP86 — Weather card UI

| Field | ค่า |
|-------|-----|
| slug | `weather-card` |
| difficulty | 4 |
| concepts_new | mock API data object |
| concepts_review | card layout |
| estimated_minutes | 20 |

**video_title:** `[EP86] ทำ Weather card UI ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดอากาศ เมือง อุณหภูมิ ไอคอน
- HTML: weather card structure
- CSS: gradient ตามสภาพอากาศ
- JS: object mock data สลับเมือง
- อธิบาย: UI จาก static JSON
- ท้าทาย: ปุ่มสลับ 3 เมือง

**challenge_th:** ข้อมูล กรุงเทพ เชียงใหม่ ภูเก็ต

---

## EP87 — Mini music player UI

| Field | ค่า |
|-------|-----|
| slug | `mini-music-player` |
| difficulty | 4 |
| concepts_new | play/pause state, progress bar |
| concepts_review | toggle, interval |
| estimated_minutes | 24 |

**video_title:** `[EP87] ทำ Mini music player UI ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เล่น/หยุด แถบเวลา (mock ไม่ต้องไฟล์เสียงจริง)
- HTML: ปุ่ม play, title, progress
- CSS: player card compact
- JS: state playing, interval อัปเดต progress
- อธิบาย: media player UI states
- ท้าทาย: ปุ่ม prev/next เปลี่ยนเพลง mock

**challenge_th:** สลับเพลงใน playlist mock

---

## EP88 — Pomodoro timer

| Field | ค่า |
|-------|-----|
| slug | `pomodoro-timer` |
| difficulty | 4 |
| concepts_new | work/break phases |
| concepts_review | setInterval, countdown |
| estimated_minutes | 25 |

**video_title:** `[EP88] ทำ Pomodoro timer ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: 25 นาทีทำงาน 5 นาทีพัก สลับอัตโนมัติ
- HTML: timer display + mode label
- CSS: สีต่างกัน work/break
- JS: phase state, auto switch
- อธิบาย: state machine timer
- ท้าทาย: เสียงแจ้งเตือน (beep optional)

**challenge_th:** แจ้งเตือนเมื่อจบรอบ

---

## EP89 — Quiz card

| Field | ค่า |
|-------|-----|
| slug | `quiz-card` |
| difficulty | 4 |
| concepts_new | score tracking |
| concepts_review | radio, array questions |
| estimated_minutes | 23 |

**video_title:** `[EP89] ทำ Quiz card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: คำถาม 4 ตัวเลือก แสดงคะแนนท้าย
- HTML: question + options + next
- CSS: selected/correct/wrong states
- JS: array คำถาม, เก็บ score
- อธิบาย: quiz flow state
- ท้าทาย: แสดงเฉลยหลังตอบ

**challenge_th:** ไฮไลต์คำตอบถูก/ผิดก่อนไปข้อถัดไป

---

## EP90 — Memory game 4 การ์ด

| Field | ค่า |
|-------|-----|
| slug | `memory-game-4` |
| difficulty | 4 |
| concepts_new | match logic, flip delay |
| concepts_review | flip card |
| estimated_minutes | 25 |

**video_title:** `[EP90] ทำ Memory game 4 การ์ด ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: จับคู่ 2 ใบ เหมือนกันชนะ
- HTML: 4 การ์ด (2 คู่)
- CSS: flip + matched state
- JS: เปิด 2 ใบ ตรวจ match
- อธิบาย: game match state
- ท้าทาย: นับจำนวนการเปิด

**challenge_th:** แสดงตัวนับจำนวนครั้งที่พลิก

---

## EP91 — Tic-tac-toe

| Field | ค่า |
|-------|-----|
| slug | `tic-tac-toe` |
| difficulty | 5 |
| concepts_new | 2D array, win check |
| concepts_review | click handler |
| estimated_minutes | 28 |

**video_title:** `[EP91] ทำ Tic-tac-toe ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เกม XO 3x3 ตรวจชนะ/เสมอ
- HTML: grid 9 ช่อง
- CSS: X/O สีต่างกัน
- JS: board array, สลับผู้เล่น, check win
- อธิบาย: game board modeling
- ท้าทาย: ปุ่มเริ่มใหม่

**challenge_th:** รีเซ็ตกระดานหลังจบเกม

---

## EP92 — Rock Paper Scissors

| Field | ค่า |
|-------|-----|
| slug | `rock-paper-scissors` |
| difficulty | 4 |
| concepts_new | random, compare rules |
| concepts_review | score |
| estimated_minutes | 22 |

**video_title:** `[EP92] ทำ Rock Paper Scissors ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เลือก ค้อน กรรไกร กระดาษ vs คอมพิวเตอร์
- HTML: 3 ปุ่มเลือก + ผลลัพธ์
- CSS: ไอคอนมือ
- JS: random CPU, เปรียบเทียบ, score
- อธิบาย: rule table pattern
- ท้าทาย: best of 5

**challenge_th:** จบเมื่อถึง 3 ชนะก่อน

---

## EP93 — Color match game

| Field | ค่า |
|-------|-----|
| slug | `color-match-game` |
| difficulty | 4 |
| concepts_new | timer + score combined |
| concepts_review | random color |
| estimated_minutes | 24 |

**video_title:** `[EP93] ทำ Color match game ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แสดงชื่อสี กดปุ่มสีที่ตรงกัน 30 วินาที
- HTML: ชื่อสี + ปุ่มสี 4 ปุ่ม
- CSS: ปุ่มสีสด
- JS: random word/color trap, timer, score
- อธิบาย: Stroop effect game
- ท้าทาย: ความเร็วเพิ่มขึ้นเมื่อคะแนนสูง

**challenge_th:** เวลานับถอยหลังเร็วขึ้นทุก 5 คะแนน

---

## EP94 — Snake mini

| Field | ค่า |
|-------|-----|
| slug | `snake-mini` |
| difficulty | 5 |
| concepts_new | grid + game loop |
| concepts_review | setInterval, keyboard |
| estimated_minutes | 30 |

**video_title:** `[EP94] ทำ Snake mini ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: งูกินอาหาร โตขึ้น ชนผนังแพ้
- HTML: grid divs หรือ canvas
- CSS: snake head/body/food สีต่างกัน
- JS: direction, move loop, collision
- อธิบาย: game loop basics
- ท้าทาย: คะแนนและ game over screen

**challenge_th:** หน้าจอ game over + เริ่มใหม่

---

## EP95 — Calculator

| Field | ค่า |
|-------|-----|
| slug | `calculator` |
| difficulty | 5 |
| concepts_new | `switch`/case, display stack |
| concepts_review | button grid |
| estimated_minutes | 28 |

**video_title:** `[EP95] ทำ Calculator ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เครื่องคิดเลข + - * / ทศนิยม
- HTML: display + pad ปุ่ม
- CSS: calculator layout grid
- JS: operand/operator state machine
- อธิบาย: calculator logic pattern
- ท้าทาย: ปุ่ม C ล้าง และ CE ลบตัวสุดท้าย

**challenge_th:** รองรับ C (clear all) และ backspace

---

## EP96 — Stopwatch

| Field | ค่า |
|-------|-----|
| slug | `stopwatch` |
| difficulty | 4 |
| concepts_new | ms precision, lap times |
| concepts_review | interval |
| estimated_minutes | 23 |

**video_title:** `[EP96] ทำ Stopwatch ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: จับเวลา นาที:วินาที:ms บันทึก lap
- HTML: display + start/stop/reset/lap
- CSS: monospace digits
- JS: Date.now() delta, lap array
- อธิบาย: high precision timing
- ท้าทาย: รายการ lap ด้านล่าง

**challenge_th:** แสดงรายการ lap ทั้งหมด

---

## EP97 — Random quote

| Field | ค่า |
|-------|-----|
| slug | `random-quote` |
| difficulty | 4 |
| concepts_new | array random + fade transition |
| concepts_review | quote card |
| estimated_minutes | 18 |

**video_title:** `[EP97] ทำ Random quote ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: กดปุ่มสุ่มคำคม fade เปลี่ยน
- HTML: quote + author + button
- CSS: opacity transition
- JS: random index, fade out/in
- อธิบาย: transition กับ content swap
- ท้าทาย: แชร์คำคม (copy)

**challenge_th:** ปุ่มคัดลอกคำคมไป clipboard

---

## EP98 — BMI calculator

| Field | ค่า |
|-------|-----|
| slug | `bmi-calculator` |
| difficulty | 4 |
| concepts_new | `parseFloat`, formula, categories |
| concepts_review | form input |
| estimated_minutes | 20 |

**video_title:** `[EP98] ทำ BMI calculator ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ใส่น้ำหนักส่วนสูง คำนวณ BMI + หมวด
- HTML: 2 inputs + ผลลัพธ์
- CSS: สีตามหมวด (น้ำหนักน้อย/ปกติ/เกิน)
- JS: BMI = kg/(m^2), แสดงหมวด
- อธิบาย: numeric form handling
- ท้าทาย: แปลงส่วนสูง cm → m อัตโนมัติ

**challenge_th:** รับส่วนสูงเป็น cm ไม่ต้องแปลงเอง

---

## EP99 — Expense entry

| Field | ค่า |
|-------|-----|
| slug | `expense-entry` |
| difficulty | 5 |
| concepts_new | `localStorage` เบื้องต้น |
| concepts_review | form, list render |
| estimated_minutes | 26 |

**video_title:** `[EP99] ทำ Expense entry ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: บันทึกรายจ่าย รายการ + รวมยอด เก็บใน browser
- HTML: form รายการ + list + total
- CSS: expense list card
- JS: array → JSON → localStorage
- อธิบาย: client persistence
- ท้าทาย: ลบรายการเดียว

**challenge_th:** ปุ่มลบแต่ละรายการ

---

## EP100 — Portfolio section

| Field | ค่า |
|-------|-----|
| slug | `portfolio-section` |
| difficulty | 5 |
| concepts_new | รวมทุกอย่างที่เรียนมา |
| concepts_review | ทุก module |
| estimated_minutes | 30 |

**video_title:** `[EP100] ทำ Portfolio section ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: หน้า portfolio รวม hero, projects grid, contact form
- HTML: รวม section จากบทก่อนๆ
- CSS: consistent design system สี/ฟอนต์
- JS: smooth scroll nav, dark mode toggle, form validate
- อธิบาย: composition ไม่ใช่ feature ใหม่
- ท้าทาย: deploy ขึ้น GitHub Pages

**challenge_th:** อัปโหลดขึ้น GitHub และเปิดดูออนไลน์

---

## สรุปโมดูล 05

**สิ่งที่ผู้เรียนได้:** Animation, mini apps, games, localStorage, portfolio สมบูรณ์  
**แนะนำท้ายโมดูล:** วิดีโอสรุปทั้งคอร์ส EP01–EP100 + แนะนำขั้นตอนถัดไป (React, Git advanced, deploy)
