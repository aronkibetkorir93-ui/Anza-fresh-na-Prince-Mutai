// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'white';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple Mobile Alert for Volunteer Button
const volunteerBtns = document.querySelectorAll('.nav-btn, .secondary');
volunteerBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if(this.innerText === "Volunteer Now" || this.innerText === "Join the Movement") {
            console.log("Contact form would open here.");
        }
    });
});
