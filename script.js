function toggleNav() {
  document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement;
    const trigger = parent.querySelector('a');

    // Initially hide dropdown
    dropdown.style.display = 'none';

    // Show on mouse hover
    parent.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });

    // Hide on mouse leave
    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });

    // Show on focus (keyboard Tab)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
    });

    // Hide when focus leaves the parent (keyboard)
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
        }
      }, 100);
    });

    // Hide dropdown and nav with Escape key
    parent.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.style.display = 'none';
        trigger.focus(); // optional: return focus to trigger
        document.body.classList.remove('show-nav'); // Close hamburger nav
      }
    });
  });

  // Allow Escape to close hamburger menu globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('show-nav');
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
