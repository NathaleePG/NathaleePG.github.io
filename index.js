/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $conMain = $("#containerMain");
    var $header = $("header");
    var $logo = $("#containerMain > img");
    var $footer = $("footer");
    var $secCon = $("#containerSec");
    var $nav = $("#containerSec > ul > li");
    $conMain.delay(200).fadeIn(1000);
    $header.hide().delay(1200).fadeIn(1500);
    $logo.hide().delay(3000).fadeIn(1250);
    $footer.hide().delay(4800).fadeIn(1250);

    $logo.on("click", function(){
        $conMain.fadeOut(1500);
        $secCon.delay(1500).fadeIn(1500);
    });
    /*
    $nav.on("mouseover", function(){
        var i = $(this).index();
        var counter = 0;
        $nav.each(function(){
            if(counter !== i){
                $(this).css("opacity", 0.3);
            }
            counter += 1;
        })
    });

    $nav.mouseleave(function(){
        $nav.each(function(){
            $(this).css("opacity", 1);
        })
    });
    */
    /*
    function spin(item, delayTime){
        var target = 360;
        var start = 0;
        var counter = 2;
        setTimeout(function(){
            var timer = setInterval(function(){
                if (start >= target){
                    clearInterval(timer);
                }
                item.css("transform", "rotate("+start+"deg)");
                start += counter;
            },1);
        },delayTime);
    }
    spin($header,1500);
    */
});

