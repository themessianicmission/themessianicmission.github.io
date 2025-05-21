document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  const hamburger = document.querySelector('.hamburger');

  let openDropdown = null;

  // ESC to close hamburger menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (openDropdown) {
        openDropdown.style.display = 'none';
        openDropdown = null;
      } else if (document.body.classList.contains('show-nav')) {
        document.body.classList.remove('show-nav');
        hamburger.focus();
      }
    }
  });

  dropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement;
    const trigger = parent.querySelector('a');

    // Initially hide dropdown
    dropdown.style.display = 'none';

    // Show on mouse hover
    parent.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
      openDropdown = dropdown;
    });

    // Hide on mouse leave
    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
      openDropdown = null;
    });

    // Show on focus (keyboard Tab)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
      openDropdown = dropdown;
    });

    // Hide when focus leaves the parent (keyboard)
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
          openDropdown = null;
        }
      }, 100);
    });
  });
});
// Share the News button logic
function shareNews() {
    if (navigator.share) {
        navigator.share({
            title: 'The Messianic Mission',
            text: 'Check out this powerful update!',
            url: window.location.href,
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch(console.error);
    } else {
        alert('Sharing not supported on this browser. Please copy the link manually.');
    }
}
