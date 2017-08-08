$(document).ready(function () {


    var options = {
        strings: ["Hardware &amp; Software Manufacturers..", "Businesses.", "Organizations (For or Not For Profit)..", "Govermental Agencies.."],
        typeSpeed: 70,
        loop: true
    }
    var typed = new Typed(".element", options);


    $(window).scroll(function (e) {
        particle_parrallax();


    });


});


particlesJS.load('particles-js', 'js/particles.json', function () {

});


particlesJS.load('particles-js2', 'js/particles2.json', function () {

});


var addingRatio;
var CurrentScroll = 0;

function particle_parrallax() {

    var particleSvg = $(".paralla-abs-svg");
    particleSvg = parseInt(particleSvg.css("top"));
    var windowTop = $(window).scrollTop();
    var hardwareTop = $(".hardware-section").offset().top;
    addingRatio = ((windowTop + windowTop) / windowTop);
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


}








