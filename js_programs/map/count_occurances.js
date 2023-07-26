// Counting occurrences of elements in an array:
function countOccurrences(arr) {
    const occurrences = new Map();
    for (const item of arr) {
        occurrences.set(item, (occurrences.get(item) || 0) + 1);
    }
    return occurrences;
}

const arr = [1, 2, 3, 2, 1, 4, 5, 3, 2];
console.log(countOccurrences(arr));

