// Create an XMLHttpRequest object
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
console.log(xhr)
// Configure the request
xhr.open('GET', 'http://localhost:4000/api/books', true);
let i = 0;
// Set a callback function to handle the response
xhr.onreadystatechange = function () {
    i++;
    console.log(xhr.readyState, i)
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Request is complete and successful
        var response = JSON.parse(xhr.responseText);
        console.log(response);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        // Request completed but with an error
        console.log('Error:', xhr.status);
    }
};
console.log(xhr.readyState)
// Send the request
xhr.send();
