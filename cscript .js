const slider = document.querySelector(".slider");
const numSlides = slider.children.length;
let currentSlide = 0;
const slideInterval = 5000; // Slide interval in milliseconds
let slideIntervalId;

function nextSlide() {
  currentSlide = (currentSlide + 1) % numSlides;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startAutoSlide() {
  slideIntervalId = setInterval(nextSlide, slideInterval);
}

function stopAutoSlide() {
  clearInterval(slideIntervalId);
}

slider.addEventListener("touchstart", () => {
  stopAutoSlide(); // Stop auto-slide on touch
});

slider.addEventListener("touchend", () => {
  startAutoSlide(); // Restart auto-slide on touch release
});

slider.addEventListener("transitionend", () => {
  if (currentSlide === numSlides - 1) {
    slider.style.transition = "none"; // Disable transition for instant loop
    currentSlide = 0;
    slider.style.transform = `translateX(0)`; // Move to the first slide instantly
    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition for the next slide
    }, 0);
  }
});

startAutoSlide();
