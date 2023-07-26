// Checking if two strings are anagrams:

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = new Map();

    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
    }

    return true;
}

const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));


