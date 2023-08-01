function normalFunction() {
    console.log(this); // Refers to the global object (e.g., window in browsers)
}

normalFunction(); // Output: [object Window] (in browsers)

// In strict mode
function strictFunction() {
    'use strict';
    console.log(this); // Refers to undefined in strict mode
    function normalFunction() {
        console.log(this); // Refers to the global object (e.g., window in browsers)
    }
    normalFunction()
}

strictFunction(); // Output: undefined
