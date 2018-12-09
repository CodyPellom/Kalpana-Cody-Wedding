$(document).ready(function () {

    $('#aboutNav').click(function () {
      $('html, body').animate({
        scrollTop: $("#aboutUs").offset().top
      }, 1300)
    });
  
    $('#attendNav').click(function () {
      $('html, body').animate({
        scrollTop: $("#joinUs").offset().top
      }, 1500)
    });
  
  
  
    $('#vipNav').click(function () {
      $('html, body').animate({
        scrollTop: $("#vipHead").offset().top
      }, 2000)
    });
  
    $('#networkNav').click(function () {
      $('html, body').animate({
        scrollTop: $("#commentHeader").offset().top
      }, 2000)
    });
  
  
  
    
    ScrollReveal().reveal('#mainLanderImage');
    ScrollReveal().reveal('.circleImageLarge');
    ScrollReveal().reveal('.littleCircleImage');
  
  
    setImageOne();
  
  
    function setImageOne() {
      $('#imageSwap').fadeIn(1000).html('<img style="width: 100vw; height=70vh;"src="https://lh3.googleusercontent.com/cr-jGQPiYnhpqiDxKuF_CzWc0beHNEppDJ_7zHZQgNlsAIKzvvufDeU4buqJItR4JVkeYhBIec29CSDf2M6LEGMzQSVn0DyiaCu2NChQynd3vfn17YhS49AgoVcstJyKDHsDqq8aLMxl4zb-mRz8Xj7mMAdGxb4KT-xohk3qt89Dpm8mxOuKjhzHq9jrck9AirjMnsl558lo0e65qPzFIno_ZqOdvmPeUqZrmAr8X_EdMzfp4t--xh9_SGz5mjxMeyJKEtgUC3ZEX9O8-dRe9M1EOr5KmvrdrvQWCyx7aIejFpViDgwqIQpNH4vvkAT6cDGIuSrvv3njpFgLE3Vqvqo-A202mAouHaewUQKgrX5C7G49ywFngccqkDxa9tkgyjkqZNUnx8bL4XwVJS20kyKZE_xDrobIBEBrNUuO3x3XS2SOqjrwK6Ms31cpog6UdUwItcHcdRRr917CrxjGc1bBKFNxU6wD45qjdlhkRlsmTZkXU-zxg1nAEOwRDRMS8fR7XasK9f9CmyYUMIU5BHd1OwEyb0O8tFSd6ASDoj9c2CifW9rgfzcP2t5d0CPOHqFC_R26E7Xjd0eEHjLNS9viSzrsQHa2f_ug_hyxLhiFA22Mr3Rg5CQkHGJhuMaiV3nOkxjcrygh_UV1yBPTmnUn=w1048-h589-no" />').delay(2000).fadeOut(1000, function () {
        setImageTwo();
      });
    }
  
    function setImageTwo() {
      $('#imageSwap').fadeIn(1000).html('<img style="width: 100vw; height=70vh;"src="https://lh3.googleusercontent.com/mRBftm0eZjBHuSx9lsydoG28Hk-ld9rPmqdlCOTlQZ3HoMlo8rWtcY2LlhigW_GLMyi_YTYBdJ1XJYzO43NnLawP3yiVUUzdIVx9fR4I2gMzuGLDvJElo7AFIdUeFRy06JzySp5f8fcC5_f0cdOAXSZ6tbx2eoKar3BdE-uRcHsm3xRprPqiI-qLfOsrZiOQdGB2eDFVOGU0Q6nXiBUznfKs_rFixuJEauqjNNgsu5S3kWpBjl3rcKiBaUjGUcYJT3Dyrzvf17sdeGK4cJpjWuuSNujCw5P691m9Op7HgRuuVC9X25Mlmh2x2h5OkB-q_qQRne5OnWtyP6k2wDej18XcLq_CuLPev-CQ9i0sIIj0_NWZIgpSQLCs4kxq2cnrO6H_-EZH9ZneizXap1k2nGNKNufxqijlMv3273D6opc7CU7hzK_oOtlawaKrkdHBraE0RvfAdpipVcAvsCO1pY97dN6FgUOvvpPKpIh1Vxo2B7QtFhYsgOG4z803e_bFzRURDc8AaQ6s2LoAUVBoZWAsKL3BPH1VB1l5Yf0EudUsucYZFPpSqapDHLH6kZjqvZW2qsd98cCH3IiYAB-RmpY6QhCS20jmJd0bws6Ksq7V29VHv5SRxXjgi7TW3SlVJC6FH34jNz2_6LxUhib0WzZ-=w1048-h589-no" />').delay(2000).fadeOut(1000, function () {
        setImageThree();
      });
    }
  
    function setImageThree() {
      $('#imageSwap').fadeIn(1000).html('<img style="width:100vw; height=70vh;"src="https://lh3.googleusercontent.com/rmJDOB2JFAvDYHW1L3EJMjgnKAIK4r1PWYsJuB3yJFRpJm1ZNsHhbHiAfm_Dq4PgsHRlIiseyXOI3a5FrfDPG2HwgPr6AzQO2AzEWBvQnS4XmTZORG-Nug8UstcBT7vfmZz2XBAEpOnHjTK_5dAfacebxrkPXDJFomOb5H4us_TxX0HLgoutvmGrZ9q4ROE1yAE8MOIOzPF2CkV8Kv0YdwJyR80HM6vkpqV-IsFuQgarOc8QEOJOyX98MalPkKQQa1t3xveMEdBhXpNQXfxn6IYEwUNwWp10hjkkYb45K-nqAavqazju5cgXhi2IlK8CwpNTdJ53_NeFNg3l-aAfJL-DLWY2G8Y6_ztv9lWoPLQ4a8n23V6JrlVkSQCQhkTzOTTipJMy1xn9Sw9Csiuf9C34_bIGf8gvNQ1KtVl__B8c1LxNMprmQMYaSh4TJg-ApNY76VAVSvupMpS0ckYrVwbc53VJEFaVJNli96LD-VsECvL0tuNSFjT_5Xuc9KSHc1Rsii-a31-uBu_Al9lMksjosxBnXMtlK4ZSdVk_u0wJNrsnrOsMTDpSpmfCUSClWojlNs02SeQnIjzGLtuDj2s6rGuXJgNcxZXHe9JsNxEnxx3AGWlnrXbZChRziHzvkHW3g3Dxv5hAzKBWd2Q9vjas=w1048-h589-no" />').delay(2000).fadeOut(1000, function () {
        setImageFour();
      });
    }
  
    function setImageFour() {
      $('#imageSwap').fadeIn(1000).html('<img style="width:100vw; height=70vh;"src="https://lh3.googleusercontent.com/7HpZOE1f1wAOGrWtzAkhW4-rX4ioU5F6BzaTD9aXgTmSqOtLz3IyV2LG047Xxp6NBMqJ_azidfqbmbg06VO6Aw0seLwicN-jRIpL_qfw3DjvJol28QbatrcoB5Vsg7feZ9dPkBYdTk-ToukcDU-IVVOdVhJw2lAabNrmmtjnygejydiIRpw5XOQw8nAQg4Agk1l13suCo2Gc2H4SEMyqYwLi6xHCaYqjwo92diXVil7S4LYdX-WaVU0olCtOuJEIgJLQkQIf3rqejVEisQy6TuK_FFKpcLBvcQh71vDYCWVx7epfQc5dNM7Tsu0PZ-7uDMPLmoQBlDAdL3jTp2f6q7E0qbC5Ytt1NeDjSNamoTQd_m5yngVCAexib3WXBnBkkXgMAHgyDf__6_9WQaHSozDErs-j8YkDqe0BOLKoqOjHachxNvTYSbgoGukJSx7vEz90V9gkmtiJDZHiCo1E4ap-L-jhKEzR3uqiuWL3ZbyJZXT57GQDWmS6tEWLaXffQw51h9otJoHI6Rk35SOc5XsbjGjsfqJlqzxQ0J6fC8MZ7ULkWFbkOptyD_qt2xsihVgS8VSb9dV70TJHz_7l3X0WiIKaeH9TTUfcQV7fnGmeZqMX-6AbXq5lx5u28pny89FWWt23cG5FVpz_EJAZ8_ca=w1048-h589-no" />').delay(2000).fadeOut(1000, function () {
        setImageOne();
      });
    }
  
    mendhiImageGalleryOne();
  
    function mendhiImageGalleryOne() {
      $('#mendhiImageSwap').fadeIn(1000).html('<img style="width: 80vw; height=70vh;"src="https://lh3.googleusercontent.com/jjMlzHgXUaZvUvednqxOCfVLriyyCJAuoqGtk3pwNRsZkjjCTlzzDNzbWaRyuDQiWZ-pykFbyAePvpPHEmzyjymrwZodHfH_RbO4N-fGX1ZhlcO3e48FR1HkAofcABXAofFLigVLwboOGsyOIk6ZrNkRiW6ctChfqZbmby5DF-CORobRlOPjUmMSg3x9IZZJpoZJxfck83NfxCPHICIaGmD546i7Kcmjn7Bl_x3EuQFsvBP0st-4Tlo977JYzAGNFfW5z8d5YGEy484W4XjCUG35FCNCrScJW9tOI1JBYlQKB65SWHIT32yjT0fL73pxfkDHf-mvjnl-nBIoPeRHI_F92B-b5Q1H6Kr0FtiZvJJU2CLj7g8S7jxGQXYEJwrvZRo-mqtdpB5-GcDJ_sJ6TkN16iCcfYy1zsbeoqKva8jiJEqNsQs2soSZZjs-XX1sUIq0FSt8CmaffAhQj7c2Z1X-QsnIr_jQf8peNmfsmnPEMBtuaKorENIjhpIqAWmpndu19hjgvrz1YlpNJzk82A-JWbLyaI5dkBEL8yGYRqL8K9QpDil2Qeo4ihsq6v4Ld8VhRxYG52tisSU8_U3xkgI4pghO-tpvjHVdnkbwbyJXXSWYIq2DyHt4DGOKuEGZiNcqpoK64MHVQcWjz1W_pGAG=w250-h300-no" />').delay(2500).fadeOut(500, function() {
        mendhiImageGalleryTwo();
      });
    }
    function mendhiImageGalleryTwo() {
      $('#mendhiImageSwap').fadeIn(1000).html('<img style="width: 80vw; height=70vh;"rc="https://lh3.googleusercontent.com/goGVHbsfzRsyCtvLioOlI3RgukyCxIb4xDEaFHCXyFVmc7xOiOTD-9P1raZfd7ZJ4zIF5f6i2dTl-kU-pomtwO81M0R-QBz6r3l4CKOECrbbexQLUe0e0o210f8kpmOQ4kUg4MJqISzAmz6cGCs_diUf_0OgwlEzCMbH7_mr4u7P-ycjkUJ0qb-p-7H2d9592iUpn87TWNzW_Bx4VnrVN4CcCk-r_2Go1bgKVqNz1jqoiMCtN8ZSq_jqiRhugn1NsDRjmHKfXlikn8g7SUHXVxkjR6MBr-op9ikAZSwIl6EiYTD9l2xpDrqThdDOUzOQStvuhOXGYCRZPlnlvhKXvcUvBC5ROlj6yFe3wUqbkV8NL2_hW3QswWs_FHspajD4GvGJ0kgLhvkhS9gukCP5mqy4o3tF7l-qAQDTWB1cVNJogS-0LSd_72W5UJe2tnB317jVCkLYY6yZ-1gDgLvxvBJeupFyYeSC94LqkVezv56oX2jblW1hqGQyfO0nWwUkEp614SM7zOsj67ydbaMHu3af9y5B0WXdMlndq3QuApo9qtwo9gkujwBTi5MzbYMglWrzcfWAJ8jAdQULFGAn2PPF1nak5_jrBk8ZfRjFb3BFz6W3sBSQflRUvKT-IHsFBlFre08xcST8PLbCR25aXZ6t=w250-h300-no" />').delay(2500).fadeOut(500, function() {
        mendhiImageGalleryThree();
      });
    }
  
  
    function mendhiImageGalleryThree() {
      $('#mendhiImageSwap').fadeIn(1000).html('<img style="width: 80vw; height=70vh;" src="https://lh3.googleusercontent.com/yau-ZY5v9k55Ed1-zSiDAwIDTM9LaMHYEc1T2TI_yabZXGPWQHtZxDwboiKs6TmN6QxWSYLT8MtBO1ovo6wv9oWK-a6B72_LJ2e36J6iswMQYuDyFr9NYt-mqprkHcRVefsNcv_QxpGteqn6iG68wsOpjQBdRkyjdM95wWqcwY2Z_Hv75biDV-RbniHhsU3rHREw-5RCuOzwlnBxI_toL1YtSnmGU-cQ2j1qV-_RA0Ir2qRh3PGJvilD4bzB6KgZjLuRz5I6_onBkqC1zz5vKb8FIlNOov9ZAlt6ifgwOclMX-1bIMggleklaNrVykIPDarsjy1ZfcjIAgsRRDPOC5OYWGXSjub0EqQEaJbBtiVlDokCfu2gFcuu5V12rv7981Ab3nLLkx9lAz9gHPDY9DSsMD178OrQ6Covm_AQkfdKzrdHtXhEagAf7F53AnIvvFLnAoz2gW-yNZ4zPEbe9eP4uFCNLlCIA7IQOI9BzOQmkE2dxywdsNwurKZ_UHx9r5PvQXlWxl8NVrcCgLDbDeYJ-lHJN-5RhOt7k4XtZU5P7ztVGrIMJ8WlSBi1qGUqfB7EMi4u1tjeob3ZtHr2aF4puQwxZ-0BNc7fUImDeW-ujRSu4mGKw8R6Qq1dKaw50rk94dgiykdXrdMM-UBsQ9qX=w250-h300-no" />').delay(2500).fadeOut(500, function() {
        mendhiImageGalleryOne();
      });
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
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }