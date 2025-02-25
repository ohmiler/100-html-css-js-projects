function toggleMode() {
    document.body.classList.toggle('dark-mode');
    
    const button = document.querySelector('.toggle-btn');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Toggle Light Mode';
    } else {
        button.textContent = 'Toggle Dark Mode';
    }
}