const user = require('./user.json');
const jsonString = '{"name":"Harish Singh","age":30,"isMarried":false,"hobbies":["reading","swimming","cooking"],"address":{"city":"Patiala","zipCode":"147001"}}';

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name); // "Harish Singh"
console.log(parsedObject.hobbies[1]); // "swimming"
console.log(parsedObject.address.city); // "Patiala"

person = JSON.stringify(user);

console.log(person);
