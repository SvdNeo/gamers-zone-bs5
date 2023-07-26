function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const str1 = "level";
const str2 = "hello";
console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false
