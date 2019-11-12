// /* affix the navbar after scroll below header */
// $('#nav').affix({
//     offset: {
//         top: $('#services').offset().top
//     }
// });
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 320) {
        $('.navbar').addClass('affix');
        $(".navbar").addClass("animated fadeIn")
    } else {
        $('.navbar').removeClass('affix');
    }
});