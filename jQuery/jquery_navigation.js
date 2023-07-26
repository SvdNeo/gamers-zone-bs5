$(document).ready(function () {
    // $(".main-menu li").click(function () {
    //     $(this).find(".sub-menu").slideToggle();
    // });

    // $(".mobile-menu-toggle").click(function () {
    //     $(".main-menu").slideToggle();
    // });

    // // Hide the menu when the window is resized back to desktop view
    // $(window).resize(function () {
    //     if ($(window).width() > 768) {
    //         $(".main-menu").show();
    //     }
    // });

    // $(".main-menu a").click(function (event) {
    //     event.preventDefault();
    //     var target = $(this).attr("href");
    //     $("html, body").animate({
    //         scrollTop: $(target).offset().top
    //     }, 1000); // Set the animation duration in milliseconds
    // });
    // // Toggle the navigation menu on small screens when the button is clicked
    // $(".toggle-menu").click(function () {
    //     $(".nav-menu").slideToggle();
    // });

    // Smooth scrolling when a navigation menu item is clicked
    $("ul.nav-menu li").click(function () {
        var target = $(this).attr("data-scroll-to");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust the animation speed as needed (800ms in this case)
    });
});
