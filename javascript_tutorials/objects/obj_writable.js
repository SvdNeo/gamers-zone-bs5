// Create a Game object constructor
function Game(title, genre, platform) {
    this.title = title;
    this.genre = genre;
    this.platform = platform;
}

// Create a new game instance
const game1 = new Game("The Legend of Zelda", "Action-Adventure", "Nintendo Switch");

// Define additional properties for the game instance
Object.defineProperties(game1, {
    platform: {
        value: 9.5,
        writable: false,
        enumerable: false
    },
    genre: {
        value: 2017,
        writable: false,
        enumerable: false
    }
});

// Modify the rating property
game1.rating = 9.8;

// Iterate over the properties of the game instance
for (let key in game1) {
    console.log(`${key}: ${game1[key]}`);
}

// Output:
// title: The Legend of Zelda
// genre: Action-Adventure
// platform: Nintendo Switch
// rating: 9.8
// releaseYear: 2017
