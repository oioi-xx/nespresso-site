$(function(){
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
   	
  var controller = new ScrollMagic.Controller({
		globalSceneOptions: {triggerHook: "onEnter"}
	});
	
	new ScrollMagic
		.Scene({triggerElement: "#parallax1", duration: "200%"})
		.setTween("#parallax1 > div", {y: "40%", ease: Linear.easeNone})
		.addTo(controller);
	
	new ScrollMagic
		.Scene({triggerElement: "#parallax2", duration: "175%"})
		.setTween("#parallax2 > div", {y: "30%", ease: Linear.easeNone})
		.addTo(controller);
});
