// ES5
var multiply1 = function (x, y) {
    return x * y;
}

// ES6
const multiply2 = (x, y) => x * y;

let greet1 = () => multiply2(4, 5)
let res = greet1(); // Hello

let greet2 = x => console.log(x);
greet2('Hello'); // Hello 

// Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');

welcome(); // Baby

// Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5, 7);
console.log(result1); // 12

