// Finding the intersection of two arrays:

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersected = new Set([...set1].filter((item) => set2.has(item)));
    return Array.from(intersected);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2));
