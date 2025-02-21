let backToTop = document.getElementById("backToTop");

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction()
};

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

