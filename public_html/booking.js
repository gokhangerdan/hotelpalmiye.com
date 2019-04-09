$(document).ready(function() {

  var guestAmount = $('#guestNo');

  $('#cnt-up').click(function() {
    guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
  });
  $('#cnt-down').click(function() {
    guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
  });

  $('.btn').click(function() {

    console.log("Button clicked!");

  });

  $('.diamond, .booking-form').mouseover(function(event){
    if($(window).width() > 1100) {
    $('.diamond').css("opacity", "0.9");
    $('.booking-form').css("opacity", "1");}
  }).mouseout(function(event){
    if($(window).width() > 1100) {
    $('.diamond').css("opacity", "0.3");
    $('.booking-form').css("opacity", "0");}
  });
});