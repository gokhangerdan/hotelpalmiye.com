function fadeOutTR(){
    TweenMax.to(".myBtn", 1,{
      y: -100,
      opacity: 0
    })
    TweenMax.to(".screen", 2,{
      y: -400,
      opacity: 0,
      ease: Power2.easeInOut,
      delay:1
    })
    TweenMax.to(".overlay",2, {
      delay: 1.8,
      top: "-110%",
      ease: Expo.easeInOut
    })
    TweenMax.to(".overlay_2", 2, {
      delay: 2,
      top: "-110%",
      ease: Expo.easeInOut
    })
    TweenMax.from(".content", 2, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    
    TweenMax.to(".content", 2,{
      y: -190,
      opacity: 1,
      delay:2,
      ease: Power2.easeInOut
    })
  }
  
  function fadeOutEN(){
    $("#title1").html("English");
    $("#text1").html("English content.");
    TweenMax.to(".myBtn", 1,{
      y: -100,
      opacity: 0
    })
    TweenMax.to(".screen", 2,{
      y: -400,
      opacity: 0,
      ease: Power2.easeInOut,
      delay:1
    })
    TweenMax.to(".overlay",2, {
      delay: 1.8,
      top: "-110%",
      ease: Expo.easeInOut
    })
    TweenMax.to(".overlay_2", 2, {
      delay: 2,
      top: "-110%",
      ease: Expo.easeInOut
    })
    TweenMax.from(".content", 2, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    
    TweenMax.to(".content", 2,{
      y: -190,
      opacity: 1,
      delay:2,
      ease: Power2.easeInOut
    })
  }