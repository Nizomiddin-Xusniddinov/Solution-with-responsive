;(function () {

    'use strict';
    
    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }
    var $link = $('.nav-link')
    $link.click(function(e){
        e.preventDefault()
        $link.removeClass('.active')
        var id = $(this).addClass(".active").attr("href")
        var target = $(id).offset().top - 60
        $('html , body').animate({
            scrollTop: target
        }, 1000)
    })
    window.addEventListener('scroll' ,function() {
        var scrolls = $(this).scrollTop() // 700
        $link.each(function() {
            var selector = $(this).attr('href')
            var target = $(selector).offset().top - 100 /// 600
            if (scrolls >= target) {
                $link.removeClass('active')
                $(this).addClass('active')
            }
        })
    


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
