// Initialize the global gtag function even if the script hasn't loaded yet
window.dataLayer = window.dataLayer || [];
window.gtag = function() { window.dataLayer.push(arguments); };

// Check if cookies have been accepted previously
if (localStorage.getItem('cookies-accepted') !== 'true') {
  // Create the cookie consent banner
  const consentBanner = document.createElement('div');
  consentBanner.id = 'cookie-consent-banner';
  consentBanner.innerHTML = `
    <div style="position: fixed; bottom: 10px; left: 0; right: 0; background: #333; color: #fff; text-align: center; padding: 10px; font-size: 16px;">
      <p>We use cookies to enhance your experience. By clicking "Accept," you agree to our use of cookies.</p>
      <button id="accept-cookies" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Accept</button>
      <button id="reject-cookies" style="padding: 10px 20px; background-color: #f44336; color: white; border: none; cursor: pointer;">Reject</button>
    </div>
  `;
  document.body.appendChild(consentBanner);

  // Event listener for accept button
  document.getElementById('accept-cookies').addEventListener('click', function () {
    localStorage.setItem('cookies-accepted', 'true');  // Store consent in localStorage
    document.getElementById('cookie-consent-banner').remove(); // Remove the banner
    
    // Load Google Analytics script after consent
    loadGA();
  });

  // Event listener for reject button
  document.getElementById('reject-cookies').addEventListener('click', function () {
    localStorage.setItem('cookies-accepted', 'false');  // Store rejection in localStorage
    document.getElementById('cookie-consent-banner').remove(); // Remove the banner
  });
}

// Function to load Google Analytics after consent
function loadGA() {
  const script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-X6DE164TJV";
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    // Initialize Google Analytics after script is loaded
    if (typeof gtag === 'function') {
      gtag('js', new Date());  // Initialize Google Analytics
      gtag('config', 'G-X6DE164TJV');  // Configure GA
    } else {
      console.error("Google Analytics (gtag) did not initialize correctly.");
    }
  };
}
