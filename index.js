// Smooth Scrolling for Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on Scroll
const animatedElements = document.querySelectorAll('.animated');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(element => observer.observe(element));

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const projectImages = document.querySelectorAll(".project-image");

    projectImages.forEach(image => {
        image.addEventListener("click", function () {
            // Remove 'active' class from all images
            projectImages.forEach(img => img.classList.remove("active"));

            // Toggle 'active' class for the clicked image
            this.classList.add("active");
        });

        // Close overlay when clicking outside
        document.addEventListener("click", function (e) {
            if (!image.contains(e.target)) {
                image.classList.remove("active");
            }
        });
    });
});
