function Vehicle(tyres, color) {
    this.tyres = tyres;
    this.color = color;
}

let v1 = new Vehicle();


function Car(name, yom, tyres, color) {
    Vehicle.call(this, tyres, color);
    this.name = name;
    this.yom = yom;
}
Car.prototype = Object.create(Vehicle.prototype);
let c1 = new Car(Vehicle.prototype);

function Bentley(cost, name, yom, tyres, color) {
    Car.call(this, name, yom, tyres, color)
    this.cost = cost;
}

Bentley.prototype = Object.create(Car.prototype);
let b1 = new Bentley(200000, "Model 1", 2024, 6, "white")

