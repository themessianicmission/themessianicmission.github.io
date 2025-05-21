function toggleNav() {
  document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  const hamburger = document.querySelector('.hamburger');
  let activeDropdown = null;

  // ESC key behavior
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeDropdown && activeDropdown.style.display === 'block') {
        activeDropdown.style.display = 'none';
        activeDropdown = null;
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

    // Show on hover
    parent.addEventListener('mouseenter', () => {
      if (document.body.classList.contains('show-nav')) {
        dropdown.style.display = 'block';
        activeDropdown = dropdown;
      }
    });

    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
      if (activeDropdown === dropdown) activeDropdown = null;
    });

    // Show on focus (keyboard)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
      activeDropdown = dropdown;
    });

    // Hide when focus leaves
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
          if (activeDropdown === dropdown) activeDropdown = null;
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
