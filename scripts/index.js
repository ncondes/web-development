var slideIndex = 0;
var totalSlides = document.querySelectorAll(".slider-images img").length;
var slideWidth = document.querySelector(".slider").offsetWidth;
var isAnimating = false;

function autoSlide() {
  setInterval(function () {
    if (!isAnimating) {
      moveSlide(1);
    }
  }, 5000);
}

function moveSlide(n) {
  isAnimating = true;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  var transformValue = -slideIndex * slideWidth;

  var sliderImages = document.querySelector(".slider-images");
  sliderImages.style.transform = "translateX(" + transformValue + "px)";

  setTimeout(function () {
    isAnimating = false;
    if (slideIndex === 0 && n === 1) {
      sliderImages.style.transform =
        "translateX(" + -(totalSlides - 1) * slideWidth + "px)";
    } else if (slideIndex === totalSlides - 1 && n === -1) {
      sliderImages.style.transform = "translateX(0)";
    }
  }, 600);
}

window.changeSlide = function (n) {
  if (!isAnimating) {
    moveSlide(n);
  }
};

autoSlide();
