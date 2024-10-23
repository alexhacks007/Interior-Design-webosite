
document.getElementById('navbarToggler').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('show');
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us. We'll get back to you shortly.");
});

const images = [
    'images/img-10.jpg',
    'images/img-11.jpg',
    'images/img-12.jpg'
];


let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    slider.style.backgroundImage = `url(${images[index]})`;
    slider.style.animation = 'fade 1s';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

window.onload = function() {
    showSlide(currentSlide);
}
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('servicesSlider');
    let currentIndex = 0;

    function autoSlide() {
        const totalSlides = slider.children[0].children.length;
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(autoSlide, 3000);
});

