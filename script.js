function toggleNav() {
    document.body.classList.toggle('show-nav');
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const parent = dropdown.parentElement;
        const toggleLink = parent.querySelector('a[href="#"]');

        // Start hidden
        dropdown.style.display = 'none';

        // Show on mouse hover
        parent.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });

        // Hide on mouse leave
        parent.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });

        // Show on focus (tabbed into link)
        toggleLink?.addEventListener('focus', () => {
            dropdown.style.display = 'block';
        });

        // Hide when focus moves away completely
        parent.addEventListener('focusout', (e) => {
            setTimeout(() => {
                if (!parent.contains(document.activeElement)) {
                    dropdown.style.display = 'none';
                }
            }, 50); // short delay prevents conflict with tabbing inside dropdown
        });

        // Hide on Escape key
        parent.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dropdown.style.display = 'none';
                toggleLink?.focus();
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
