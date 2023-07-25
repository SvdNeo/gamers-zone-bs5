// jQuery DOM Manipulation
$(document).ready(function () {
    $("#welcome-message").text("Hello, fellow gamers!"); // Modifying content
    $("#welcome-message").addClass("highlight"); // Adding a CSS class dynamically

    const cb1 = function () {
        alert("Game starting!"); // Show an alert when the "Play Now" button is clicked
    }
    // jQuery Event Handling
    $("#play-button").on("click", cb1);

    const aniSetting1 = { // Animating the character's size and color on page load
        width: "200px",
        height: "200px",
        backgroundColor: "blue"
    }
    // Effects and Animations:
    $("#character").animate(aniSetting1, 1000); // Animation duration: 1 second

    // https://jsonplaceholder.typicode.com/todos/1'

    const ajaxSuccessCB1 = (data) => {
        $("#leaderboard").html(`<p>Leaderboard: ${data.title}</p>`); // Display leaderboard data from the API
    }
    const ajaxErrorCB1 = () => {
        $("#leaderboard").html("Failed to load leaderboard data.");
    }

    const ajaxApiConfig = {
        url: "https://jsonplaceholder.typicode.com/todos/2", // Sample API endpoint
        success: ajaxSuccessCB1,
        error: ajaxErrorCB1
    }
    // jQuery AJAX
    $.ajax(ajaxApiConfig);

    // DOM Traversal:
    var firstGame = $("#games-list li:first-child").html(); // Get the text of the first game in the list
    console.log(firstGame); // Output: "Game 1"

    // jQuery UI Slider
    $("#slider").slider({
        min: 0,
        max: 100,
        value: 50, // Set the initial value of the slider
        slide: function (event, ui) {
            console.log("Slider value: " + ui.value);
        }
    });

    // jQuery UI Datepicker Initialization
    $("#datepicker").datepicker();

    $("#change-color-btn").click(function () {
        // Call the colorChanger plugin on the .changeable-element
        $(".changeable-element").colorChanger({
            color: "blue", // Change to blue
            duration: 2000 // Animation duration: 2 seconds
        });
    });

    // Deferred and Promises: 
    function loadDataFromServer() {
        // Create a Deferred object
        var deferred = $.Deferred();

        // Simulate an AJAX call to fetch data from the server (using setTimeout)
        setTimeout(function () {
            // deferred.reject({ errorMsg: "Please retry after 30 seconds" });
            var data = "Data loaded from the server!"; // Simulated server response
            deferred.resolve(data); // Resolve the Deferred with the data
        }, 2000); // Simulate a 2-second delay

        // Return the Promise object associated with the Deferred
        return deferred.promise();
    }
    const promiseSuccessCB1 = function (data) {
        // Display the loaded data in the data-container element
        $("#data-container").text(data);
    }


    const promiseErrorCB1 = function (data) {
        console.log(`error ${data.errorMsg}`)
    }

    $("#load-data-btn").click(function () {
        $("#load-data-btn").prop("disabled", true); // Disable the button during data loading

        // Call the function to load data from the server and handle the Promise
        loadDataFromServer().then(promiseSuccessCB1, promiseErrorCB1)
            .always(function () {
                $("#load-data-btn").prop("disabled", false); // Re-enable the button after data loading is complete
            });
    });

    // Event delegation setup
    $("#task-list").on("click", "li", function () {
        // Event handler for clicking on list items
        var taskName = $(this).text();
        alert("You clicked on: " + taskName);
    });

    // Function to add a new task dynamically
    function addNewTask() {
        var newTaskName = "New Task";
        var newTaskItem = $("<li>").text(newTaskName);
        $("#task-list").append(newTaskItem);
    }

    // Click event for adding a new task
    $("#add-task-btn").click(function () {
        addNewTask();
    });

    // Event handling using jQuery (cross-browser)
    $("#show-message-btn").click(function () {
        // Display a message when the button is clicked
        alert("Hello, this is a cross-browser compatible message!");
    });

    // Toggle the navigation menu on small screens when the button is clicked
    $(".toggle-menu").click(function () {
        $(".nav-menu").slideToggle();
    });

    $("#registration-form").submit(function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Form validation
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirm-password").val();

        // Reset error messages
        $(".error").remove();

        // Check username
        if (username === "") {
            $("#username").after("<span class='error'>Username is required</span>");
            return;
        }

        // Check email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#email").after("<span class='error'>Email is required</span>");
            return;
        } else if (!emailPattern.test(email)) {
            $("#email").after("<span class='error'>Invalid email format</span>");
            return;
        }

        // Check password
        if (password === "") {
            $("#password").after("<span class='error'>Password is required</span>");
            return;
        } else if (password.length < 6) {
            $("#password").after("<span class='error'>Password must be at least 6 characters</span>");
            return;
        }

        // Check confirm password
        if (confirmPassword === "") {
            $("#confirm-password").after("<span class='error'>Confirm Password is required</span>");
            return;
        } else if (password !== confirmPassword) {
            $("#confirm-password").after("<span class='error'>Passwords do not match</span>");
            return;
        }

        // If all validations pass, submit the form
        alert("Registration successful!");
        // Uncomment the following line to actually submit the form to the server
        // $("#registration-form")[0].submit();
    });

    // Event handling for the button click
    $("#load-content-btn").click(function () {
        // Make an AJAX request to fetch a joke from the Chuck Norris Jokes API
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random",
            method: "GET",
            dataType: "json",
            success: function (data) {
                // Insert the joke into the #content-container
                $("#content-container").html("<p>" + data.value + "</p>");
            },
            error: function () {
                $("#content-container").html("<p>Failed to load joke. Please try again later.</p>");
            }
        });
    });
});

// Custom jQuery Plugin Definition
(function ($) {
    $.fn.colorChanger = function (options) {
        // Default options and settings
        var settings = $.extend({
            color: "blue",
            duration: 1000
        }, options);

        // Plugin logic
        return this.each(function () {
            var $element = $(this);
            $element.animate({
                backgroundColor: settings.color
            }, settings.duration);
        });
    };
})(jQuery);




