// File: student.js
const Person = require('./Person');

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    study() {
        console.log(this.name + ' is studying at ' + this.school + '.');
    }
}

module.exports = Student;