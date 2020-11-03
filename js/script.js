/* pre loader */
$(window).load(function () {
    $("#loading").delay(100).fadeOut(500);
});

/* sticky header */
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});
