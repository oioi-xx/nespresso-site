$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	console.log(scroll);

    
	if (scroll >= 1000) {
		//console.log('a');
		$(".first-img").stop().addClass("zoom"); 
	} 
    else{
        $(".first-img").removeClass("zoom");  
    };
      
     AOS.init();
    
    if (scroll >= 1500) {
		//console.log('a');
		$("#section2").css({"background":"#fff"});
        $(".sec2_con1 h1").css({"color":"#fff"});
        $(".sec2_con1 h2").css({"color":"#fff"});
        $(".sec2_con1 p").css({"color":"#fff"});
	}
    else{
       $("#section2").css({"background":"#050505"}); 
    };
    
    if (scroll >= 1600) {
		//console.log('a');
        $(".sec2_con1 h1").css({"color":"#111"});
        $(".sec2_con1 h2").css({"color":"#111"});
        $(".sec2_con1 p").css({"color":"#111"});
        $(".sec2_con2 h1").css({"color":"#111"});
        $(".sec2_con2 h2").css({"color":"#111"});
        $(".sec2_con2 p").css({"color":"#111"});
	};
    
    if (scroll >= 2000) {
		//console.log('a');
        $("#history h1").css({"color":"#111"});
	};
     if (scroll >= 4000) {
		//console.log('a');
        $(".ct1").css({"background":"#000"});
	};
    
    if (scroll >= 12400) {
		//console.log('a');
        $(".capsule_left1").css({"left":"18%"});
        $(".capsule_left2").css({"left":"8%"});
        $(".capsule_right1").css({"left":"-8%"});
        $(".capsule_right2").css({"left":"-18%"});
	}else{
        $(".capsule_left1").css({"left":"24%"});
        $(".capsule_left2").css({"left":"12%"});
        $(".capsule_right1").css({"left":"-12%"});
        $(".capsule_right2").css({"left":"-24%"});
    }
    
});





