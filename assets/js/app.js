$(window).on("scroll", function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 320) {
        $(".navbar").addClass("affix");
        $(".navbar").addClass("animated fadeIn")
        $(".portfolioImages").addClass("animated fadeInDown")
        $(".portfolioImages").show()
    } else {
        $(".navbar").removeClass("affix");
        $(".portfolioImages").hide()
    }
});

