// Creating Private Variables:
// Closures can be used to create private variables and expose public methods to interact with them.
// This is a common pattern used for data encapsulation in JavaScript.

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

const counter = createCounter();
counter(); // Logs: 1
counter(); // Logs: 2
counter(); // Logs: 3
// The `count` variable is not directly accessible from outside, but it's accessible via the closure returned by `createCounter`.
