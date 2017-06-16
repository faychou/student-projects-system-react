$(document).ready(function() {
	banner();
	bannerFoot();
	development();
	ff(); 
	
	//	调用函数结束
	$(document).scroll(function(){
		var height = $(window).scrollTop();
			if (height>150){
			fl();
			course();
		}	
	});	
	
	//banner的动画
	function banner(){
		$(".banner-text,.banner-case").animate({"top":0},function(){
		$(".banner-text").addClass("animated rotateIn");
		$(".banner-case").addClass("animated shake");}
		)};
	//	banner-foot的动画
	function bannerFoot(){
		$(".banner-foot ul li:nth-child(even)").delay(1000).animate({"left":0},"slow");
		$(".banner-foot ul li:nth-child(odd)").delay(1500).animate({"left":0},"slow");	
	}
	//develop动画
	function development(){
		$(".development").animate({"opacity":"1"},4000,function(){
		});
	}
	//小图标动画
	function fl(){
		$(".fl1,.fl2,.fl3,.fl4").animate({"top":"0","opacity":"1"},function(){
		$(".fl5,.fl6,.fl7,.fl8").animate({"top":"0","opacity":"1"});});
	}
	//小图标动画2
	function ff(){
		$(".fl5,.fl6,.fl7,.fl8").css({"opacity":"1"});
		$(".fl5,.fl6,.fl7,.fl8").addClass("animated bounceInRight");
	}
	//课程领头人字动画
	function course(){
		$(".course").addClass("animated zoomInUp");
	}
	
	$(window).scroll(function() { 
		var bdtop = $(window).scrollTop();
		console.log(bdtop); 
		
		//现状及前景
		if(bdtop > 280) {
			$('.develop').css("opacity","1").addClass('animated zoomIn');
			$('.subneed').css("opacity","1").addClass('animated fadeInUp');
		}
		
//		金字塔和图饼
		if(bdtop > 650) {
			var golds = setTimeout(function() {
				$('.gold-chart').css("opacity","1").addClass('animated lightSpeedIn')
			},600);
			$('.pancakes').css("opacity","1").addClass('animated zoomIn');
			$('.money').css("opacity","1").addClass('animated bounceIn');
			
		}
		if(bdtop > 1000) {
			$('.course-leader').css("opacity","1").addClass('animated rollIn');
		}
//		开发经验和人物
		if(bdtop > 1300) {
			$('.bgzhouf').css("opacity","1").addClass('animated bounceInRight');
			$('.leader').css("opacity","1").addClass('animated bounceInRight');
			var experience = setTimeout(function() {
				$('.experience').css("opacity","1").addClass('animated bounceInLeft')
			},600);
			$('.zfname').animate({width:"84px"},800);
		}
		
//		课程优势
		if(bdtop > 1800) {
			$('.adv-course-header').css("opacity","1").addClass('animated tada');
			$('.adv1').css("opacity","1").addClass('animated bounceInRight');
			$('.adv2').css("opacity","1").addClass('animated bounceInDown');
			$('.adv3').css("opacity","1").addClass('animated bounceInUp');
			$('.adv4').css("opacity","1").addClass('animated bounceInLeft');
		}
//		课程大纲
		if(bdtop > 2200) {
			$('.lesson-title').css("opacity","1").addClass('animated flipInY');
		};
		
		if(bdtop > 2300) {
			var lessonmain = setTimeout(function() {
				$('.lesson-main').css("opacity","1").addClass('animated bounceInDown');
			},500);
		};
		
//		课程表
		if(bdtop > 2450) {
			var lp1 = setTimeout(function() {
				$('.l-p1').css("opacity","1").addClass('animated bounceInDown');
			},200);
			var lp2 = setTimeout(function() {
				$('.l-p2').css("opacity","1").addClass('animated bounceInDown');
			},400);
			var lp3 = setTimeout(function() {
				$('.l-p3').css("opacity","1").addClass('animated bounceInDown');
			},600);
			var lp4 = setTimeout(function() {
				$('.l-p4').css("opacity","1").addClass('animated bounceInDown');
			},800);
			var lp5 = setTimeout(function() {
				$('.l-p5').css("opacity","1").addClass('animated bounceInDown');
			},1000);
			var lp6 = setTimeout(function() {
				$('.l-p6').css("opacity","1").addClass('animated bounceInDown');
			},1200);
			var lp7 = setTimeout(function() {
				$('.l-p7').css("opacity","1").addClass('animated bounceInDown');
			},1400);
		};
		
//		项目展示
		if(bdtop > 2750) {
			$('.project_title').css("opacity","1").addClass('animated zoomIn');
		};
		
//		第一行项目
		if(bdtop > 2850) {
			var pro1 = setTimeout(function() {
				$('.project_one1').css("opacity","1").addClass('animated bounceInLeft');
			},200);
			var pro2 = setTimeout(function() {
				$('.project_one2').css("opacity","1").addClass('animated bounceInLeft');
			},400);
			var pro3 = setTimeout(function() {
				$('.project_one3').css("opacity","1").addClass('animated bounceInLeft');
			},600);
			var pro4 = setTimeout(function() {
				$('.project_one4').css("opacity","1").addClass('animated bounceInLeft');
			},800);
		}
//		第二行项目
		if(bdtop > 2950) {
			var pro5 = setTimeout(function() {
				$('.project_one5').css("opacity","1").addClass('animated bounceInLeft');
			},1000);
			var pro6 = setTimeout(function() {
				$('.project_one6').css("opacity","1").addClass('animated bounceInLeft');
			},1200);
			var pro7 = setTimeout(function() {
				$('.project_one7').css("opacity","1").addClass('animated bounceInLeft');
			},1400);
			var pro8 = setTimeout(function() {
				$('.project_one8').css("opacity","1").addClass('animated bounceInLeft');
			},1600);
		};
		
//		免费试学
		if(bdtop > 3600) {
			$('.learn-header').css("opacity","1").addClass('animated swing');
			$('.learn-subhead p').css("opacity","1").addClass('animated lightSpeedIn');
		}
		
//		了解Web
		if(bdtop > 3800) {
			$('.web-inner h1').css("opacity","1").addClass('animated bounceIn');
		}
		
//		关于Web的问题
		if(bdtop > 4000) {
			var que1 = setTimeout(function() {
				$('.que1').css("opacity","1").addClass('animated rollIn');
			},300);
			var que2 = setTimeout(function() {
				$('.que2').css("opacity","1").addClass('animated rollIn');
			},600);
			var que3= setTimeout(function() {
				$('.que3').css("opacity","1").addClass('animated rollIn');
			},900);
			var que4 = setTimeout(function() {
				$('.que4').css("opacity","1").addClass('animated rollIn');
			},1200);
			var que5 = setTimeout(function() {
				$('.que5').css("opacity","1").addClass('animated rollIn');
			},1500);
			var que6 = setTimeout(function() {
				$('.que6').css("opacity","1").addClass('animated rollIn');
			},1800);
		};
	}); 
					
});

