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
console.log(binarySearch(sortedArr, 10, 0, sortedArr.length - 1)); // Output: 4 (index of 10)
