const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('open');
  overlay.classList.toggle('open');
  
  // Prevent scrolling when menu is open
  if (overlay.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Close menu when clicking a menu item
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    menuToggle.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});