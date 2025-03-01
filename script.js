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
