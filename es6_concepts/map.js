const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);


console.log(fruits.get("apples"))

fruits.set("guava", 250)
fruits.set("lychee", 450)
fruits.set("Butter Fruit", 350)
fruits.set("Grape", 250)
fruits.set("apples", 1250)
console.log(fruits.get("guava"))
console.log(fruits.size)


let obj = {}

obj["apple"] = 500;
obj["bananas"] = 100;
obj["oranges"] = 200;

console.log(obj["apple"])