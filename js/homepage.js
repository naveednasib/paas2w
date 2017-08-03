

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


particlesJS.load('particles-js2', 'js/particles.json', function () {

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









// muzamil

    //  if(positiondown < 1  &&    (positivePositon < 612)  ){
    
    //     // $(".scroll-container").addClass("fixer");
        
    //        count += 1
    //       tranformVal = (count * 120);
    //       $(".atom-feature ").css('height', tranformVal);
    //       // $(".scroll-container .circle-wrapper .circle-radius").css({"transform":"scale("+tranformVal+")"});
    //          $(".scroll-container .circle-wrapper .circle-radius").css({"width":tranformVal,"height":tranformVal,
    //          "left":((-tranformVal)/2),"top":((-tranformVal)/2)});

        

    //   }
           
      
     
  
    //   else{
    //     $(".scroll-container").removeClass("fixer")
    //   }



    
// $('.scroll-container').on('scroll' , function(){
//   console.log('abc');
// });



  // $(".scroll-container").on("mouseenter", function() {
  // var lastScrollTop = 0;
  // var count =0,tranformVal;

  
  //   $(window).scroll(function () {
  //       var windowTop = $(window).scrollTop();  
    


  // var st = $(this).scrollTop();
  //  if (st > lastScrollTop){
     
  //     count += 1
  //     tranformVal = (count /100);
  //        $(".scroll-container .circle-wrapper .circle-radius ").addClass('add-circle');
  //         $(".scroll-container .circle-wrapper .circle-radius").css("transform","scale("+tranformVal+")");
  //  } else {
  //   count -=1;
  //  }
  //  lastScrollTop = st;


    
  // });





//   }).on("mouseleave", function() {

    
//     return false;
//    });





  // if(positiondown < 1  &&    (positivePositon < 612)  ){
    
  //       // $(".scroll-container").addClass("fixer");
        
  //          count += 1
  //         tranformVal = (count * 120);
  //         $(".atom-feature ").css('height', tranformVal);
  //         // $(".scroll-container .circle-wrapper .circle-radius").css({"transform":"scale("+tranformVal+")"});
  //            $(".scroll-container .circle-wrapper .circle-radius").css({"width":tranformVal,"height":tranformVal,
  //            "left":((-tranformVal)/2),"top":((-tranformVal)/2)});

        

  //     }
           
      
     
  
  //     else{
  //       $(".scroll-container").removeClass("fixer")
  //     }





// translate

      //  $("nav").css({ "transform":"translateY("+((scrollTop)) +"px)"});

    //console.log(scrollTop);
   // console.log(scroll_circle - $(window).scrollTop() - headerHeight);
    // var positiondown = (scroll_circle - scrollTop - headerHeight);
 
    //   if( scrollTop >= (1000)){
    //     $(".wrapper-holder").css({"height":+wraper_height , "transform":"translate(0px,"+ (-(1000)) +"px)"});
  
    //   }
    //   else{
    //     $(".wrapper-holder").css({"height":+wraper_height , "transform":"translate(0px,"+ (-(scrollTop)) +"px)"});
     
    //   }