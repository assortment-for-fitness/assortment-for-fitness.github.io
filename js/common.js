$(function () {
    $(".header .hamburger").click(function () {
        $(".header .hamburger").toggleClass('is-active');
        $(".header .nav").slideToggle("fast");

    });


    // scroll to the content start
    $("#nav ").on("click", "a", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        var window_width = $(window).width();
        if (window_width >= 992 - 17) {
            $('body,html').animate({scrollTop: top - 69}, 1500);

        }

        if (window_width < 992 - 17) {
            $(".header .nav").slideUp("fast");
            $('body,html').animate({scrollTop: top - 69}, 1500);

            if( $(".header .hamburger").hasClass('is-active')){
                $(".header .hamburger").removeClass('is-active');
            }

        }

    });

    $(window).resize(function () {
        var window_width = $(window).width();

        if (window_width > 1200 - 17) {
            $(".header .nav").css({"display":"block"});
        }
        else{
            $(".header .nav").css({"display":""});
            if( $(".header .hamburger").hasClass('is-active')){
                $(".header .hamburger").removeClass('is-active');
            }
        }

    });




// scroll to the content end

    // owl-carousel start
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false
    });
    // owl-carousel end



    /* fade in down animation start*/
    var $animation_elements_percent = $('.animation-element-percent');
    var $window = $(window);

    var check_play = true;

    function check_if_in_view_percent() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements_percent, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position  >= window_top_position) &&
                (element_top_position  <= window_bottom_position)) {
                $element.addClass('on-animation');

                if (check_play) {
                    loadSkills1();
                    loadSkills2();
                    loadSkills3();
                    loadSkills4();
                }
                check_play = false;
            }
            // if we need to toggle it
            // else {
            //     $element.removeClass('on-animation');
            // }
        });
    }

    $window.on('scroll resize', check_if_in_view_percent);
    $window.trigger('scroll');
    /* fade in down animation end */


    /* fade in down animation start*/
    var $animation_elements = $('.hr-left-hexagon, .hr-right-hexagon');
    var $window = $(window);


    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position  >= window_top_position) &&
                (element_top_position  <= window_bottom_position)) {
                $element.addClass('on-animation');
                $element.css({"opacity": "1"});
            }
            else {


            }
            // if we need to toggle it
            // else {
            //     $element.removeClass('on-animation');
            // }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    /* fade in down animation end */



    $(".buy-btn-click ").on("click", function (event) {
        //
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - 69}, 1500);




    });
});

//
// $(".sertificate-Slider").slick({
//     dots: false,
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         }
//
//     ]
// });

