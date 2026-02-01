function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Mobilon bezáródjon kattintás után
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
