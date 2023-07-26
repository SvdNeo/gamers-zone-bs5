// Implementing a frequency - based sorting of an array:

function frequencySort(arr) {
    const occurrences = new Map();
    for (const item of arr) {
        occurrences.set(item, (occurrences.get(item) || 0) + 1);
    }
    arr.sort((a, b) => {
        const freqDiff = occurrences.get(b) - occurrences.get(a);
        return freqDiff !== 0 ? freqDiff : a - b;
    });
    return arr;
}

const arr = [3, 1, 2, 2, 3, 1, 4, 5, 2];
console.log(frequencySort(arr));
