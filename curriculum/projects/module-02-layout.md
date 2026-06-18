# Module 02: Layout — จัดวางและ Responsive (EP21–EP40)

**ธีม:** Flexbox, CSS Grid, media queries, sticky, responsive navigation  
**ระดับความยาก:** 2–3

---

## EP21 — Navbar พื้นฐาน

| Field | ค่า |
|-------|-----|
| slug | `basic-navbar` |
| difficulty | 2 |
| concepts_new | flex, `justify-content`, `align-items` |
| concepts_review | semantic HTML, links |
| estimated_minutes | 18 |

**video_title:** `[EP21] ทำ Navbar พื้นฐาน ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แถบนำทางโลโก้ซ้าย เมนูขวา
- HTML: `header`, `nav`, `ul`, `li`, `a`
- CSS: flex space-between, สไตล์ลิงก์
- JS: คลิกเมนูแสดง active state
- อธิบาย: flexbox แนวนอน
- ท้าทาย: เพิ่มเมนูที่ 4

**challenge_th:** ไฮไลต์เมนูที่ active ด้วย underline

---

## EP22 — Navbar + Hamburger

| Field | ค่า |
|-------|-----|
| slug | `navbar-hamburger` |
| difficulty | 3 |
| concepts_new | media query, toggle menu |
| concepts_review | flex, classList |
| estimated_minutes | 22 |

**video_title:** `[EP22] ทำ Navbar + Hamburger ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: จอเล็กเมนูยุบเป็น hamburger
- HTML: ปุ่ม hamburger + เมนู
- CSS: `@media (max-width)`, ซ่อน/แสดงเมนู
- JS: toggle class `nav--open`
- อธิบาย: mobile-first, breakpoint
- ท้าทาย: ปิดเมนูเมื่อคลิกลิงก์

**challenge_th:** คลิกลิงก์แล้วปิดเมนูมือถืออัตโนมัติ

---

## EP23 — Sidebar เมนู

| Field | ค่า |
|-------|-----|
| slug | `sidebar-menu` |
| difficulty | 3 |
| concepts_new | fixed positioning |
| concepts_review | toggle, flex column |
| estimated_minutes | 20 |

**video_title:** `[EP23] ทำ Sidebar เมนู ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แถบข้างเลื่อนได้ มีปุ่มยุบ/ขยาย
- HTML: `aside`, รายการเมนู, ปุ่ม toggle
- CSS: fixed left, width transition
- JS: สลับ class collapsed
- อธิบาย: fixed vs absolute
- ท้าทาย: จำสถานะ collapsed

**challenge_th:** ยุบแล้วเหลือแค่ไอคอน

---

## EP24 — Footer 3 คอลัมน์

| Field | ค่า |
|-------|-----|
| slug | `footer-three-columns` |
| difficulty | 2 |
| concepts_new | grid/flex columns |
| concepts_review | semantic HTML |
| estimated_minutes | 18 |

**video_title:** `[EP24] ทำ Footer 3 คอลัมน์ ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: footer 3 คอลัมน์ responsive
- HTML: `footer`, 3 sections
- CSS: grid 3 col → 1 col บนมือถือ
- JS: ปุ่ม scroll to top ใน footer
- อธิบาย: multi-column layout
- ท้าทาย: คอลัมน์กลางจัดกึ่งกลาง

**challenge_th:** ปรับให้คอลัมน์เรียงแนวตั้งบนจอเล็ก

---

## EP25 — Hero section

| Field | ค่า |
|-------|-----|
| slug | `hero-section` |
| difficulty | 2 |
| concepts_new | min-height, gradient |
| concepts_review | flex center |
| estimated_minutes | 20 |

**video_title:** `[EP25] ทำ Hero section ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: หน้าแรกเต็มจอ หัวข้อใหญ่ + CTA
- HTML: `section.hero`, `h1`, `p`, ปุ่ม
- CSS: min-height 100vh, gradient bg
- JS: ปุ่ม CTA scroll ไปส่วนถัดไป
- อธิบาย: hero pattern, viewport units
- ท้าทาย: เพิ่มพื้นหลังรูป + overlay

**challenge_th:** ใส่รูปพื้นหลังพร้อม overlay มืด

---

## EP26 — Feature cards 3 ช่อง

| Field | ค่า |
|-------|-----|
| slug | `feature-cards-grid` |
| difficulty | 3 |
| concepts_new | CSS grid |
| concepts_review | card component |
| estimated_minutes | 20 |

**video_title:** `[EP26] ทำ Feature cards 3 ช่อง ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ด 3 ใบเรียง grid เท่ากัน
- HTML: `.grid` > 3 `.card`
- CSS: `grid-template-columns: repeat(3, 1fr)`
- JS: คลิกการ์ด flip แสดงรายละเอียด (เบื้องต้น)
- อธิบาย: CSS Grid basics
- ท้าทาย: responsive เป็น 1 คอลัมน์บนมือถือ

**challenge_th:** บนมือถือการ์ดเรียงแนวตั้ง

---

## EP27 — Testimonial card

| Field | ค่า |
|-------|-----|
| slug | `testimonial-card` |
| difficulty | 2 |
| concepts_new | shadow, spacing scale |
| concepts_review | typography |
| estimated_minutes | 18 |

**video_title:** `[EP27] ทำ Testimonial card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดรีวิวลูกค้า + ปุ่มถัดไป
- HTML: คำพูด, รูป, ชื่อ
- CSS: box-shadow, consistent spacing
- JS: array รีวิว, ปุ่มสลับเนื้อหา
- อธิบาย: elevation, spacing rhythm
- ท้าทาย: เพิ่มจุด indicator ด้านล่าง

**challenge_th:** จุดบอกว่าอยู่รีวิวที่เท่าไร

---

## EP28 — Stats counter section

| Field | ค่า |
|-------|-----|
| slug | `stats-counter-section` |
| difficulty | 3 |
| concepts_new | `IntersectionObserver` เบื้องต้น |
| concepts_review | grid layout |
| estimated_minutes | 22 |

**video_title:** `[EP28] ทำ Stats counter section ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: ตัวเลขนับขึ้นเมื่อ scroll มาถึง
- HTML: 3 stat blocks
- CSS: grid 3 คอลัมน์, ตัวเลขใหญ่
- JS: observer + animate count
- อธิบาย: scroll-triggered animation
- ท้าทาย: นับทีละตัวไม่พร้อมกัน

**challenge_th:** แต่ละ stat เริ่มนับเมื่อเห็นในจอ

---

## EP29 — Team member card

| Field | ค่า |
|-------|-----|
| slug | `team-member-card` |
| difficulty | 2 |
| concepts_new | image + text layout |
| concepts_review | card, hover |
| estimated_minutes | 17 |

**video_title:** `[EP29] ทำ Team member card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดทีม รูปกลม + โซเชียล
- HTML: รูป, ชื่อ, ตำแหน่ง, ลิงก์
- CSS: รูปกลม, hover lift
- JS: คลิกไอคอนแสดง alert ชื่อแพลตฟอร์ม
- อธิบาย: consistent card pattern
- ท้าทาย: hover แล้วแสดง bio สั้นๆ

**challenge_th:** แสดงคำอธิบายสั้นเมื่อ hover

---

## EP30 — Blog post card

| Field | ค่า |
|-------|-----|
| slug | `blog-post-card` |
| difficulty | 2 |
| concepts_new | meta info, text truncate |
| concepts_review | grid |
| estimated_minutes | 18 |

**video_title:** `[EP30] ทำ Blog post card ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: การ์ดบทความ รูป + หัวข้อ + วันที่
- HTML: `article`, รูป, `time`, excerpt
- CSS: line-clamp 2 บรรทัด
- JS: คลิก "อ่านต่อ" ขยาย excerpt
- อธิบาย: content card anatomy
- ท้าทาย: แสดงเวลาอ่านโดยประมาณ

**challenge_th:** เพิ่ม badge "5 นาที" อ่าน

---

## EP31 — Image card + overlay

| Field | ค่า |
|-------|-----|
| slug | `image-card-overlay` |
| difficulty | 3 |
| concepts_new | `::before`, opacity |
| concepts_review | hover |
| estimated_minutes | 20 |

**video_title:** `[EP31] ทำ Image card + overlay ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: hover รูปแล้ว overlay ข้อความโผล่
- HTML: `.card` > img + `.overlay`
- CSS: absolute overlay, opacity transition
- JS: คลิกเปิดรูปใหญ่ (modal เบื้องต้น)
- อธิบาย: overlay technique
- ท้าทาย: ปุ่มใน overlay คลิกได้

**challenge_th:** ปุ่ม "ดูเพิ่ม" ใน overlay ทำงานได้

---

## EP32 — Photo grid

| Field | ค่า |
|-------|-----|
| slug | `photo-grid` |
| difficulty | 3 |
| concepts_new | `grid-template-columns` |
| concepts_review | image card |
| estimated_minutes | 19 |

**video_title:** `[EP32] ทำ Photo grid ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แกลเลอรีรูป grid สม่ำเสมอ
- HTML: `.gallery` > หลาย `img`
- CSS: grid 3x3, object-fit cover
- JS: คลิกรูปสลับ border highlight
- อธิบาย: grid กับรูปภาพ
- ท้าทาย: รูปแรกใหญ่กว่า (span 2)

**challenge_th:** รูปแรกกินพื้นที่ 2 คอลัมน์

---

## EP33 — Sticky header

| Field | ค่า |
|-------|-----|
| slug | `sticky-header` |
| difficulty | 2 |
| concepts_new | `position: sticky` |
| concepts_review | navbar |
| estimated_minutes | 17 |

**video_title:** `[EP33] ทำ Sticky header ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: header ติดด้านบนเมื่อ scroll
- HTML: header + เนื้อหายาว
- CSS: `position: sticky; top: 0`
- JS: เพิ่ม shadow เมื่อ scroll ลง
- อธิบาย: sticky vs fixed
- ท้าทาย: ย่อความสูง header เมื่อ scroll

**challenge_th:** header เล็กลงเมื่อ scroll ผ่าน 100px

---

## EP34 — Two-column layout

| Field | ค่า |
|-------|-----|
| slug | `two-column-layout` |
| difficulty | 2 |
| concepts_new | flex direction, gap |
| concepts_review | responsive |
| estimated_minutes | 18 |

**video_title:** `[EP34] ทำ Two-column layout ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: เนื้อหาซ้าย รูปขวา สลับบนมือถือ
- HTML: 2 columns
- CSS: flex row, gap, wrap
- JS: ปุ่มสลับลำดับคอลัมน์
- อธิบาย: gap, flex-wrap
- ท้าทาย: สัดส่วน 60/40

**challenge_th:** คอลัมน์ซ้าย 60% ขวา 40%

---

## EP35 — Split screen

| Field | ค่า |
|-------|-----|
| slug | `split-screen` |
| difficulty | 3 |
| concepts_new | `50vw`, responsive stack |
| concepts_review | two-column |
| estimated_minutes | 20 |

**video_title:** `[EP35] ทำ Split screen ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: หน้าจอแบ่งครึ่ง ซ้ายรูป ขวาฟอร์ม
- HTML: 2 halves
- CSS: 50% width, stack on mobile
- JS: ปุ่มสลับโหมดซ้าย/ขวา
- อธิบาย: split layout pattern
- ท้าทาย: แบ่งแนวตั้งบนมือถือ

**challenge_th:** มือถือเรียงบน-ล่างแทนซ้าย-ขวา

---

## EP36 — Tabs (CSS แล้วเพิ่ม JS)

| Field | ค่า |
|-------|-----|
| slug | `tabs-css-js` |
| difficulty | 3 |
| concepts_new | hidden attribute, active tab |
| concepts_review | button group |
| estimated_minutes | 21 |

**video_title:** `[EP36] ทำ Tabs ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: 3 แท็บสลับเนื้อหา
- HTML: tab buttons + panels
- CSS: style active tab, ซ่อน panel
- JS: สลับ active + แสดง panel ที่ตรง
- อธิบาย: tab pattern, hidden
- ท้าทาย: animation fade ระหว่างแท็บ

**challenge_th:** เปลี่ยนแท็บด้วย fade สั้นๆ

---

## EP37 — Pagination UI

| Field | ค่า |
|-------|-----|
| slug | `pagination-ui` |
| difficulty | 2 |
| concepts_new | button group, active page |
| concepts_review | loop |
| estimated_minutes | 18 |

**video_title:** `[EP37] ทำ Pagination UI ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: หน้า 1 2 3 ... ถัดไป
- HTML: ปุ่มหน้า + prev/next
- CSS: inline flex buttons
- JS: คลิกเปลี่ยน active, แสดงข้อมูลหน้านั้น
- อธิบาย: pagination UX
- ท้าทาย: ปิดปุ่ม prev ที่หน้า 1

**challenge_th:** disable ปุ่มก่อนหน้า/ถัดไปเมื่อขอบเขต

---

## EP38 — Bento grid

| Field | ค่า |
|-------|-----|
| slug | `bento-grid` |
| difficulty | 3 |
| concepts_new | asymmetric grid areas |
| concepts_review | CSS grid |
| estimated_minutes | 22 |

**video_title:** `[EP38] ทำ Bento grid ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: layout แบบ bento กล่องขนาดต่างกัน
- HTML: 6+ grid items
- CSS: `grid-template-areas`
- JS: คลิกกล่องขยายเต็มแถว
- อธิบาย: editorial grid layout
- ท้าทาย: responsive ยุบเป็น 1 คอลัมน์

**challenge_th:** มือถือทุกกล่องเต็มความกว้าง

---

## EP39 — Dashboard widgets row

| Field | ค่า |
|-------|-----|
| slug | `dashboard-widgets` |
| difficulty | 3 |
| concepts_new | card composition |
| concepts_review | grid, stats |
| estimated_minutes | 20 |

**video_title:** `[EP39] ทำ Dashboard widgets row ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แถว widget ยอดขาย ผู้ใช้ คำสั่งซื้อ
- HTML: 4 widget cards
- CSS: grid 4 col, icon + ตัวเลข
- JS: ปุ่ม refresh สุ่มตัวเลขใหม่
- อธิบาย: dashboard UI pattern
- ท้าทาย: สีต่างกันตามประเภท widget

**challenge_th:** แต่ละ widget สี accent ต่างกัน

---

## EP40 — Responsive gallery

| Field | ค่า |
|-------|-----|
| slug | `responsive-gallery` |
| difficulty | 3 |
| concepts_new | `auto-fit`, `minmax` |
| concepts_review | photo grid |
| estimated_minutes | 21 |

**video_title:** `[EP40] ทำ Responsive gallery ด้วย HTML CSS JS | สอนมือใหม่`

**video_outline:**
- Hook: แกลเลอรีปรับคอลัมน์อัตโนมัติ
- HTML: gallery items
- CSS: `repeat(auto-fit, minmax(200px, 1fr))`
- JS: filter ปุ่ม แสดงเฉพาะหมวด
- อธิบาย: intrinsic responsive grid
- ท้าทาย: ปุ่ม filter ทำงานครบ

**challenge_th:** กรองแสดงเฉพาะรูปหมวดที่เลือก

---

## สรุปโมดูล 02

**สิ่งที่ผู้เรียนได้:** Flexbox, Grid, responsive, sticky, layout patterns  
**แนะนำท้ายโมดูล:** วิดีโอสรุป + ทำหน้า landing รวม hero + navbar + features (แบบฝึก)
