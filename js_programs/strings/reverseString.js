// Write a function that reverses a string.Do it in -place,
// modifying the original input string in -place with O(1) extra memory.

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters at positions left and right
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Example usage:
let str = ["h", "e", "l", "l", "o"];
reverseString(str);
console.log(str); // Output: ["o", "l", "l", "e", "h"]

