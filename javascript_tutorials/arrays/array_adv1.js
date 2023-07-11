let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
// let doubledNumbers = numbers.map(function (number) {
//     return number * 2;
// });
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// // Using filter to get even numbers
// let evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4]

// Using reduce to sum all numbers
//[1, 2, 3, 4, 5];
let cb = (accumulator, number) => {
    return accumulator + number;
}
let sum = numbers.reduce(cb);
console.log(sum); // Output: 15

let cb2 = num => num % 2 === 0;
// Using find to get the first even number
let firstEvenNumber = numbers.find(cb2);
console.log(firstEvenNumber); // Output: 2


