// MOBILE MENU

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});


// SCROLL REVEAL ANIMATION

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "main section > *, section > *"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });

});