$(document).ready(function(){
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
