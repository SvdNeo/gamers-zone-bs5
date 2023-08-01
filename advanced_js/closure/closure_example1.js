function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing the variable from the outer scope
    }

    return innerFunction;
}


const closureFunction = outerFunction();
closureFunction(); // This will log: "I am from the outer function"
