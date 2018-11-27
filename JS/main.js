$(document).ready(function(){
  ScrollReveal().reveal('.headers', { delay: 500 });
  ScrollReveal().reveal('#mainLanderImage', { delay: 500 });
  ScrollReveal().reveal('.subHeaders', { delay: 500 });
  ScrollReveal().reveal('.circleImageLarge', { delay: 500 });
  ScrollReveal().reveal('.squareImage', { delay: 500 });
  ScrollReveal().reveal('.littleCircleImage', { delay: 500 });
  ScrollReveal().reveal('.descriptors', { delay: 500 });

 
  setImageOne();


function setImageOne() {
  $('#imageSwap').fadeIn(500).html('<img src="https://i.imgur.com/UZUkGnF.png" />').delay(2000).fadeOut(500, function () { setImageTwo(); });
}

function setImageTwo() {
  $('#imageSwap').fadeIn(500).html('<img src="https://i.imgur.com/prQB6rr.png" />').delay(2000).fadeOut(500, function () { setImageThree(); });
}

function setImageThree() {
    $('#imageSwap').fadeIn(500).html('<img src="https://i.imgur.com/UYRxlDk.png" />').delay(2000).fadeOut(500, function () { setImageFour(); });
  }

  function setImageFour() {
    $('#imageSwap').fadeIn(500).html('<img src="https://i.imgur.com/uYLNfe5.png" />').delay(2000).fadeOut(500, function () { setImageFive(); });
  }

  function setImageFive() {
    $('#imageSwap').fadeIn(500).html('<img src="https://i.imgur.com/1ujT5Oi.png" />').delay(2000).fadeOut(500, function () { setImageOne(); });
  }

  
    });

    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }