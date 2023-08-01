const person = {
    name: 'Roshan',
    sayHello: function () {
        setTimeout(() => {
            console.log('Hello, ' + this.name); // Arrow function inherits `this` from the lexical scope (sayHello function)
        }, 100);
    }
};

person.sayHello(); // Output: Hello, Roshan
