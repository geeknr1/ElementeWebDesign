let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slides img');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slides img');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

// Initialize the first slide
showSlides();