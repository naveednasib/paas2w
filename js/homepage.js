

$(document).ready(function () {

  var options = {
    strings: ["Hardware &amp; Software Manufacturers..", "Businesses.", "Organizations (For or Not For Profit)..", "Govermental Agencies.."],
    typeSpeed: 70,
    loop: true
  }

  var typed = new Typed(".element", options);


    var scroll_circle = $(".scroll-container").offset().top,
    headerHeight = $('header').height();
    var scroll_circle_height = $(".scroll-container").height();
    var  scroll_circle_bottom = $(".scroll-container").offset().top;
    scroll_circle_bottom = scroll_circle_height + scroll_circle ;

    circleScrolled = 0;
    lastScroll = 0;
    var count =0;
    var wraper_height =  $(".wrapper-holder").height();
    var tranformVal;



  $(window).scroll(function (e) {
    particle_parrallax();
    scrollTop = $(window).scrollTop();


    
    
       var positiondown = (scroll_circle - scrollTop - headerHeight);      
       var positivePositon = (-(positiondown)   );
       
      if(positiondown < 1   &&    (positivePositon < scroll_circle_height)  ){          
          $(".circle-radius").addClass("add-circle");
            $(".atom-feature").css("margin-bottom",positivePositon);
            count += 1;           
           var tranformVal = (count );
           tranformVal += (tranformVal / (tranformVal*10)) ;
            $(".scroll-container .circle-wrapper .circle-radius").css({"transform":"scale("+(tranformVal)+")"});
           }    

      
          else if(scroll_circle_bottom <=  scrollTop){          
              console.log(scroll_circle_bottom  +" __ "+  scrollTop);              
              count -= 1
              var tranformVal = (count );
              tranformVal -= (tranformVal / (tranformVal*10)) ;     
              $(".scroll-container .circle-wrapper .circle-radius").css({"transform":"scale("+(tranformVal)+")"}); 
                                                      }
            


 



  });

  


 });

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
  // console.log('callback - particles.js config loaded');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js2', 'js/particles.json', function () {
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