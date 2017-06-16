//生成随机数的函数
function randomNumber(x, y) {
	return Math.floor(Math.random() * (y - x + 1) + x);
}

//生成随机颜色的函数
function randomColor() {
	var red = randomNumber(0, 255);
	var green = randomNumber(0, 255);
	var blue = randomNumber(0, 255);
	return "rgb(" + red + "," + green + "," + blue + ")";
}

//字体颜色的变化
function change_text(cls){
	
		$('.'+cls).css({
			'backgroundColor':randomColor()
		});
	
}
$('.btn1').click(function(){
change_text('plan_one');	
});

$('.btn2').click(function(){
change_text('plan_two');	
});

$('.btn3').click(function(){
change_text('plan_three');	
});

$('.btn4').click(function(){
change_text('plan_four');	
});


//检测滚动高度来达到相应的动画
function listen_scrolltop(){
	var scrolltop=document.body.scrolltop || document.documentElement.scrollTop || window.pageYOffset;
	
	if(scrolltop>200 && scrolltop<300){
		$('.about_me_left').addClass('wow');
		$('.about_me_left').addClass('fadeInLeft');
	}
	else{
		$('.about_me_left').removeClass('wow fadeInLeft');
	}
}

$(window).scroll(function(){
	listen_scrolltop();
});

//当屏幕尺寸发生变化时，判断导航栏的尺寸是否满足移动设备的宽度，满足则改变移动设备导航栏的颜色
$(window).resize(function(){
	var width=$(window).width();
	if(width<748){
		$('.navbar-collapse').css("backgroundColor","rgb(101,150,50)");
		
		$('.navbar-right').css("backgroundColor","rgb(101,150,50)");
	}
	else{
		$('.navbar-collapse').css("backgroundColor","white");
	}
});
