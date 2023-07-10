class Game {
    constructor(title, genre, platform) {
        this.title = title;
        this.genre = genre;
        this.platform = platform;
    }

    play() {
        console.log(`Playing ${this.title} on ${this.platform}.`);
    }
}

class Player {
    constructor(name, age, username) {
        this.name = name;
        this.age = age;
        this.username = username;
    }

    joinGame(game) {
        console.log(`${this.username} joins the game ${game.title}.`);
    }
}

module.exports = {
    Game,
    Player
};
