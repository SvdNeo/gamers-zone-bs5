const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
    hello() {
        console.log('hello called')
    },
    toString() {
        return "I am new obj"
    }
};

console.log(myObject.toString()); // Greetings from Madrid


function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15