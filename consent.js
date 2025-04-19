// 🍪 Cookie Consent Banner
(function () {
  const accepted = localStorage.getItem('cookies-accepted') === 'true';

  if (!accepted) {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
      position: fixed; bottom: 0; width: 100%; background: #222; color: #fff;
      padding: 15px; text-align: center; font-family: sans-serif; z-index: 10000;
    `;
    banner.innerHTML = `
      This site uses cookies to analyze traffic. <a href="/privacy-policy" style="color: #ffd700;">Learn more</a>.
      <button id="accept-cookies" style="margin-left: 15px; background: #4CAF50; color: white; border: none; padding: 10px 20px; cursor: pointer;">
        Accept
      </button>
    `;
    document.body.appendChild(banner);

    document.getElementById('accept-cookies').addEventListener('click', function () {
      localStorage.setItem('cookies-accepted', 'true');
      document.getElementById('cookie-banner').remove();
      loadGA();
    });
  } else {
    loadGA();
  }

  // 🧠 Load GA function
function loadGA() {
  const script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-X6DE164TJV";
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    // Ensure gtag is available globally
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); }  // Assign gtag to window
    gtag('js', new Date()); // Initialize gtag
    gtag('config', 'G-X6DE164TJV'); // Configure GA
  };
}
})();
