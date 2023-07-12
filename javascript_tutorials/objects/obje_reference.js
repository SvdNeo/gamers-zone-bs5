// Object references and copying

let player = {
    name: "Sumanth"
};

// Comparison by reference
let game1 = {};
let game2 = game1; // copy the reference

console.log(game1 == game2); // true, both variables reference the same object
console.log(game1 === game2); // true

let game3 = {};
let game4 = {}; // two independent objects

console.log(game3 == game4); // false

// Const objects can be modified

// Cloning and merging, Object.assign

let clone_player = {}; // the new empty object

// let's copy all player properties into it
for (let key in player) {
    clone_player[key] = player[key];
}

// this in object method

// Optional chaining '?.'
const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "running"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
        country: "USA"
    }
};

console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
console.log(person.address.city); // Output: Exampleville

