// Given an input string s, reverse the order of the words.

function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Example usage:
const str = "  the sky  is   blue  ";
console.log(reverseWords(str)); // Output: "blue is sky the" (Reversed order of words)
