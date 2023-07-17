// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");
letters.add("a");

console.log(letters.has("a"))

console.log(letters.entries())
console.log(letters.values())

for (let item of letters.values()) {
    console.log(item)
}


for (let entry of letters.entries()) {
    console.log(entry)
}
