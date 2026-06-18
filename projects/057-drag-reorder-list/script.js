// EP57: ลากเรียงรายการด้วย mouse events และแสดง ghost preview
const list = document.getElementById("reorderList");
const items = [...list.querySelectorAll(".reorder-item")];

let draggingItem = null;
let ghost = null;

function createGhost(sourceItem) {
  const clone = sourceItem.cloneNode(true);
  clone.classList.add("drag-ghost");
  clone.removeAttribute("data-id");
  document.body.appendChild(clone);
  return clone;
}

function getItemAtPoint(x, y) {
  ghost.style.pointerEvents = "none";
  const target = document.elementFromPoint(x, y);
  ghost.style.pointerEvents = "";

  if (!target) return null;
  return target.closest(".reorder-item");
}

function moveDraggedItem(pointerY) {
  const siblings = [...list.querySelectorAll(".reorder-item:not(.is-dragging)")];

  for (const sibling of siblings) {
    const rect = sibling.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;

    if (pointerY < midpoint) {
      list.insertBefore(draggingItem, sibling);
      return;
    }
  }

  list.appendChild(draggingItem);
}

function clearDragState() {
  list.querySelectorAll(".reorder-item").forEach((item) => {
    item.classList.remove("is-dragging", "is-over");
  });
}

function onMouseMove(event) {
  if (!draggingItem || !ghost) return;

  ghost.style.left = `${event.clientX}px`;
  ghost.style.top = `${event.clientY}px`;

  list.querySelectorAll(".reorder-item").forEach((item) => item.classList.remove("is-over"));

  const overItem = getItemAtPoint(event.clientX, event.clientY);
  if (overItem && overItem !== draggingItem) {
    overItem.classList.add("is-over");
  }

  moveDraggedItem(event.clientY);
}

function onMouseUp() {
  if (!draggingItem) return;

  clearDragState();

  if (ghost) {
    ghost.remove();
    ghost = null;
  }

  draggingItem = null;
  document.body.style.cursor = "";
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

items.forEach((item) => {
  const handle = item.querySelector(".handle");

  handle.addEventListener("mousedown", (event) => {
    event.preventDefault();

    draggingItem = item;

    ghost = createGhost(item);
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;

    item.classList.add("is-dragging");
    document.body.style.cursor = "grabbing";

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});
