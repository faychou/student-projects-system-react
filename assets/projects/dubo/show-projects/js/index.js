// $(function(){
//     $(".allimg").mouseover(function(){
//         $(this).addClass("animated bounceIn");
//         setTimeout(function(){
//             $(".allimg").removeClass("bounceIn")
//         },1000);
//     })
// })

var $scrolltop = 0;
$(window).scroll(function(){
    var $sctop = $(document).scrollTop();

    if($sctop >= $scrolltop){
        $("#nav").slideUp(100);

        $scrolltop = $sctop;
    }else{
        $("#nav").slideDown(100);
        $scrolltop = $sctop;
    }
});
