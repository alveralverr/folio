const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
  });
});