

$(document).ready(function () {

  var options = {
    strings: ["Hardware &amp; Software Manufacturers..", "Businesses.", "Organizations (For or Not For Profit)..", "Govermental Agencies.."],
    typeSpeed: 70,
    loop: true
  }

  var typed = new Typed(".element", options);


  var scroll_circle = $(".scroll-container").offset().top;

  $(window).scroll(function () {
    particle_parrallax();


    var windowTop = $(window).scrollTop();

    if ((scroll_circle - 300)) { }


  });





  $(".scroll-container").on("mouseenter", function() {
  var lastScrollTop = 0;
  var count =0;

  
    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();  
    


  var st = $(this).scrollTop();
   if (st > lastScrollTop){
      console.log(count += 1);
         $(".scroll-container ").addClass('add-circle');
          $(".scroll-container .circle-wrapper .circle-radius").css("transform","scale("+count+")");
   } else {
 console.log(count -=1);
   }
   lastScrollTop = st;


    
  });





  }).on("mouseleave", function() {

    
    return false;
   });




});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
  // console.log('callback - particles.js config loaded');
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



