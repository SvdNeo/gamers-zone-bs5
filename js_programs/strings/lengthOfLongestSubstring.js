// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap.has(s[i]) && charIndexMap.get(s[i]) >= start) {
            start = charIndexMap.get(s[i]) + 1;
        }

        charIndexMap.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// Example usage:
const s = "abcabcdbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 (The longest substring without repeating characters is "abc")
