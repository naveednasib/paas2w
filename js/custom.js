$(document).ready(function () {

    /*setting box dimensions equal to image dimensions */
    var img = $(".slider-partial-container .img-container img");
    $(".slider-partial-container .img-container").css({height: img.height()});

    /*dropdown menu active */
    $("ul.dropdown-menu.atom-menu li.menu-item").hover(function () {
        $("ul.dropdown-menu.atom-menu li.menu-item").removeClass("active");
        $(this).addClass("active");
    });

    /* Header Background Color On scroll*/
    if ($(document).scrollTop() > 20) {

        $("header").addClass('bg-color');
    } else {
        $("header").removeClass('bg-color');
    }
    $(window).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $("header").addClass('bg-color');
        } else {
            $("header").removeClass('bg-color');
        }
        /* atom-for circle scattering */
        var $windowTop = $(document).scrollTop();
        var $elementTop = $(".atom-for").offset().top;
        if ($windowTop >= $elementTop) {
            $(".scattered-circles").addClass("animated bounceIn");
            setTimeout(function () {
                $(".circle1").addClass("active");
            }, 1300);

        }
    });
    /*circle-text active */
    $(".circle-wrapper").hover(function () {
        $(".circle1").removeClass('active');

    });
    /*footer list active */
    $(".footer-list li").click(function () {
        $(".footer-list li").removeClass("active");
        $(this).addClass("active");
    });
    /*Scroll-contianer tile active */
    $(".scroll-container .tile-container .tile").hover(function () {
        /*Scroll-contianer tile active */
        $(".scroll-container .tile-container .tile").removeClass("active");
        $(this).addClass("active");
    });

    /*slider-partial-container os-type active */
    $(".slider-partial-container .os-types li").hover(function () {
        $(".slider-partial-container .os-types li").removeClass("active");
        $(this).addClass("active");

    });

    /*Changing image on click*/
    $(".slider-partial-container .os-types li").click(function () {
        $('.slider-partial-container .img-container .img-btn-wrapper').siblings().removeClass('active');
        $('.slider-partial-container .img-container .img-btn-wrapper').eq($(this).index()).addClass('active');
    });
});
