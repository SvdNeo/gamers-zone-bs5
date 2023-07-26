// $(document).ready(function () {
//     // Sticky navigation bar functionality
//     var navbar = $(".navbar");
//     var navbarOffsetTop = navbar.offset().top;

//     $(window).scroll(function () {
//         // Check if the user has scrolled past the initial position of the navigation bar
//         if ($(window).scrollTop() >= navbarOffsetTop) {
//             // Add a class to fix the navigation bar at the top of the page
//             navbar.addClass("fixed-navbar");
//         } else {
//             // Remove the fixed class when the user scrolls back to the initial position
//             navbar.removeClass("fixed-navbar");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    // Function to check if the navbar should become sticky
    function checkSticky() {
        if (window.pageYOffset >= navbar.offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Add an event listener to the scroll event
    window.addEventListener("scroll", checkSticky);
});