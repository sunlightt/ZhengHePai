

change_view();
function change_view(){

    var screen_height=Number($(window).height());

    console.log(screen_height);

    $('.swiper-wrapper .slide_down').each(function(i,item){

    	$(this).on('mouseover',function(){

              $(this).removeClass('slide_down_animation');

    	});

    	$(this).on('mouseleave',function(){

              $(this).addClass('slide_down_animation');

    	});

    	$(this).on('click',function(){

              $('.swiper-wrapper').css({'transform':'translate3d(0px, '+-(screen_height*(i+1))+'px, 0px)'});

              $('.swiper-pagination .swiper-pagination-bullet').eq(i+1).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
    	});

    })
}


window.onresize=function(){

	change_view();
}