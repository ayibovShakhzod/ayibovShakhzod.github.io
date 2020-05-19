jQuery(document).ready(function($){
    $(".element").each(function(){
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 150, // typing speed
            backDelay: 500 // pause before backspacing
        });
    });
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1000
    });

    let svgArrowSliderRight ="<i class=\"feather-arrow-right\"></i>"
    let svgArrowSliderLeft ="<i class=\"feather-arrow-left\"></i>"
    $('.js-news-slider').owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dots: false,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        navSpeed: 1000,
        navText: [svgArrowSliderLeft, svgArrowSliderRight],
        margin: 30,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            991: {
                items: 2,
                nav: true
            }
        }
    });
    $('.js-meetings-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        dots: false,
        navSpeed: 1000,
        navText: [svgArrowSliderLeft, svgArrowSliderRight],
        margin: 30,
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });
   });