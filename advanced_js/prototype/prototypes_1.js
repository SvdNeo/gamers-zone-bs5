// Every JavaScript function has a prototype property(this property is empty by default )
// This prototype property is not enumerable; that is, it isn’t accessible in a for/in loop
// __proto__ “pseudo” property(an alternative syntax) 
// The prototype property is used primarily for inheritance

function Report(name, desc) {
    this.name = name;
    this.desc = desc;
}

console.log(Report)

Report.prototype.print = function () {
    console.log(this.desc)
}
let sales_report = new Report('sales', 'This has 2023 sales report');
console.log(sales_report)

let marketing_report = new Report('marketing', 'This has 2023 marketing report');
console.log(marketing_report)

// An object’s prototype attribute points to the object’s “parent” — the object it inherited its properties from.

// all objects that inherit from another object also inherit a constructor property. 
console.log(marketing_report.constructor); // Report()

// If an object is created with an object literal(var newObj = {}), it inherits properties from Object.prototype
// cart = new Object() or = {}
let cart = { id: 1, items: [{ name: "T-Shirt", size: 'L', price: 2999 }, { name: "Pant", size: '32', price: 4999 }] }
console.log(cart.constructor)
console.log(cart.constructor.prototype)
console.log(cart.constructor.prototype === cart.__proto__)


// In ECMAScript 5, we can create objects with an Object.create() method that allows you to set the new object’s prototype object
let employee_attendance_report = Object.create(Report.prototype);
console.log(employee_attendance_report.constructor)
console.log(employee_attendance_report.constructor.prototype)


// Prototype Property: Prototype - based Inheritance
// JavaScript has a prototype - based inheritance mechanism.
// Inheritance is a programming paradigm where objects(or Classes in some languages) can inherit properties and methods from other objects(or Classes)
// all functions in JavaScript are objects



// Prototype Attribute: Accessing Properties on Objects
// The prototype attribute(or prototype object) of any object is the “parent” object where the inherited properties were originally defined.



// Object.prototype Properties Inherited by all Objects
// All objects in JavaScript inherit properties and methods from Object.prototype.
// These inherited properties and methods are constructor, hasOwnProperty(), isPrototypeOf(), propertyIsEnumerable(), toLocaleString(), toString(), and valueOf(). 


// All built -in constructors(Array(), Number(), String(), etc.) were created from the Object constructor, and as such their prototype is Object.prototype.

