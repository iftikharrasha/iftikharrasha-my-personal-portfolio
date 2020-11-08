/********** preloader ***********/
$(window).load(function () {
    $("#loading").delay(100).fadeOut(500);
});

/********* sticky header ********/
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

/*********** wow js ************/
$(document).ready(function () {
    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
            },
            scrollContainer: null,
            resetAnimation: true,
        }
    );
    wow.init();
});