
$(document).ready(function(){
    
    $('#pin1').stop().fadeIn(3000);
    
    var controller = new ScrollMagic.Controller();
    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1600})
    .setPin("#pin1")
    .addTo(controller);
});
