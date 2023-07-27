function greet(name) {
    console.log(`Hello, ${name}! I am ${this.role}.`);
}

const person = { role: 'manager' };

const greetPerson = greet.bind(person, 'Mehra');
greetPerson();
// Output: Hello, Mehra! I am manager.
