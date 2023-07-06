// A.
let username = "Gamer1";

// Check minimum length
if (username.length < 6) {
    console.log("Username must be at least 6 characters long.");
}

// Check if username contains special characters
if (username.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    console.log("Username cannot contain special characters.");
}

// Check uniqueness
// let isUnique = checkUsernameUniqueness(username); // Write a method to check
if (!isUnique) {
    console.log("Username is already taken.");
}

// B. Game search
let games = ["Assassin's Creed", "Call of Duty", "The Legend of Zelda", "Final Fantasy"];

let searchQuery = "legend";

let searchResults = games.filter(game => game.toLowerCase().includes(searchQuery.toLowerCase()));

console.log(searchResults);
// Output: ["The Legend of Zelda"]

// C. Chat Filtering
let message = 'Hey, this game is awesome! You should try it out!';

let bannedWords = ['awesome', 'try'];

let isClean = !bannedWords.some(word => message.toLowerCase().includes(word));

if (isClean) {
    console.log('Message is clean and can be sent.');
} else {
    console.log('Message contains banned words and cannot be sent.');
}

// D. String Formatting

let score = 2350;
let formattedScore = score.toLocaleString();

console.log(`Your score: ${formattedScore}`);
// Output: Your score: 2,350

// E. Password Encryption
const bcrypt = require('bcrypt');

let password = 'mypassword';
let saltRounds = 10;

bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store the hash in the database
    console.log('Hashed password:', hash);
});

// Later, when verifying the password
let hashedPassword = '...'; // Retrieved from the database
bcrypt.compare(password, hashedPassword, function (err, result) {
    if (result) {
        console.log('Password matches.');
    } else {
        console.log('Password does not match.');
    }
});


