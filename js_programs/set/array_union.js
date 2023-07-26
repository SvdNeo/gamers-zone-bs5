// Finding the union of two arrays:

function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
console.log(arrayUnion(arr1, arr2));


