var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

function playSlideshow() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide active';
}

var slideTime = setInterval(playSlideshow,3000);
