// "use strict";
// Global context:

// console.log(this); // Refers to the global object (window in browsers, global in Node.js)
// console.log("---------")
// Function context:
// The value of "this" inside a regular function depends on how the function is called.

// a.Regular Function Call:
// In a regular function call, "this" will refer to the global object(window in browsers) 
// in non - strict mode and undefined in strict mode.
function myFunction() {
    console.log(this);
}

// myFunction(); // Refers to the global object (window in browsers, undefined in strict mode)
console.log("---------")

// b.Method Invocation:
// When a function is called as a method of an object, "this" will refer to the object itself.
const obj = {
    prop: 'Hello',
    sayHello: function () {
        console.log(this.prop);
    }
};

// obj.sayHello(); // Refers to the object "obj" and logs "Hello"
// console.log("---------")

// c.Function inside a Function:
// If a function is defined inside another function, 
// "this" inside the inner function refers to the global object in a regular function call or undefined in strict mode.
function outerFunction() {
    console.log(this); // Refers to the global object (window in browsers, undefined in strict mode)
    function innerFunction() {
        console.log(this); // Refers to the global object (window in browsers, undefined in strict mode)
    }
    innerFunction();
}

// outerFunction();

let obj30 = {
    test: function outerFunction() {
        console.log(this); // Refers to the global object (window in browsers, undefined in strict mode)
        function innerFunction() {
            console.log(this); // Refers to the global object (window in browsers, undefined in strict mode)
        }
        innerFunction();
    }
}
// obj30.test();
// console.log("---------")
// Arrow functions:
// Arrow functions behave differently regarding "this" compared to regular functions.
// They inherit the value of "this" from the surrounding scope, just like any other variable.
// const obj2 = {
//     prop: 'Hello Manoj',
//     sayHello: function () {
//         const innerArrow = function () {
//             console.log(this.prop);
//         };
//         innerArrow();
//     }
// };

// obj2.sayHello(); // Refers to the object "obj" and logs "Hello"
// console.log("---------")

// Constructor functions:
// When a function is used as a constructor(invoked with the "new" keyword), 
// "this" refers to the newly created instance of the object.

function Person(name) {
    this.name = name;
}

const person = new Person('John');
// console.log(person.name); // Outputs "John"
// console.log("---------")

// Event handlers:
// In event handlers, "this" often refers to the DOM element that triggered the event.

// document.getElementById('myButton').addEventListener('click', function () {
//     console.log(this); // Refers to the <button> element
// });


// "Call", "Apply", and "Bind" methods:
// JavaScript provides three methods, "call," "apply," and "bind," 
// which allow you to explicitly set the value of "this" when invoking a function.

// "call": Calls a function with a specified "this" value and individual arguments.

function sayHello() {
    console.log(this.message);
}

const obj10 = { message: 'Hello from obj10' };
const obj20 = { message: 'Hello from obj20' };

// sayHello.call(obj10); // Outputs "Hello from obj10"
// sayHello.call(obj20); // Outputs "Hello from obj20"
// console.log("---------")

// "apply": Calls a function with a specified "this" value and an array of arguments.

// sayHello.apply(obj10); // Outputs "Hello from obj10"
// sayHello.apply(obj20); // Outputs "Hello from obj20"
// console.log("---------")

// "bind": Returns a new function with a specified "this" value.
// It doesn't call the function immediately but allows you to execute it later.


const boundFunction1 = sayHello.bind(obj10);
const boundFunction2 = sayHello.bind(obj20);

boundFunction1(); // Outputs "Hello from obj1"
boundFunction2(); // Outputs "Hello from obj2"
// console.log("---------")