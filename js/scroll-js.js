$(document).ready(function () {
    var windowTop, windowBottom, windowHeight, containerTop, containerBottom, containerHeight, width_limit;





    containerTop = $(".scroll-container").offset().top;
    containerHeight = $(".scroll-container").height();
    windowHeight = $(window).height();
    containerBottom = containerTop - containerHeight;
    headerHeight = $('header').height();
    lastScroll = 0;
    wraper_height = $(".wrapper-holder").height();
    count = 0;
    counter=0;
    var tranformVal;
    var CurrentScroll = 0;
    var bodyOffsetTop = $("body").offset().top;




    $(window).scroll(function (e) {
       
        windowTop = $(window).scrollTop();
        windowBottom = (windowTop + windowHeight);
        var hitPoint = (containerTop - windowTop - headerHeight);
        var hitPointPostive = (-(hitPoint));

        // console.log("windowtop =" + windowTop + "," + "windowBottom" + windowBottom);

        $("body").attr("data-cont",windowTop);
        var  tempDiv,leftPostion;
        var NextScroll = $(this).scrollTop();
       
        if (NextScroll > CurrentScroll) {
            // to down-ward 

            if (hitPoint < 1 && (hitPointPostive < (containerHeight)     )) {
                tempDiv = (windowTop-(containerTop ));
                 tempDiv = (tempDiv*6);
                
                $(".circle-radius").addClass("add-circle");
                $(".atom-feature").css("margin-bottom", hitPointPostive);
              
                 width_limit = count ++;
                 
                 //console.log( width_limit );
                 $(".scroll-container .circle-wrapper .circle-radius").css({"width":tempDiv,"height":tempDiv});
              
                //  $(".scroll-container .circle-wrapper .circle-radius").css({ "transform": "scale(" + (width_limit) + ")" });


                
              
                
         
                    
             

            }
               

        }
        else {
            if (hitPoint < 1 && ((hitPointPostive) < (containerHeight )        )) {
           
                tempDiv = (windowTop-(containerTop ));
                 tempDiv = (tempDiv*6);
               
               console.log(  tempDiv);
              //  $(".atom-feature").css("margin-bottom", hitPointPostive);
              $(".circle-radius").addClass("add-circle");
                $(".atom-feature").css("margin-bottom", hitPointPostive);
                
                width_limit = count --;
                 console.log( width_limit );
              
                 $(".scroll-container .circle-wrapper .circle-radius").css({"width":tempDiv,"height":tempDiv});
              
                    if( width_limit >1){
                    // $(".scroll-container .circle-wrapper .circle-radius").css({ "transform": "scale(" + (width_limit) + ")" });
                    }
         
                   
            }

        }
        CurrentScroll = NextScroll;













        // else if (containerBottom <= windowTop) {

        //     count -= 1
        //     var tranformVal = (count);
        //     tranformVal -= (tranformVal / (tranformVal * 10));
        //     $(".scroll-container .circle-wrapper .circle-radius").css({ "transform": "scale(" + (tranformVal) + ")" });
        // }







    });



});