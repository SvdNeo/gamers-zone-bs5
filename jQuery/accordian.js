$(document).ready(function () {
    // Accordion functionality
    $(".accordion h3").click(function () {
        // Toggle the visibility of the corresponding content div
        $(this).next().slideToggle();

        // Collapse other open sections (if any)
        $(".accordion div").not($(this).next()).slideUp();
    });
});