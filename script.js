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

document.addEventListener('DOMContentLoaded', function () {
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
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const currentLangCode = supportedLangs.includes(pathParts[0]) ? pathParts[0] : '';
  const remainingPath = supportedLangs.includes(pathParts[0]) ? pathParts.slice(1).join('/') : pathParts.join('/');

  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  // 🟡 Set the button to the current language + dropdown arrow
  const currentLangName = langMap[currentLangCode] || 'English';
  if (langBtn) {
    langBtn.textContent = `${currentLangName} ▾`;
  }

  // 🟡 Build dropdown list
  if (langMenu) {
    langMenu.innerHTML = '';

    Object.entries(langMap).forEach(([code, name]) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = name;
      a.href = `/${code}/${remainingPath}`;
      li.appendChild(a);
      langMenu.appendChild(li);
    });

    // Add English if current page isn't default
    if (currentLangCode !== '') {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = 'English';
      a.href = `/${remainingPath}`;
      li.appendChild(a);
      langMenu.appendChild(li);
    }
  }

  // 🟡 Toggle dropdown
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      if (langMenu) {
        langMenu.style.display = langMenu.style.display === 'none' ? 'block' : 'none';
      }
    });

    // 🟡 Close dropdown if clicking elsewhere
    window.addEventListener('click', function (e) {
      if (!document.querySelector('.lang-switcher').contains(e.target)) {
        if (langMenu) langMenu.style.display = 'none';
      }
    });
  }
});
