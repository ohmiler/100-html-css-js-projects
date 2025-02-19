let navbar = document.getElementById("navbar");
let logoIcon = document.getElementById("logoIcon");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "2rem";
    logoIcon.style.fontSize = "1.5rem";
  } else {
    navbar.style.padding = "4rem 2rem";
    logoIcon.style.fontSize = "2rem";
  }
}

window.onscroll = () => {
    scrollFunction()
};
