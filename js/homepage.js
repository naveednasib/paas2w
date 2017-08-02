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
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $("header").addClass('bg-color');
        } else {
            $("header").removeClass('bg-color');
        }
    });

});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
});




