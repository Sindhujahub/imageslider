document.addEventListener("DOMContentLoaded", () => { 
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Loop to first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Loop to last slide
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });
    }

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
    } else {
        console.error("Next or Prev button not found in the DOM");
    }

    // Initialize first slide
    slides[currentIndex].classList.add("active");
});
