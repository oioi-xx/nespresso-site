$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
  .fromTo(".two", 1, {x:"-100%"}, {x:"0%"} )
  .fromTo(".three", 1, {y:"-100%"}, {y:"0%"} )
  .fromTo(".four", 1, {x:"100%"}, {x:"0%"} )

  var scene = new ScrollMagic.Scene({
        triggerElement: "#slide",
        triggerHook: "onLeave",
        duration: "500%" //이 값이 클 수록 천천히 덮어씀
  })
  .setPin("#slide")
  .setTween(wipeAnimation)
  .addTo(controller);
    
});