// Create an XMLHttpRequest object
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
console.log(xhr)
// Configure the request
xhr.open('GET', 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20', true);
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
