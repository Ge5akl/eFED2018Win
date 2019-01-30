var slideIndex = 1;
var slides = document.getElementsByClassName("item");
var dots = document.getElementsByClassName("slider-dots_item");



function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
     
        console.log(i);
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

