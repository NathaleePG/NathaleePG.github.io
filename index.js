/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $conMain = $("#containerMain");
    var $header = $("header");
    $conMain.hide().delay(200).fadeIn(1000);
    $header.css("opacity", 0).delay(1200).animate({
        opacity:1
    },1500);

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

