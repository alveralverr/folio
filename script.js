const sidebarItems = document.querySelectorAll('.sidebar-item');
const caseIcons = document.querySelectorAll('.case-icon-lg');

// Sidebar hover effects
sidebarItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});

// Case Study Navigation
caseIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const caseId = icon.getAttribute('data-case');
        if (caseId) {
            // Hide all case study sections
            document.querySelectorAll('.case-study-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show the clicked case study section
            const targetSection = document.getElementById(caseId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll to the case study section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Smooth Scroll to sections
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump to the anchor

    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Scroll to the target section with a fast and smooth animation
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});