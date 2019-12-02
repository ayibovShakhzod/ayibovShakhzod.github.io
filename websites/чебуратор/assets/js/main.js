$(document).ready(function ($) {
    'use strict';


    /* ---------------------------------------------
         page  Prealoader
     --------------------------------------------- */
    $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });

    
    
    
     /* ---------------------------------------------
         Sticky header
     --------------------------------------------- */
    $(window).on('scroll', function () {
        var scroll_top=$(window).scrollTop();
        
        if (scroll_top > 40){
            $('.navbar').addClass('sticky');
          
        }
        else{
          $('.navbar').removeClass('sticky');  
        }
        
    });
    
      /* ---------------------------------------------
         Pogress bar 
     --------------------------------------------- */
    
    var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});
    
 


    /* ---------------------------------------------
Portfolio
 --------------------------------------------- */
    $(document).ready(function () {

        $(".filter-btn").on('click', function (event) {

            event.preventDefault();
            var value = $(this).attr('data-filter');


            if (value == "all") {

                $('.filter').fadeIn('2000');
            } else {

                $(".filter").not('.' + value).fadeOut('3000');
                $('.filter').filter('.' + value).fadeIn('3000');

            }
             $(".filter-btn").removeClass("active"); 
               $(this).addClass("active");
        });


      
     

    });


    /* ---------------------------------------------
     owl caroussel
     --------------------------------------------- */


  

    $('.testimonial-caroussel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        margin:12,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1

            },
            1200: {
                items: 2
            }
        }
    });



    $('.client-caroussel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        margin:15,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 5

            },
            1200: {
                items: 5
            }
        }
    });
    
    
    
     $('.portfolio-caroussel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false, 
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1

            },
            1200: {
                items: 1
            }
        }
    });
 
 

    /*--------------------
 MAGNIFIC POPUP IMAGE  JS
 ----------------------*/
$('.modal-image').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function (openerElement) {

            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});

 /*--------------------
VenoBox
 ----------------------*/
    
    	$('.modal-venobox').venobox({
      numeratio: true,            // default: false
      infinigall: true,
      titleattr: 'data-title',    // default: 'title'// default: false
			});	
    
    /*----------------------------------------------------*/
    /*  VIDEO POP PUP
    /*----------------------------------------------------*/

    $('.video-modal').magnificPopup({
        type: 'iframe',

        iframe: {
            patterns: {
                youtube: {

                    index: 'youtube.com',
                    src: '../../../../https@www.youtube.com/embed/7e90gBu4pas'

                }
            }
        }
    });
    /* ---------------------------------------------
     Back top page scroll up
     --------------------------------------------- */


    $.scrollUp({
        scrollText: '<i class="arrow_carrot-2up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /* ---------------------------------------------
     WoW plugin
     --------------------------------------------- */

    new WOW().init({
        mobile: true,
    });

    /* ---------------------------------------------
     Smooth scroll
     --------------------------------------------- */

    $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }
    });



    /*----------------------------------------
     Newsletter Subscribe
     --------------------------------------*/

    $(".subscribe-mail").ajaxChimp({
        callback: mailchimpCallRep,
        url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
    });

    function mailchimpCallRep(resp) {
        if (resp.result === "success") {
            $(".sucess-message").html(resp.msg).fadeIn(1000);
            $(".error-message").fadeOut(500);
        } else if (resp.result === "error") {
            $(".error-message").html(resp.msg).fadeIn(1000);
        }
    }

});
    popup = {
  init: function(){
    $('figure').click(function(){
      popup.open($(this));
    });
    
    $(document).on('click', '.popup img', function(){
      return false;
    }).on('click', '.popup', function(){
      popup.close();
    })
  },
  open: function($figure) {
    $('.gallery').addClass('pop');
    $popup = $('<div class="popup" />').appendTo($('body'));
    $fig = $figure.clone().appendTo($('.popup'));
    $bg = $('<div class="bg" />').appendTo($('.popup'));
    $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $('img', $fig).attr('src');
    $shadow.css({backgroundImage: 'url(' + src + ')'});
    $bg.css({backgroundImage: 'url(' + src + ')'});
    setTimeout(function(){
      $('.popup').addClass('pop');
    }, 10);
  },
  close: function(){
    $('.gallery, .popup').removeClass('pop');
    setTimeout(function(){
      $('.popup').remove()
    }, 100);
  }
}

popup.init()

