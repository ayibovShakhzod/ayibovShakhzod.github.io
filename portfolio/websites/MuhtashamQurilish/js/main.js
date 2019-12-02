
$(document).ready(function(){
    $(".notification").addClass('notification-animation');
    $(".owl-carousel").owlCarousel({
        items:1,
        margin:10,
        loop:true,
        stagePadding:30,
        smartSpeed:450,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav:true
        // responsiveClass:true,
        // responsive:{
        //     0:{
        //         items:1,
        //         nav:true
        //     },
        //     600:{
        //         items:1,
        //         nav:false
        //     },
        //     1000:{
        //         items:1,
        //         nav:true,
        //     }
        // }

    });
    // var vue = new Vue({
    //     el:'#app',
    //     data:{
    //         url:'https://youtube.com'
    //     }
    // });
    // var $windows = $(window);
    // var sticky = $('.navs');
    // $windows.on('scroll', function() {
    //     var scroll = $windows.scrollTop();
    //     if (scroll < 100) {
    //         sticky.removeClass('sticky');
    //     }else{
    //         sticky.addClass('sticky');
    //     }
    // });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navs').addClass('sticky');

        } else {
            $('.navs').removeClass('sticky');
        }

    });
    // $(".owl-prev").attr('id','prev');
    // $(".owl-next").attr('id','next');
    // var prevNext=' <button type="button" class="prev" id="prevb"><img src="img/right-arrow%20(1).svg" alt=""></button>'
    // $('#owl-navs').append(prevNext);
    // $('#prevb').click('#prev');
});