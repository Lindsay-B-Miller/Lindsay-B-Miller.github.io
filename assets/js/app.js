$(window).on("scroll", function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 320) {
        $(".navbar").addClass("affix");
        $(".navbar").addClass("animated fadeIn")
        $(".portfolioImages").addClass("animated fadeInDown")
        $(".portfolioImages").show()
        // $(".technologiesList").addClass("animated fadeInDown")
    }
    if (ScrollValue > 330) {
        $(".technologiesList").addClass("animated fadeInDown")
        // $(".technologiesList").show()
    }
    else if (ScrollValue < 320) {
        $(".navbar").removeClass("affix");
        $(".portfolioImages").hide()

    }
    // else if (ScrollValue < 720) {
    //     $(".technologiesList").hide()
    // }

});

