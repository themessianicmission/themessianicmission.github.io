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

document.addEventListener('DOMContentLoaded', () => {
  // Language code to name map
  const langMap = {
    'he': 'עברית',
    'el': 'Ελληνικά',
    'ar': 'العربية',
    'es': 'Español',
    'fr': 'Français',
    'pt': 'Português',
    'ru': 'Русский',
    'tl': 'Tagalog',
    'am': 'አማርኛ'
  };

  const supportedLangs = Object.keys(langMap);

  // Get current path info
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const currentLangCode = supportedLangs.includes(pathParts[0]) ? pathParts[0] : '';
  const remainingPath = supportedLangs.includes(pathParts[0]) ? pathParts.slice(1).join('/') : pathParts.join('/');

  // Handle case where path is like /he/ (no file)
  const currentPage = remainingPath === '' ? 'index.html' : remainingPath;

  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  // Set button label
  const currentLangName = langMap[currentLangCode] || 'English';
  if (langBtn) {
    langBtn.textContent = `${currentLangName} ▾`;
  }

  // Populate language menu
  if (langMenu) {
    langMenu.innerHTML = '';

    for (const [code, name] of Object.entries(langMap)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = name;
      a.href = `/${code}/${currentPage}`;
      li.appendChild(a);
      langMenu.appendChild(li);
    }

    if (currentLangCode !== '') {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = 'English';
      a.href = `/${currentPage}`;
      li.appendChild(a);
      langMenu.appendChild(li);
    }
  }

  // Toggle dropdown
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close on outside click
    window.addEventListener('click', e => {
      if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.style.display = 'none';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        langMenu.style.display = 'none';
      }
    });
  }
});
