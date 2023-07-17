// Symbols are always unique.

// If you create two symbols with the same description they will have different values:

Symbol("id") == Symbol("id"); // false
const person = {
    firstName: "Ramesh",
    lastName: "JK",
    age: 50,
    eyeColor: "blue"
};

let id1 = Symbol('id');
let id2 = Symbol('id');
person[id1] = 140353;
person[id2] = 140354;
console.log(person[id1])
console.log(person[id2])
// Now person[id] = 140353
// but person.id is still undefined