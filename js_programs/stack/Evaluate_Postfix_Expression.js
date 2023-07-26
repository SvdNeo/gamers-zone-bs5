function evaluatePostfixExpression(expression) {
    const stack = new Stack();

    for (const token of expression.split(" ")) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(operand1 + operand2);
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    break;
                case "/":
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }

    return stack.peek();
}

// Usage example:
console.log(evaluatePostfixExpression("3 4 + 2 *")); // Output: 14
console.log(evaluatePostfixExpression("5 6 7 * + 8 -")); // Output: 29
