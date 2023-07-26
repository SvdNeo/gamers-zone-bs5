// Checking if two arrays are disjoint(have no common elements):

function areDisjoint(arr1, arr2) {
    const set1 = new Set(arr1);
    for (const item of arr2) {
        if (set1.has(item)) {
            return false;
        }
    }
    return true;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
console.log(areDisjoint(arr1, arr2)); // Output: true

