function toggleNav() {
  document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement;
    const trigger = parent.querySelector('a');

    // Initially hide dropdown and set ARIA to false
    dropdown.style.display = 'none';
    trigger.setAttribute('aria-expanded', 'false');

    // Show on mouse hover
    parent.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
      trigger.setAttribute('aria-expanded', 'true');
    });

    // Hide on mouse leave
    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
      trigger.setAttribute('aria-expanded', 'false');
    });

    // Show on focus (keyboard Tab)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
      trigger.setAttribute('aria-expanded', 'true');
    });

    // Hide when focus leaves the parent (keyboard)
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
          trigger.setAttribute('aria-expanded', 'false');
        }
      }, 100);
    });

    // Hide with Escape key
    parent.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.style.display = 'none';
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus(); // optional: return focus to trigger
      }
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
