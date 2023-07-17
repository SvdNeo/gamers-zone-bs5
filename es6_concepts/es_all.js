// ECMAScript 2020
// The Nullish Coalescing Operator(??)
// The ?? operator returns the first argument if it is not nullish(null or undefined).
// Otherwise it returns the second.

let name = null;
let text = "missing";
let result = name ?? text;

// JavaScript String matchAll()

const iterator1 = text.matchAll("Cats");

const iterator2 = text.matchAll(/Cats/g);

const iterator3 = text.matchAll(/Cats/gi);

// The &&= Operator
// The Logical AND Assignment Operator is used between two values.

// If the first value is true, the second value is assigned.

let x = 10;
x &&= 5;

let y = 10;
y ||= 5;

const car = { type: "Fiat", model: "500", color: "white", "addr": { add1: "JP Nagar", city: "Bengaluru" } };
let car_name = car?.addr?.city;

// JavaScript Numeric Separator(_)
// ES2021 intoduced the numeric separator(_) to make numbers more readable:
// The numeric separator is only for visual use.

const num1 = 1_000_000_000;
const num2 = 1000000000;
(num1 === num2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits.at(2);

let fruit2 = fruits[2];

const place = "Bengaluru";
let letter1 = place.at(2);
let letter2 = place.at[2];

