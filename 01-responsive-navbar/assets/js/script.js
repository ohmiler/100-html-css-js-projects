const hamburgerIcon = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle('show');
})