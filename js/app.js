$(function(){


   var slideWidth = $('.slide').outerWidth();//画像の表示する幅
   var slideNum = $('.slide').length;//スライドの個数
   var slideSetWidth = slideWidth * slideNum;
   $('.slideSet').css('width',slideSetWidth);
   var slideCurrent = 0;//現在地

   var sliding = function(){
       $('.slideSet').animate({
           left:slideCurrent * - slideWidth
       });
   }
   $('.js-slide-next').on('click',function(){
      if(slideCurrent < slideNum){
          sliding();
          slideCurrent++;
      }else if(slideCurrent = slideNum-1){
          // $('.slideSet').css('left',0);
          sliding();
          slideCurrent = 0;
      }
   });
    $('.js-slide-prev').on('click',function(){
        if(slideCurrent > 0){
            slideCurrent--;
            sliding();
        }else if(slideCurrent <= 0){
            slideCurrent = slideNum-1;
            sliding();
        }
    });

    //ハンバーガー
    $('.js-toggle-menu').on('click',function(){
        $(this).toggleClass('active');
        $('.js-toggle-nav-menu').toggleClass('active');
    });
    $('.js-toggle-nav-menu a').on('click',function(){
        $('.js-toggle-menu').toggleClass('active');
        $('.js-toggle-nav-menu').toggleClass('active');
    });

    //モーダル
    var winScrollTop;
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            winScrollTop = $(window).scrollTop();
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    })

});

