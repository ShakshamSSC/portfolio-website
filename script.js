let currentSlide = 0;
const slides = document.querySelectorAll('.slides iframe');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    const offset = -index * 100; // Move the slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Show the initial slide
showSlide(currentSlide);

// Next button functionality
document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Cycle forward
    showSlide(currentSlide);
});

// Previous button functionality
document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Cycle backward
    showSlide(currentSlide);
});

// Automatic slide change every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Cycle forward
    showSlide(currentSlide);
}, 5000);

// Clone the first slide and append to the end for smooth looping
const firstSlideClone = slides[0].cloneNode(true);
document.querySelector('.slides').appendChild(firstSlideClone);

// Adjust totalSlides after cloning
totalSlides++;



// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
