function isValidParentheses(str) {
    const stack = new Stack();
    const openBrackets = "({[";
    const closeBrackets = ")}]";

    for (const char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            const lastOpenBracket = stack.pop();
            const expectedOpenBracket = openBrackets[closeBrackets.indexOf(char)];
            if (lastOpenBracket !== expectedOpenBracket) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

// Usage example:
console.log(isValidParentheses("(){}[]")); // Output: true
console.log(isValidParentheses("([{}])")); // Output: true
console.log(isValidParentheses("({[})"));  // Output: false
