let submenuOpen = false;

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const parent = dropdown.parentElement;
  const trigger = parent.querySelector('a');

  // Initial state
  dropdown.style.display = 'none';
  trigger.setAttribute('aria-expanded', 'false');

  // Show on mouse hover or focus
  const openSubmenu = () => {
    dropdown.style.display = 'block';
    trigger.setAttribute('aria-expanded', 'true');
    submenuOpen = true;
  };

  const closeSubmenu = () => {
    dropdown.style.display = 'none';
    trigger.setAttribute('aria-expanded', 'false');
    submenuOpen = false;
  };

  parent.addEventListener('mouseenter', openSubmenu);
  parent.addEventListener('mouseleave', closeSubmenu);
  trigger.addEventListener('focus', openSubmenu);
  parent.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!parent.contains(document.activeElement)) {
        closeSubmenu();
      }
    }, 100);
  });

  // Hide submenu on Escape
  parent.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dropdown.style.display === 'block') {
        closeSubmenu();
        trigger.focus();
        e.stopPropagation(); // prevent bubbling to global Escape handler
      }
    }
  });
});

// Global Escape: only closes main nav if no submenu is open
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (submenuOpen) {
      // submenu handler takes care of this
      return;
    }
    if (document.body.classList.contains('show-nav')) {
      document.body.classList.remove('show-nav');
    }
  }
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
