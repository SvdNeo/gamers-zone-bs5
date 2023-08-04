const str1 = 'Hello';
const str2 = 'World';
const concatenated = str1 + ' ' + str2;
console.log(concatenated);
// Output: "Hello World"

const str3 = 'Hello';
console.log(str3[0]);
// Output: "H"

const str4 = 'JavaScript';
console.log(str4.length);
// Output: 10

const str = 'JavaScript is awesome!';
console.log(str.indexOf('is')); // Output: 11
console.log(str.includes('awesome')); // Output: true
console.log(str.startsWith('Java')); // Output: true
console.log(str.endsWith('!')); // Output: true

const replaced = str.replace('awesome', 'amazing');
console.log(replaced);
// Output: "JavaScript is amazing!"

const str6 = 'JavaScript';
console.log(str6.toUpperCase());
// Output: "JAVASCRIPT"

console.log(str6.toLowerCase());
// Output: "javascript"

const sentence = 'JavaScript is a powerful programming language.';
const words = sentence.split(' ');
console.log(words);
// Output: ["JavaScript", "is", "a", "powerful", "programming", "language."]

const newSentence = words.join('-');
console.log(newSentence);
// Output: "JavaScript-is-a-powerful-programming-language."

const sentence2 = 'JavaScript is awesome!';

console.log(sentence2.includes('is'));
// Output: true

console.log(sentence2.startsWith('Java'));
// Output: true

console.log(sentence2.endsWith('!'));
// Output: true

const str7 = 'Hello';
console.log(str7.repeat(3));
// Output: "HelloHelloHello"


// Substring
const sentence3 = 'The quick brown fox jumps over the lazy dog';
const substring = sentence3.substring(4, 9);
console.log(substring); // Output: "quick"

// Searching and Replacing
const sentence4 = 'JavaScript is a popular programming language';
console.log(sentence4.indexOf('is')); // Output: 11
console.log(sentence4.includes('programming')); // Output: true
console.log(sentence4.replace('JavaScript', 'Python')); // Output: "Python is a popular programming language"

