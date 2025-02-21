let sideNav = document.getElementById("sideNav");
let myHeader = document.getElementById("myHeader");
let barsIcon = document.getElementById("barsIcon");
let myMain = document.getElementById("myMain");

barsIcon.addEventListener("click", () => {
    sideNav.classList.toggle("open");
    myHeader.classList.toggle("shift");
    myMain.classList.toggle("shift");
})