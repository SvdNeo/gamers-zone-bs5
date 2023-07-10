// File: gamers.js

// Parent class representing a Game
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

// Child class representing a VideoGame
class VideoGame extends Game {
    constructor(title, genre, platform, multiplayer) {
        super(title, genre, platform);
        this.multiplayer = multiplayer;
    }

    toggleMultiplayer() {
        this.multiplayer = !this.multiplayer;
        console.log(`Multiplayer mode ${this.multiplayer ? 'enabled' : 'disabled'} for ${this.title}.`);
    }
}

// Child class representing a Player
class Player {
    constructor(name, age, username) {
        this.name = name;
        this.age = age;
        this.username = username;
        this.gamesPlayed = [];
    }

    joinGame(game) {
        console.log(`${this.username} joins the game ${game.title}.`);
        this.gamesPlayed.push(game);
    }

    displayGamesPlayed() {
        console.log(`${this.name}'s Games Played:`);
        this.gamesPlayed.forEach((game, index) => {
            console.log(`${index + 1}. ${game.title}`);
        });
    }
}

module.exports = {
    Game,
    VideoGame,
    Player
};
