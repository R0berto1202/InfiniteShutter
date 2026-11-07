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
    // SCROLL BACKGROUND TRANSITION
    const sections = document.querySelectorAll("main section");

    const backgroundColors = [
        "#080B0A",
        "#0D100F",
        "#101310",
        "#0B0E0D",
        "#0D100F",
        "#080B0A"
    ];

    

    sections.forEach(section => {
        backgroundObserver.observe(section);
    });
});