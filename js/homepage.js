$(document).ready(function () {

    var options = {
        strings: ["Hardware &amp; Software Manufacturers..", "Businesses.", "Organizations (For or Not For Profit)..", "Govermental Agencies.."],
        typeSpeed: 70,
        loop: true
    }

    var typed = new Typed(".element", options);


    var addingRatio;
    var CurrentScroll = 0;
    $(window).scroll(function () {
        var particleSvg = $(".paralla-abs-svg");
        particleSvg = parseInt(particleSvg.css("top"));
        var windowTop = $(window).scrollTop();
        var hardwareTop = $(".hardware-section").offset().top;


        // console.log( particleSvg);

        addingRatio = ( (windowTop + windowTop ) / windowTop);

        // console.log( particleSvg);


        var NextScroll = $(this).scrollTop();

        if (NextScroll > CurrentScroll) {
            //write the codes related to down-ward scrolling here
            particleSvg += addingRatio;
        }
        else {
            //write the codes related to upward-scrolling here
            particleSvg -= addingRatio;
        }
        $(".paralla-abs-svg").css("top", particleSvg);
        CurrentScroll = NextScroll;  //Updates current scroll position


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

});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
});




