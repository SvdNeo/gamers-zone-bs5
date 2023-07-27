function sumArray(arr, index) {
    if (index === arr.length - 1) {
        return arr[index];
    } else {
        return arr[index] + sumArray(arr, index + 1);
    }
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers, 0)); // Output: 15 (1 + 2 + 3 + 4 + 5)
