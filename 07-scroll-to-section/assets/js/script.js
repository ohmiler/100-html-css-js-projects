document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});