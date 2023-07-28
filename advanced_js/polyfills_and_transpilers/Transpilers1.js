// For example, Babel can transpile this ES6 code:

// const greet = (name) => `Hello, ${name}!`;

var greet = function greet(name) {
    return "Hello, " + name + "!";
};

// ES6 Arrow Function
// const add = (a, b) => a + b;

// Transpiled ES5 Function Expression
var add = function add(a, b) {
    return a + b;
};

// Destructuring Assignment Transpilation:
// Transpile an ES6 destructuring assignment to equivalent ES5 variable assignments.

// ES6 Destructuring Assignment
const { x, y } = { x: 1, y: 2 };

// Transpiled ES5 Variable Assignments
// var x = { x: 1, y: 2 }.x;
// var y = { x: 1, y: 2 }.y;

// let and const Transpilation:
// Transpile let and const declarations into equivalent var declarations.
// ES6 let and const
let count = 10;
const PI = 3.14;

// Transpiled ES5 var
// var count = 10;
// var PI = 3.14;

// Async/Await Transpilation:
// Transpile async/await functions into ES5-compatible code using Babel or a similar transpiler.

// ES6 Async/Await Function
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Transpiled ES5 Equivalent
function fetchData() {
    return regeneratorRuntime.async(function fetchData$(_context) {
        // Transpiled async/await code
        // ...
    });
}

// Class Transpilation:
// Transpile ES6 class syntax into ES5 constructor functions.
// ES6 Class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Transpiled ES5 Constructor Function
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

// Default Parameters Transpilation:
// Transpile ES6 default function parameters into ES5 - compatible code.

// ES6 Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Transpiled ES5 Equivalent
function greet(name) {
    if (name === undefined) name = "Guest";
    return "Hello, " + name + "!";
}


// Spread Operator Transpilation:
// Transpile ES6 spread operator into ES5 - compatible code.
// ES6 Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// Transpiled ES5 Equivalent
// var numbers = [1, 2, 3];
// var moreNumbers = [].concat(numbers, [4, 5]);

// Object Property Shorthand Transpilation:
// Transpile ES6 object property shorthand notation into ES5 - compatible code.

// ES6 Object Property Shorthand
const name = "John";
const age = 30;
const person = { name, age };

// Transpiled ES5 Equivalent
// var name = "John";
// var age = 30;
// var person = { name: name, age: age };

// Promise Transpilation:
// Transpile Promise objects and methods into ES5 - compatible code for older browsers.

// ES6 Promise
const fetchData = new Promise((resolve, reject) => {
    // Promise code
    // ...
});

// Transpiled ES5 Equivalent
var fetchData = new Promise(function (resolve, reject) {
    // Transpiled Promise code
    // ...
});

// Decorators Transpilation:
// Transpile experimental ES7 / ES2016 decorators into ES5 - compatible code using Babel.

// ES7/ES2016 Decorator
@logger
class MyClass {
    // Class code
}

// Transpiled ES5 Equivalent
var _class;

let MyClass = logger((_class = class MyClass {
    // Transpiled class code
}, _applyDecoratedDescriptor(_class.prototype, 'methodName', [myDecorator], Object.getOwnPropertyDescriptor(_class.prototype, 'methodName'), _class.prototype)), _class);

// Function Bind Syntax Transpilation:
// Transpile ES7 function bind syntax into ES5 - compatible code using Babel.

// ES7 Function Bind Syntax
const sayHello = (name) => {
    this.name = name;
}.bind({});

// Transpiled ES5 Equivalent
// var sayHello = function () {
//     var _this = this;

//     return function (name) {
//         _this.name = name;
//     };
// }.call({});




