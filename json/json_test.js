const user = require('./user.json');
console.log(user)
const jsonString = '{"name":"Harish Singh","age":30,"isMarried":false,"hobbies":["reading","swimming","cooking"],"address":{"city":"Patiala","zipCode":"147001"}}';
console.log(jsonString)
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject['name']); // "Harish Singh"
console.log(parsedObject.hobbies[1]); // "swimming"
console.log(parsedObject.address.city); // "Patiala"
console.log(user["hobbies"])
console.log(typeof user);
person = JSON.stringify(user);

console.log(person);
console.log(typeof person);
