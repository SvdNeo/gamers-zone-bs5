let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

let fruits = ['apple', 'banana', 'orange'];

let res1 = fruits.push('grape', 'kiwi');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape','kiwi']

let fruits2 = ['mango', 'butterfruit', [["Test"], ['Lychee']]];
// fruits.push(fruits2)
// fruits2.forEach((fruit) => fruits.push(fruit))
// for (let i = 0; i < fruits2.length; i++) fruits.push(fruits2[i])
// for (let item of fruits2) fruits.push(item)

// fruits.push(fruits2) // 'mango', 'butterfruit', 'Lychee'
// console.log(fruits)

// let res2 = fruits.pop();
// console.log(fruits); // Output: ['apple', 'banana', 'orange','grape']

// let res3 = fruits.shift();
// console.log(fruits); // Output: ['banana', 'orange']

// let res4 = fruits.unshift('kiwi');
// console.log(fruits); // Output: ['kiwi', 'banana', 'orange']
// ['apple', 'banana', 'orange', 'grape', 'kiwi']
let res5 = fruits.splice(2, 2, fruits2);
console.log(fruits); // Output: ['kiwi', 'cherry', 'mango', 'orange']

