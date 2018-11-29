$(document).ready(function(){

  $('#aboutNav').click(function() {$('html, body').animate({
    scrollTop: $("#kalpanaAbout").offset().top
}, 1300)});

$('#attendNav').click(function() {$('html, body').animate({
  scrollTop: $("#locationSection").offset().top
}, 1500)});

$('#contribNav').click(function() {$('html, body').animate({
  scrollTop: $("#contributeSection").offset().top
}, 2000)});

$('#vipNav').click(function() {$('html, body').animate({
  scrollTop: $("#vipSection").offset().top
}, 2000)});

$('#networkNav').click(function() {$('html, body').animate({
  scrollTop: $("#facebookCommentSection").offset().top
}, 2000)});



  ScrollReveal().reveal('.headers', { delay: 500 });
  ScrollReveal().reveal('#mainLanderImage', { delay: 500 });
  ScrollReveal().reveal('.subHeaders', { delay: 500 });
  ScrollReveal().reveal('.circleImageLarge', { delay: 500 });
  ScrollReveal().reveal('.squareImage', { delay: 500 });
  ScrollReveal().reveal('.littleCircleImage', { delay: 500 });
  ScrollReveal().reveal('.descriptors', { delay: 500 });

 
  setImageOne();


function setImageOne() {
  $('#imageSwap').fadeIn(500).html('<img src="https://lh3.googleusercontent.com/GthUMFJGrG9CMJuIC-v3JeZzrmWq6iplQE9gQ_GFbrnBL-CiXUMocU4dEACMDxZpBs8aWrsb1MjBt3F7cWSemVcLu7Rm7P_SELxYDBNUEjEBMOBiRG0cC0CJfWKdLQxNwVn8duwMLYt04MUyC-rHEliRkDILyXSxGxuRA8GqYKsEIG-WKYjC1xGIZQ0cg1uTD0uz-uWsR4gnx8CUvkVODJJWwZjCV1AlABdPfoHz33vvkjsJiqjUghEWtLYOmQN-B0VMbpOHFi1c6GKq_Hay077_JldSgR98f6joUTiQ_-sFlw3giOwDY0CL4QLY12BQbY-bhllxHefquny03zm4F0jEGNJaFfNZnscW4K4YwBwONYTmRZ5vhZqzdFG0206KQqfiIhTmtFpZ0dFqKpv05u0dPeu1fNLnN4NJgzpmrj--ouOsncvlXUqVPb0vFcDdbw0gZ_1H7pvtVwiBh6yFGXrF7QyDmyliWtHt4Jj_Az2lhzF-7qIxs_aXurJnv84wRbKILYihl5G761bKpQYC3y7ZU-Bcwj7J_QLeJg7QoEu05_vmgXEfVFEzEFWd-PfwUZdYjl4OZeyACxq1qQLI39k5ax7PrC4AnZZmktXjovoerRawrXAPJBVGdz1bHEpp3KAIvDSCSg6_xfn7kmL5Gvun=w350-h400-no" />').delay(2000).fadeOut(500, function () { setImageTwo(); });
}

function setImageTwo() {
  $('#imageSwap').fadeIn(500).html('<img src="https://lh3.googleusercontent.com/AvGVuOoGWZI_zVAQMzLI3REGZohRIQyIClOhs00nwcQprxrMsjvaX83ZYwVIvKuBS3r-il5fKxuvZ-DsW0J1BkxBg2IMTdnJQ-axVMg_ubPfklmhVNLappqzNeJl2EpDJfkZ5ZE5B-wn3d7FVwCT_QUovMgVzDTeX5wHlmWdMBXkr07N9LeuclpXEegA2MTx34vpTbLWmvbJfGVFkEtde8HoZuH2IIs3sGspwfRdA8tlKv31PrZhgvKP1DDuYxBQvR-u-IAKJceSQg-r174aX5L8grvGv2QfYWQC-szfy1jb0l8PRQsG-7EFc4TQx8d8Ib7K_dM0gBA0Vx8VRsuU7_eN8hbtjjhmjlmJN1D0B2ysZpSc2U8-0ua4T0wVPtwBW9DwaruqintaYU_YMCpdJBViRYsFeg1w7-fy0umfcWjNu_MKrgrXzSwqn_4w1cw1hO4f3ZZzE1Yt4UHKM_sSnFGR7kLAAZJ8xQiF7pWGhvQD61ZWNRH5_ZoilJD_BttKmbFZRFewRYO6RP2-umgVELLu-2xLCZdz8FkFXuQFBYoXbxcMhaS7e2WK-ffBHI42gmMaG7akvAW1XqvVOm1wn_2imJVpTIOesxCMj_uNp8nDTpPAteF4XMbT6u6K5VBVaZ5PeaRB4nYkndXxD6dXy_GU=w350-h400-no" />').delay(2000).fadeOut(500, function () { setImageThree(); });
}

function setImageThree() {
    $('#imageSwap').fadeIn(500).html('<img src="https://lh3.googleusercontent.com/GPZD-lU9aOLbH3MAUcrPEaG6lV1fxXui7wZspmWQGOAG82bkTQLB8NkW8Fq5oT87NXuyTPQ4P3uoH8JxrORbZpTTZrNSjusSiufv4566Hgf-wjILCnLGh98BF-StpOtwj_NuMCgu2QoeXqizvPLNwP7GIi9ERMJ5acpKvjBalEoBDK2aL_ExuUAe6ukAVYxjDzwnX-yAiR_lmcBLDi04aAJiLkGrMH8TuSQUcfJWkEGhLg4-PPS0t0V-XRV8U_JY0FfZU6LXGjmzid-_5rcYAvqA0CzKp6XjPYKCWOcvdtlXuVFhxuvky3jzpFKRaUTPU72bnAbPmJA7xQCv0XDNFzvWouzQGj3oQ9lqNguyZbrYCSykOPB2O0tweU8UEva0ZngFZpVwaYq4gHG9ivi524HIJqJbKehfTrWlhG5MP7Fz5vMTMGV81z4kC-n6sIsco3Um3pYm1VRGx_fJ9Yqm7aWQGgPzvk7ZTWBUDXClUDPsifw4QTfphI_KynKfuIg1wel2e3flpbZMARFXXe-fAZCY_aCKAxzD--5Vk8c4eiAATC4djUXbk1EiIDTSvI4bU9-TS7uAbrg5a7v2sQxwNLtC89-aURJXT7cDYhHIHU2pb3nLNbpuZAGsiplAAbeQTQfXoYuF8q3kMvwlGvoA014j=w350-h400-no" />').delay(2000).fadeOut(500, function () { setImageFour(); });
  }

  function setImageFour() {
    $('#imageSwap').fadeIn(500).html('<img src="https://lh3.googleusercontent.com/nkLl4dAdHIL9LyYR_KtaW5Z1Xy8PztGmOxs-3KkWYYvI0bHBJYZeIcU0nXy0mOwSByEswpsND3LKkAggMpUw7TFa1jZQz9t2AGIbhAGYN1JiUptlE9tZAEx-soZzftQ4OWav4oGbq6AqreM_niU4fQiN3AGcUiWf-SpQRfOdI7D5S5j8kkST_L_HJjSRyeDStMK2wjCFLhOHqtBbeo9WybJjnmIMbHwC2ARqVJErVLZMd0xezTQ1eOiCGxdpHUJDtvifA7KSbzeM5-Cdez2jvVCb4-GF0ZlrWhVOjy0H25ODjBZuIDMcJzn4Z1v9E4wUeUcwmUAfqAWuej4CZ5wOgr2reHMwT4ZyC-y2phRRfTeEEmj7dHcmKy0nryWQolcjlflNZtDX_8Z81W5CfdUP0mlIkjmIYwOwjN3UWRaZgMUAzHzy22fjawd0Ool9B6RDo3qG1LsqZHbkh3mmFW302N4w-bVzGZa-f75OVJhuEG5nmKq0rrDkkECqezUUKqamMxH_UUKsOArUmU_jale75m7XD2Y1hYB5Vgwc4cbk_a2ryEyaiUE8am5JAG-QO2jATFQAb-O9KOoloCCafQNIlql-Xy3n9jgS09pPpx8qvtp4ikd_jWclr3JXRwQa-3uasO4_B53TzG6tH4jCApeW4bty=w350-h400-no" />').delay(2000).fadeOut(500, function () { setImageFive(); });
  }

  function setImageFive() {
    $('#imageSwap').fadeIn(500).html('<img src="https://lh3.googleusercontent.com/28hc-c5BzYU7hl2DRQZIgC7a7KuneMcbpjaXDyJc8Ko2diXVMM8jdr-7xPzMNGM1M1yBEMxCtehDAjNyYL3DlEhmyEWmqTjkTC8efG6ROGP8vaFlh24G6cl_PhKFJN_jglz5JhiADDQp0qZ8Nex019zzkHs5gTU-9JAirQ2NxYQ26iHhWyc-jHReR_ljHjRttA_Er_uWOLYtIdODa66R91EYZSZqy-JfIdT8BO_ejvMyLVsxSdwTw8D2oeLq5RiSHiKpbxDhNq3nDbvqRo3yLr0Q8Hy8CyyYLoGuKIU_U67I04U03GTSiwWz2E7zCG7kuI9E496yBmoA-RYV_R8n-qXyysVmTDZ0_KZwxUmcegiz4HVVPUQ7gEtVTfr4gNzViElwzXyi-a52ttvFGb-GJmXDt4nQO0q_bH3SsPpKUVFTpOQiA4UOOMZ46QBK5OFM1pEDqipnZmR_WCLIEa9M26TuIKwN3o2-Pf7p2oPIzVPXZvNpqknSP0Sl8J1oDq-oI2T2-EyemiRJH4H6QuMbXMx8GtRaXbXrTWAYBQYfgF-yXZbqIZDKWRhsIL1eEmAJ7Xteo8TWnM-ILvSF2cnrQ3DUysc3BXdmhvjdTeaMCZqKvPYtJlQXie95RzKzoGGIIyKBQWsN_cbGLI3XhSCWjQhc=w350-h400-no" />').delay(2000).fadeOut(500, function () { setImageOne(); });
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

