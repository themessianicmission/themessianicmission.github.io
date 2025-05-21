function toggleNav() {
  document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement;
    const trigger = parent.querySelector('a');

    // Hide dropdown initially
    dropdown.style.display = 'none';

    // Show on mouse hover
    parent.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });

    // Hide on mouse leave
    parent.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });

    // Show on keyboard focus (Tab into trigger link)
    trigger.addEventListener('focus', () => {
      dropdown.style.display = 'block';
    });

    // Hide when focus leaves the parent
    parent.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parent.contains(document.activeElement)) {
          dropdown.style.display = 'none';
        }
      }, 10); // Short delay lets Tab move inside menu
    });

    // Hide dropdown with Escape key
    parent.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.style.display = 'none';
        trigger.focus(); // Optional: return to main link
      }
    });
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
