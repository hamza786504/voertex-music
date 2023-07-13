const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    sidebar.style.left = '0';
  } else {
    sidebar.style.left = '-250px';
  }
});
