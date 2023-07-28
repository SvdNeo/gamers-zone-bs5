// Countdown

function countdown(n) {
    if (n <= 0) {
        console.log("Blastoff!");
    } else {
        console.log(n);
        countdown(n - 1);
    }
}

countdown(5); // Output: 5 4 3 2 1 Blastoff!

// Sum of Digits

function sumOfDigits(num) {
    if (num === 0) {
        return 0;
    } else {
        return (num % 10) + sumOfDigits(Math.floor(num / 10));
    }
}

console.log(sumOfDigits(12345)); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Exponentiation
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 4)); // Output: 16 (2^4)

// String Reversal
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("hello")); // Output: "olleh"

// Factorial(Tail Recursion)
function factorial(n, accumulator = 1) {
    if (n === 0) {
        return accumulator;
    } else {
        return factorial(n - 1, n * accumulator);
    }
}

console.log(factorial(5)); // Output: 120

// Nested Array Flattening
function flattenArray(arr) {
    let flattened = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArray(element));
        } else {
            flattened.push(element);
        }
    });
    return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

// Binary Tree Traversal
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

inOrderTraversal(root); // Output: 2 3 4 5 7

// Print Nested Object Keys
function printNestedKeys(obj, parentKey = "") {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            printNestedKeys(obj[key], parentKey + key + ".");
        } else {
            console.log(parentKey + key + ": " + obj[key]);
        }
    }
}

const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001,
    },
};

printNestedKeys(person);
// Output:
// name: John
// age: 30
// address.city: New York
// address.zip: 10001

// Tribonacci Series
function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

console.log(tribonacci(6)); // Output: 8 (0, 1, 1, 2, 4, 7, 13, 24...)

// Greatest Common Divisor(GCD)
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(36, 48)); // Output: 12 (GCD of 36 and 48)

