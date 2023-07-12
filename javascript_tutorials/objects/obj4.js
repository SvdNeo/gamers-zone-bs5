function Game(title, genre, platform) {
    this.title = title;
    this.genre = genre;
    this.platform = platform;
}

const game1 = new Game("The Legend of Zelda", "Action-Adventure", "Nintendo Switch");
const game2 = new Game("God of War", "Action-Adventure", "PlayStation 4");
const game3 = new Game("Super Mario Odyssey", "Platformer", "Nintendo Switch");

Object.defineProperty(game1, "rating", {
    value: 9.5,
    writable: false,
    enumerable: false
});

Object.defineProperty(game2, "rating", {
    value: 9.8,
    writable: false,
    enumerable: true
});

Object.defineProperty(game3, "rating", {
    value: 9.7,
    writable: true,
    enumerable: true
});

game1.rating = 18.0;

const games = [game1, game2, game3];

for (let i = 0; i < games.length; i++) {
    console.log(`Game ${i + 1}:`);
    for (let key in games[i]) {
        console.log(`${key}: ${games[i][key]}`);
    }
    console.log("----------------------");
}
