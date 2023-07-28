function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1; // Element not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

const sortedArr = [2, 4, 6, 8, 10, 12, 14];
let index = binarySearch(sortedArr, 10, 0, sortedArr.length - 1); // Output: 4 (index of 10)

console.log(index)
console.log(sortedArr[index])

let index2 = binarySearch(sortedArr, 11, 0, sortedArr.length - 1); // Output: -1 

console.log(index2)
console.log(sortedArr[index2])

// callstack bs1() r-4 -> bs2() r- 4 -> bs3() r - 4

// bs1 arr, t = 10 , l= 0, h = 6, mid = 3
// bs2() arr, t=10, l=4, h=6,mid = 5
// bs3() arr, t=10, l=4, h=4 mid=4










