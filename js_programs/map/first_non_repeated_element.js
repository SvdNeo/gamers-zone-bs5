// Finding the first non - repeated element in an array:

function firstNonRepeatedElement(arr) {
    const occurrences = new Map();
    for (const item of arr) {
        occurrences.set(item, (occurrences.get(item) || 0) + 1);
    }
    for (const item of arr) {
        if (occurrences.get(item) === 1) {
            return item;
        }
    }
    return null;
}

const arr = [1, 2, 3, 2, 1, 4, 5, 3, 2];
console.log(firstNonRepeatedElement(arr));
