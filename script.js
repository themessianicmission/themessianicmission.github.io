function toggleNav() {
    document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
        dropdown.parentElement.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        dropdown.parentElement.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';

        // Show on tabbing into the parent <a> link
        const toggleLink = parent.querySelector('a[href="#"]');
        if (toggleLink) {
            toggleLink.addEventListener('focus', () => {
                dropdown.style.display = 'block';
            });
        }

        // Hide on tabbing out of the entire dropdown
        parent.addEventListener('focusout', () => {
            // Small delay to wait for next focused element
            setTimeout(() => {
                if (!parent.contains(document.activeElement)) {
                    dropdown.style.display = 'none';
                }
            }, 0);
        });

        // Allow ESC key to close dropdown
        parent.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dropdown.style.display = 'none';
                toggleLink?.focus(); // Return focus to the toggle
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
