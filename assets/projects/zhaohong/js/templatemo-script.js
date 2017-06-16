

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  $(".rotate").textrotator();

  new WOW().init();


});

//当点击导航栏的时候
$('.navbar-right li').click(function(){
	$('.navbar-toggle').click();
});
