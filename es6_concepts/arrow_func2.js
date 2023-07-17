// this with Arrow Function
// Inside a regular function, this keyword refers to the function where it is called.
// However, this is not associated with arrow functions.Arrow function does not have its own this.
// So whenever you call this, it refers to its parent scope.For example,

// Inside a regular function
function Person() {
    this.name = 'Shourya';
    this.age = 25;
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            // console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let person = new Person();
person.sayName();

// Inside an arrow function

function Person() {
    this.name = 'Sehwag';
    this.age = 45;
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

// Things You Should Avoid With Arrow Functions
// 1. You should not use arrow functions to create methods inside objects.
let player = {
    name: 'Rahul',
    age: 25,
    sayName: () => {

        // this refers to the global .....
        //
        console.log(this.age);
    }
}

player.sayName(); // undefined

// 2. You cannot use an arrow function as a constructor.

let Foo = () => { };
let foo = new Foo(); // TypeError: Foo is not a constructor
