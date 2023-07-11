let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let fruits = ['apple', 'banana', 'orange'];
let res1 = fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

let res2 = fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

let res3 = fruits.shift();
console.log(fruits); // Output: ['banana', 'orange']

let res4 = fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'banana', 'orange']

let res5 = fruits.splice(0, 2, 'cherry', 'mango');
console.log(fruits); // Output: ['kiwi', 'cherry', 'mango', 'orange']

