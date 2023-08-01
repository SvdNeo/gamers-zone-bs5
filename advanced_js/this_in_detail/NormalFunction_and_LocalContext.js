const myObject = {
    name: 'Ranjan',
    sayHello: function () {
        console.log('Hello, ' + this.name);
    }
};

myObject.sayHello(); // Output: Hello, Ranjan
