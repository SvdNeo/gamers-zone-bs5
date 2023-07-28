// npm install @babel/core @babel/cli @babel/preset-env --save-dev
// npx babel script.js --out-file dist/script-transpiled.js

// ES6 Arrow Function
const add = (a, b) => a + b;

// ES6 Template Literal
const name = 'John';
const greeting = `Hello, ${name}!`;

// ES6 Destructuring Assignment
const { x, y } = { x: 1, y: 2 };

// ES6 Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// ES6 Default Parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

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

