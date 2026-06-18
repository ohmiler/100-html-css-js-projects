# Concept Map — แผนที่ Concept ข้าม 100 โปรเจกต์

ตารางนี้แสดงว่าแต่ละ concept ถูก **สอนครั้งแรก** ที่ EP ไหน และถูก **ทบทวน** ในช่วง EP ไหนบ้าง

---

## HTML Concepts

| Concept | สอนครั้งแรก | ทบทวนบ่อยใน |
|---------|-------------|-------------|
| HTML structure พื้นฐาน | EP01 | ทุก EP |
| semantic HTML (`article`, `nav`, `footer`) | EP03 | EP17, EP21, EP24 |
| `blockquote`, `cite` | EP14 | EP97 |
| `form`, `input`, `textarea` | EP10 | EP61–EP80 |
| `hidden` attribute | EP36 | EP46 |
| data attributes (`data-*`) | EP08 | EP46, EP55 |
| list semantics (`ol`, `ul`) | EP17 | EP37, EP57 |
| table structure | EP80 | — |

---

## CSS Concepts

| Concept | สอนครั้งแรก | ทบทวนบ่อยใน |
|---------|-------------|-------------|
| box model | EP03 | EP15, EP27 |
| class / modifier pattern | EP01 | EP04, EP08 |
| flexbox | EP01 (center) | EP15, EP21, EP34 |
| CSS custom properties | EP05 | EP08 |
| `:hover` | EP06 | EP16, EP31 |
| `position: relative/absolute` | EP06 | EP16, EP23, EP44 |
| `position: fixed/sticky` | EP23 | EP33, EP45, EP53 |
| `border-radius`, pill shape | EP04 | EP18, EP29 |
| `box-shadow` | EP27 | EP39 |
| typography | EP14 | EP30 |
| `@keyframes` animation | EP48 | EP49, EP52, EP81 |
| `transition` | EP01 | EP43, EP56, EP83 |
| `transform` (scale, rotate) | EP52 | EP56, EP83, EP84 |
| `perspective`, 3D | EP83 | EP84 |
| CSS Grid | EP26 | EP32, EP38, EP40 |
| media queries | EP22 | EP24, EP35, EP40 |
| `grid-template-areas` | EP38 | — |
| `auto-fit`, `minmax` | EP40 | — |
| text-shadow / glow | EP82 | — |
| checkbox/radio hack | EP67 | EP76 |
| line-clamp / truncate | EP30 | — |

---

## JavaScript Concepts

| Concept | สอนครั้งแรก | ทบทวนบ่อยใน |
|---------|-------------|-------------|
| `getElementById` | EP01 | EP02–EP20 |
| `addEventListener` | EP01 | ทุก EP |
| `classList` (add/remove/toggle) | EP01 | EP07–EP60 |
| `textContent` | EP02 | EP09, EP12, EP59 |
| DOM state vs variable state | EP09 | EP12, EP20, EP88 |
| `createElement` / `appendChild` | EP18 | EP45, EP58 |
| `remove()` | EP07 | EP45 |
| array + index | EP11 | EP14, EP47, EP58 |
| `for` loop | EP12 | EP50, EP66 |
| `filter()` | EP50 | EP64, EP74, EP79 |
| `querySelector` / `querySelectorAll` | EP66 | EP73, EP80 |
| `preventDefault` | EP61 | EP62, EP63 |
| FormData / input value | EP10 | EP61–EP80 |
| regex validation | EP62 | EP72, EP78 |
| `setTimeout` | EP45 | EP48, EP49 |
| `setInterval` / `clearInterval` | EP59 | EP60, EP88, EP94 |
| `navigator.clipboard` | EP19 | EP97 |
| `localStorage` | EP99 | EP46 (sessionStorage) |
| `FileReader` | EP69 | — |
| `getBoundingClientRect` | EP54 | EP84 |
| event `target` | EP42 | EP55 |
| debounce pattern | EP64 | EP74 |
| keyboard events | EP44 | EP55, EP70, EP74 |
| `IntersectionObserver` | EP28 | — |
| `scrollY` / `scrollTo` | EP53 | EP33 |
| mousedown/mousemove/mouseup | EP57 | EP84 |
| game loop / 2D array | EP91 | EP94 |
| `parseFloat` / numeric calc | EP98 | EP95 |
| mock data object | EP86 | EP87, EP89 |

---

## Concept ต่อโมดูล (สอนครั้งแรก)

### Module 01 (EP01–EP20)
`addEventListener`, `classList`, `textContent`, semantic HTML, box model, `:hover`, position, CSS variables, state variables, `createElement`, clipboard API

### Module 02 (EP21–EP40)
flexbox layout, media queries, fixed/sticky, CSS Grid, `grid-template-areas`, `auto-fit`/`minmax`, `IntersectionObserver`, overlay, tabs pattern

### Module 03 (EP41–EP60)
modal pattern, event target, accordion animation, click outside, toast queue, `translateX` slider, `@keyframes`, shimmer, debounce, `getBoundingClientRect`, drag pattern, typewriter, timer lifecycle

### Module 04 (EP61–EP80)
`preventDefault`, regex validation, debounce search, wizard state machine, `FileReader`, OTP multi-input, password strength scoring, validation map, combobox keyboard nav, sort callback

### Module 05 (EP81–EP100)
advanced animation, 3D transform, canvas/particles, game logic, calculator state machine, `localStorage`, portfolio composition

---

## ความถี่ Concept (ไม่ควรสอนซ้ำเป็นบทใหม่)

Concept เหล่านี้ควรเป็น **ทบทวนเท่านั้น** หลัง EP ที่สอนครั้งแรก:

| Concept | สอนครั้งแรก | หลัง EP นี้ = ทบทวนเท่านั้น |
|---------|-------------|------------------------------|
| `getElementById` | EP01 | EP02+ |
| `addEventListener` | EP01 | EP02+ |
| `classList.toggle` | EP01 | EP02+ |
| flexbox center | EP01 | EP03+ |
| `preventDefault` | EP61 | EP62+ |

---

## ลำดับความยากโดยรวม

```
EP01-10:  difficulty 1-2  (พื้นฐาน)
EP11-20:  difficulty 2    (พื้นฐาน+)
EP21-30:  difficulty 2-3  (layout)
EP31-40:  difficulty 3    (layout+)
EP41-50:  difficulty 3    (interactive)
EP51-60:  difficulty 3-4  (interactive+)
EP61-70:  difficulty 3-4  (forms)
EP71-80:  difficulty 4    (forms+)
EP81-90:  difficulty 4    (creative)
EP91-100: difficulty 4-5  (creative+, portfolio)
```

---

## การใช้งานสำหรับผู้สอน

1. ก่อนอัด EP ใหม่ ตรวจ `concepts_new` ในไฟล์ module
2. ถ้า concept เคยสอนแล้ว ให้พูดสั้นๆ ว่า "ทบทวนจาก EPxx" แทนสอนยาว
3. ใช้ตารางนี้วาง playlist YouTube แยกตาม theme ได้ โดยไม่พึ่งลำดับ EP เท่านั้น
4. EP100 ควรอ้างอิง component จาก EP ก่อนหน้าโดยตรง (hero จาก EP25, form จาก EP63 ฯลฯ)
