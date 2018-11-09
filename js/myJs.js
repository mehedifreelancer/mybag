$("document").ready(function () {

    var offset = $('nav').offset().top;


    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();

        $('nav').wrap('<div class="nav-placeholder"> </div>');
        $(".nav-placeholder").height($('nav').outerHeight());

        if (scrollValue >= offset) {
            $("nav").addClass("navAnimate");

        } else {
            $("nav").removeClass("navAnimate");
            //plase take navAnimate css class for plug in
        }
    })









    $(".box").animate({
        "height": "350"
    }, 1500);

    $(".boxTwo").animate({
        "height": "250"
    }, 2000);
    $(".greeting").fadeIn(1500);

})

// Custom control
var video = $('#bag').get(0);
var $btn = $('#btn-play-pause');

$btn.on('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
