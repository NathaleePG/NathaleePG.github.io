/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $conMain = $("#containerMain");
    var $header = $("header span");
    var $logo = $("#containerMain > img");
    var $footer = $("footer");
    var $secCon = $("#containerSec");
    var $nav = $("#containerSec > #fixed > ul > li");
    var $bar = $("#containerSec > #fixed > ul");
    var $button = $("#toggle");
    var $body = $(".body");
    var $fixed = $("#containerSec > #fixed");
    $conMain.delay(200).fadeIn(1000);
    $header.delay(1200).each(function(){
        $(this).delay(100*($(this).index() + 1)).animate({opacity:1}, 300);
    });
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

    var mList = [$("#m1"), $("#m2")];
    var mCounter = 0;

    function onResize(){
        var target = mList[mCounter].offset();
        if ($(window).scrollTop() > (target["top"] - 300) && $(window).scrollTop() > 200){
            $("#m1").animate({
                opacity:1
            },3000).clearQueue(true);
        }
    }

    $(".rightArrow").on("click", function(){
        event.preventDefault();
        mList[mCounter].fadeOut(500);
        mCounter+=1;
        if(mCounter === (mList.length - 1)){
            $(".rightArrow").css("display", "none");
        }else{
            $(".rightArrow").css("display", "block");
        }

        if(mCounter > 0){
            $(".leftArrow").css("display", "block");
        }else{
            $(".leftArrow").css("display", "none");
        }
        mList[mCounter].fadeIn(500);
    });
    $(".leftArrow").on("click", function(){
        event.preventDefault();
        mList[mCounter].fadeOut(500);
        mCounter -=1;
        if(mCounter === 0){
            $(".leftArrow").css("display", "none");
        }else{
            $(".leftArrow").css("display", "block");
        }

        if (mCounter < (mList.length - 1)){
            $(".rightArrow").css("display", "block");
        }else{
            $(".rightArrow").css("display", "none");
        }
        mList[mCounter].fadeIn(500);
    });

    onResize();

    function recurse(item){
        item.children().delay(300).each(function(){
            $(this).delay(200 * ($(this).index() +1)).animate(
                {opacity:1}, 500, function(){
                    recurse($(this));
                });
        })
    }

    function categoriesOnResize(){
        var target = $('#categories').offset();
        if ($(window).scrollTop() > (target["top"] - 300) && $(window).scrollTop() > 100) {
            $('#categories').animate({
                opacity: 1
            }, 500).clearQueue(true);
            $("#categories span").delay(500).each(function () {
                $(this).delay(100 * ($(this).index() + 1)).animate({opacity: 1}, 300);
            })
            $("#categories #sub").delay(4500).animate({
                opacity:1
            }, 1000);
            $("#categories li").delay(2100).each(function(){
                $(this).delay(500 * ($(this).index() +1)).animate({opacity:1}, 500);
            })
        }
    }

    categoriesOnResize();

    $(window).on("scroll", function(){
        onResize();
        categoriesOnResize();
    });









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

