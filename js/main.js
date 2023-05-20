$(function($){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $(".scroll-to-top").fadeIn();
        }else{
            $(".scroll-to-top").fadeOut();
            
        }
    });
});