const bentoGrid = document.getElementById("bentoGrid");
const bentoItems = document.querySelectorAll(".bento-item");

// คลิกกล่องเพื่อขยายเต็มแถว (คลิกซ้ำเพื่อยกเลิก)
function toggleExpand(item) {
  const alreadyExpanded = item.classList.contains("is-expanded");

  bentoItems.forEach((el) => el.classList.remove("is-expanded"));
  bentoGrid.classList.remove("is-expanded");

  if (!alreadyExpanded) {
    bentoGrid.classList.add("is-expanded");
    item.classList.add("is-expanded");
  }
}

bentoItems.forEach((item) => {
  item.addEventListener("click", () => toggleExpand(item));

  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpand(item);
    }
  });
});
