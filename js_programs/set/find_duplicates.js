// Checking if an array contains duplicate elements:

function hasDuplicates(arr) {
    return arr.length !== new Set(arr).size;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 2, 3, 4, 5];
console.log(hasDuplicates(arr1)); // Output: false
console.log(hasDuplicates(arr2)); // Output: true
