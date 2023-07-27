function greet(name) {
    console.log(`Hello, ${name}! I am ${this.role}.`);
}

const person = { role: 'developer' };

greet.apply(person, ['Rohan']);
// Output: Hello, Rohan! I am developer.
