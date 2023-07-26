// Finding the majority element in an array(an element that appears more than n / 2 times,
// where n is the array's length):

function majorityElement(arr) {
    const occurrences = {};
    const n = arr.length;
    for (const item of arr) {
        occurrences[item] = (occurrences[item] || 0) + 1;
        if (occurrences[item] > n / 2) {
            return item;
        }
    }
    return null;
}

const arr = [2, 2, 2, 1, 3, 2, 2];
console.log(majorityElement(arr));
