$(document).ready(function () {
  var sliderImages = $(".slider-images");
  var imageWidth = $(".slider-images img").width();
  var slideIndex = 0;
  var totalSlides = $(".slider-images img").length;
  var isAnimating = false;

  function autoSlide() {
    setInterval(function () {
      if (!isAnimating) {
        moveSlide(1);
      }
    }, 10000);
  }

  function moveSlide(n) {
    isAnimating = true;
    var marginLeftVal = parseInt(sliderImages.css("margin-left")) || 0;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    var newMarginLeftVal = -imageWidth * slideIndex;

    sliderImages.animate(
      { marginLeft: newMarginLeftVal },
      1000,
      "swing",
      function () {
        isAnimating = false;
        if (marginLeftVal === -(imageWidth * (totalSlides - 1)) && n === 1) {
          sliderImages.css("margin-left", 0);
        } else if (marginLeftVal === 0 && n === -1) {
          sliderImages.css("margin-left", -(imageWidth * (totalSlides - 1)));
        }
      }
    );
  }

  $(".prev").click(function () {
    if (!isAnimating) {
      moveSlide(-1);
    }
  });

  $(".next").click(function () {
    if (!isAnimating) {
      moveSlide(1);
    }
  });

  autoSlide();
});
