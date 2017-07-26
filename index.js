/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $conMain = $("#containerMain");
    var $header = $("header");
    var $logo = $("#containerMain > a > img");
    $conMain.hide().delay(200).fadeIn(1000);
    $header.hide().delay(1200).fadeIn(1500);
    $logo.hide().delay(3000).fadeIn(1500);

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

