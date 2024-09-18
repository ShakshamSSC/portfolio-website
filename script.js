let currentIndex = 1; // Start from the 1st real slide (after the cloned first slide)
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides iframe').length;
const slideWidth = document.querySelector('.slider').clientWidth;

// Clone the first and last slides
const firstSlide = slides.firstElementChild.cloneNode(true);
const lastSlide = slides.lastElementChild.cloneNode(true);

// Append and prepend clones
slides.appendChild(firstSlide);
slides.insertBefore(lastSlide, slides.firstElementChild);

// Adjust the slider's initial position
slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

function nextSlide() {
    currentIndex++;
    slides.style.transition = 'transform 0.5s ease-in-out';
    updateSliderPosition();

    // After the transition, if it's the last cloned slide, jump back to the real first slide
    slides.addEventListener('transitionend', () => {
        if (currentIndex === totalSlides + 1) {
            slides.style.transition = 'none';
            currentIndex = 1; // Real first slide
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    });
}

function prevSlide() {
    currentIndex--;
    slides.style.transition = 'transform 0.5s ease-in-out';
    updateSliderPosition();

    // After the transition, if it's the first cloned slide, jump back to the real last slide
    slides.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            slides.style.transition = 'none';
            currentIndex = totalSlides; // Real last slide
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    });
}

function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 5000);
