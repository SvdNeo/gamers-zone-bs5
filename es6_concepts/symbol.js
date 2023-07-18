// Symbols are always unique.

// If you create two symbols with the same description they will have different values:

let id10 = Symbol("id"); // 100
let id11 = Symbol("id"); // 123
let id12 = Symbol("id"); // 345
Symbol("id") == Symbol("id"); // false


const person = {
    firstName: "Ramesh",
    lastName: "JK",
    age: 50,
    eyeColor: "blue"
};

let key = "player"
let key2 = "player"
let id1 = Symbol('id');
let id2 = Symbol('id');
person[id1] = 140353;
person[id2] = 140354;
person[key] = "Rohit"
person[key2] = "Sachin"

// person.player or person[key]
console.log(person[id1])
console.log(person[id2])
// Now person[id] = 140353
// but person.id is still undefined