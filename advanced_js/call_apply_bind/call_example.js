function greet(name) {
    console.log(`Hello, ${name}! I am ${this.role}.`);
}

const person = { role: 'designer' };

greet.call(person, 'Arjun');
// Output: Hello, Arjun! I am designer.
