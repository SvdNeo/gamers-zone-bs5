// before you would do something like this
const person = {
    name: 'Riya',
    age: 22,
    gender: 'female'
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Riya
console.log(age); // 22
console.log(gender); // female

let { name: name_1, age: age_1, gender: gender_1 } = person;

console.log(name_1); // Riya
console.log(age_1); // 22
console.log(gender_1); // female


// Array destructuring
const [first, ...second] = ["One", "Two"]