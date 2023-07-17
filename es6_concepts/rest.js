function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let res = sum(4, 9, 16, 25, 29, 100, 66, 77);


// JavaScript Object Rest Properties
// ECMAScript 2018 added rest properties.

// This allows us to destruct an object and collect the leftovers onto a new object:

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
}

show('one', 'two', 'three', 'four', 'five', 'six')
