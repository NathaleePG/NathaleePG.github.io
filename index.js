/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $conMain = $("#containerMain");
    var $header = $("header");
    var $logo = $("#containerMain > img");
    var $footer = $("footer");
    var $secCon = $("#containerSec");
    var $nav = $("#containerSec > #fixed > ul > li");
    var $bar = $("#containerSec > #fixed > ul");
    var $button = $("#toggle");
    var $body = $(".body");
    var $fixed = $("#containerSec > #fixed");
    $conMain.delay(200).fadeIn(1000);
    $header.hide().delay(1200).fadeIn(1500);
    $logo.hide().delay(3000).fadeIn(1250);
    $footer.hide().delay(4800).fadeIn(1250);

    $logo.on("click", function(){
        $conMain.fadeOut(1500);
        $secCon.delay(1500).fadeIn(1500);
    });

    $button.on("click", function(){
        $bar.toggle();
        if($bar.css("display") === "none"){
            $button.css("opacity", 0.9);
            $fixed.css("border-bottom", "1px solid black");
        } else{
            $button.css("opacity", 0.25);
            $fixed.css("border-bottom", "0");
        }
    });

    var $icons = $(".icons li");

    $icons.on("mouseover", function(){
        $(this).stop(true);
        $(this).animate({
            opacity:1
        }, 300);
    });

    $icons.mouseleave(function(){
        $(this).animate({
            opacity:0.6
        }, 200);
    });

    $("#containerSec > #fixed > ul:not(.icons) > li").on("click", function(){
        $(this).find("ul").toggle();
        $(this).find("li").toggle();

        if($(this).find("ul").css("display") ==="none"){
            $(this).css("opacity", 0.5);
        } else{
            $(this).css('opacity', 1);
        }
    });

    function onResize(){
        var target = $('#m1').offset();
        if ($(window).scrollTop() > (target["top"] - 300)){
            $("#m1").animate({
                opacity:1
            },3000)
        }
    }
    $(window).on("scroll", function(){
        onResize();
    });

    onResize();











    /**
    var $fb = $("#fb");
    var $pin = $("#pin");
    var $ig = $("#ig");

    $fb.mouseenter(function(){
        $(this).find(".resize").css("display", "none");
        $(this).append("<img src='icon6.png' class='abs'>");
    });
    $fb.mouseleave(function(){
        $(this).find(".abs").remove();
        $(this).find(".resize").css("display", "block");

    });

    $pin.mouseenter(function(){
        $(this).find(".resize").css("display", "none");
        $(this).append("<img src='icon3.png' class='abs'>");
    });
    $pin.mouseleave(function(){
        $(this).find(".abs").remove();
        $(this).find(".resize").css("display", "block");

    });

    $ig.mouseenter(function(){
        $(this).find(".resize").css("display", "none");
        $(this).append("<img src='icon5.png' class='abs'>");
    });
    $ig.mouseleave(function(){
        $(this).find(".abs").remove();
        $(this).find(".resize").css("display", "block");

    });
    */

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

