var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

$(window).resize(function(e){
  if($(window).width() < 1600) {
    console.log($(window).width());
    $("#slide1").each(function() {
      $(this).attr("src", "images/slide1_mobile.jpg");
      $("#slide2").attr("src", "images/slide2_mobile.jpg");
      $("#slide3").attr("src", "images/slide3_mobile.jpg");
    });
  } else if ($(window).width() >= 1600) {
    $("#slide1").each(function() {
      $(this).attr("src", "images/slide1.jpg");
      $("#slide2").attr("src", "images/slide2.jpg");
      $("#slide3").attr("src", "images/slide3.jpg");
    });
  }
})