// Iterators:
// Closures can be used to create iterators that remember their internal state across calls.

function createIterator(arr) {
    let index = 0;

    return function () {
        if (index < arr.length) {
            return arr[index++];
        }
        return null;
    };
}

const fruits = ['apple', 'banana', 'orange'];
const getNextFruit = createIterator(fruits);

console.log(getNextFruit()); // Output: 'apple'
console.log(getNextFruit()); // Output: 'banana'
console.log(getNextFruit()); // Output: 'orange'
console.log(getNextFruit()); // Output: null (end of array)

