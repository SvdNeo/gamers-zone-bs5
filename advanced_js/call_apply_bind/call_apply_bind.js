function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function SetBrand(brand) {
    Car.call(this, "convertible", "petrol");
    this.brand = brand;
    console.log(`Car details = `, this);
}

function DefinePrice(price) {
    Car.apply(this, ["convertible", "diesel"]);
    this.price = price;
    console.log(`Car details = `, this);
}

let car = new Car("sedan", "Petrol")
const newBrand = new SetBrand('Brand1');
const newCarPrice = new DefinePrice(100000);

function Test() {
    console.log(this)
    this.course = "Full Stack"
}
Test.apply();
