function toggleNav() {
  document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  let submenuOpen = false;

  dropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement;
    const trigger = parent.querySelector('a');

    // Initially hide dropdown
    dropdown.style.display = 'none';

    // Show on mouse hover
    parent.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
      submenuOpen = true;
    });

    // Hide on mouse leave
    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
      submenuOpen = false;
    });

    // Show on focus (keyboard Tab)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
      submenuOpen = true;
    });

    // Hide when focus leaves the parent (keyboard)
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
          submenuOpen = false;
        }
      }, 100);
    });

    // Handle Escape inside submenu
    parent.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (submenuOpen) {
          dropdown.style.display = 'none';
          submenuOpen = false;
          trigger.focus(); // optional
          e.stopPropagation(); // stop bubbling if handled here
        }
      }
    });
  });

  // Global Escape for closing hamburger menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const navOpen = document.body.classList.contains('show-nav');

      if (!submenuOpen && navOpen) {
        document.body.classList.remove('show-nav');
      }
    }
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
