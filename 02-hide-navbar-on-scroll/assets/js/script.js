let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

// Ensure the navbar is initially visible
navbar.style.top = "0";

window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
}