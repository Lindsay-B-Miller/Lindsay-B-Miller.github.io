$(window).on("scroll", function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 320) {
        $(".navbar").addClass("affix");
        $(".navbar").addClass("animated fadeIn")
    } else {
        $(".navbar").removeClass("affix");
    }
});