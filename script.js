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
        });
    });
});

// Share the News button logic
function shareNews() {
    if (navigator.share) {
        navigator.share({
            title: 'The Messianic Mission',
            text: 'Check out this powerful update from The Messianic Mission!',
            url: window.location.href,
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch(console.error);
    } else {
        alert('Sharing not supported on this browser. Please copy the link manually.');
    }
}
