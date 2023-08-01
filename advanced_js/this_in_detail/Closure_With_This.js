function outerFunction() {
    const outerVar = 'I am outer';

    function innerFunction() {
        console.log(this); // `this` will depend on how innerFunction is called.
        console.log(outerVar); // Accessing outerVar from the closure's scope
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: Window object (or undefined in strict mode) and I am outer