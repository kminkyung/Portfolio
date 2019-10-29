// Global


/* NAVIGATION */

// Portfolio
$(".portfolio").click(function(){
	$(window).scrollTop(0);
	$(".navi").eq(0).stop().animate({"height":"78px"}, 500);
	$(this).stop().animate({"font-size":"2.25vw"}, 500);
	$(".navi").eq(1).stop().animate({"top":"1000px"}, 500);
	$(".navi").eq(2).stop().animate({"top":"1300px"}, 500);
	$(this).parent().children(".left").animate({"left":0}, 500);
	$(this).parent().children(".right").animate({"right":0}, 500);
	$(".portfolio-page").css("display","block");
	$(".about-page").css("display","none");
	$(".work-page").css("display","none");
	$("footer").css("display","block");
});
// Portfolio - Menu
$(".navi-pf").children(".right").click(function(){
	$(".portfolio").stop().animate({"font-size":"17vw"}, 500);
	$(".navi").eq(0).stop().animate({"height":"315px"}, 500);
	$(".navi").eq(1).stop().animate({"top":"-2px"}, 500);
	$(".navi").eq(2).stop().animate({"top":"-4px"}, 500);
	$(this).parent().children(".left").animate({"left":"-100%"}, 500);
	$(this).parent().children(".right").animate({"right":"-100%"}, 500);
});

// About
$(".about").click(function(){
	$(".navi").eq(0).stop().animate({"top":"-315px"}, 500);
	$(".navi").eq(1).stop().animate({"top":"-317px", "height":"78px"}, 500);
	$(".navi").eq(2).stop().animate({"top":"1000px"}, 500);
	$(".about").stop().animate({"font-size":"2.25vw"}, 500, function(){
		$(".about-wrap .about-cont").stop().animate({"opacity":"1", "top":"0"}, 500);
	});
	$(this).parent().children(".left").animate({"left":0}, 500);
	$(this).parent().children(".right").animate({"right":0}, 500);
	$(".about-page").css({"display":"block", "z-index":"999"});
	$(".portfolio-page").css("display","none");
	$(".work-page").css("display","none");
	$("footer").css("display","none");
});

// About - Menu
$(".navi-ab").children(".right").click(function(){
	$(".navi").eq(0).stop().animate({"top": 0}, 500);
	$(".navi").eq(1).stop().animate({"top": "-2px", "height":"315px"}, 500);
	$(".navi").eq(2).stop().animate({"top":"-4px"}, 500);
	$(".about").stop().animate({"font-size":"17vw"}, 500);
	$(this).parent().children(".left").animate({"left":"-100%"}, 500);
	$(this).parent().children(".right").animate({"right":"-100%"}, 500);
});

// Work
$(".work").click(function(){
	$(".navi").eq(0).stop().animate({"top":"-630px"}, 500);
	$(".navi").eq(1).stop().animate({"top":"-630px"}, 500);
	$(".navi").eq(2).stop().animate({"top": "-632px", "height":"78px"}, 500);
	$(".work").stop().animate({"font-size":"2.25vw"}, 500);
	$(this).parent().children(".left").animate({"left":0}, 500);
	$(this).parent().children(".right").animate({"right":0}, 500);
	$(".about-page").css("display","none");
	$(".portfolio-page").css("display","none");
	$(".work-page").css("display","block");
	$("footer").css("display","block");
});
// Work - Menu
$(".navi-wk").children(".right").click(function(){
	$(".navi").eq(0).stop().animate({"top": 0}, 500);
	$(".navi").eq(1).stop().animate({"top": "-2px"}, 500);
	$(".navi").eq(2).stop().animate({"top":"-4px", "height":"315px"}, 500);
	$(".work").stop().animate({"font-size":"17vw"}, 500);
	$(this).parent().children(".left").animate({"left":"-100%"}, 500);
	$(this).parent().children(".right").animate({"right":"-100%"}, 500);
});


/* SCROLL EVENT */
$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop < 900) {
		$(".portfolio-main").css({"background-color":"#ffffff"});
		$(".portfolio-main").eq(0).find(".caption").stop().animate({"opacity":1, "bottom":"100px"}, 300);
		$(".portfolio-main").eq(1).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);
	}
	else if(scTop < 1800) {
		$(".portfolio-main").css({"background-color":"#e0e1e1"});
		$(".portfolio-main").eq(1).find(".caption").stop().animate({"opacity":1, "bottom":"100px"}, 300);
		$(".portfolio-main").eq(0).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);		
		$(".portfolio-main").eq(2).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);
	}
	else if(scTop < 2700) {
		$(".portfolio-main").css({"background-color":"#ffb597"});
		$(".portfolio-main").eq(2).find(".caption").stop().animate({"opacity":1, "bottom":"100px"}, 300);
				$(".portfolio-main").eq(0).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);		
		$(".portfolio-main").eq(1).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);		
	}
	else if(scTop < 3600) {
		 $(".portfolio-main").css({"background-color":"#cbffcb"});
		 $(".portfolio-main").eq(3).find(".caption").stop().animate({"opacity":1, "bottom":"100px"}, 500);
		 $(".portfolio-main").eq(2).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 500);	
	}
	else if(scTop < 4500) {
		 $(".portfolio-main").css({"background-color":"#ffb6c1"});
		 $(".portfolio-main").eq(4).find(".caption").stop().animate({"opacity":1, "bottom":"100px"}, 300);
		 $(".portfolio-main").eq(3).find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);	
		//  console.log(scTop);
		}
	else if(scTop < 5400) {
		 $(".portfolio-main").css({"background-color":"#dbdbf6"});
		 $(".portfolio-main").find(".caption").stop().animate({"opacity":0, "bottom":"-100px"}, 300);	
	}

/* 	switch (scTop) {
		case 700:
			$(".portfolio-main").css({"background-color":"dodgerblue"});
			break;
		case 1400:
		 $(".portfolio-main").css({"background-color":"lightcoral"});
		 break;
		case 2100:
		 $(".portfolio-main").css({"background-color":"chartreuse"});
		 break;
		case 2800:
		 $(".portfolio-main").css({"background-color":"blue"});
		 break;
	} */
});

