// File: main.js
const { Game, VideoGame, Player } = require('./gamers');

const game = new Game('The Legend of Zelda', 'Action-Adventure', 'Nintendo Switch');
game.play(); // Output: Playing The Legend of Zelda on Nintendo Switch.

const multiplayerGame = new VideoGame('Fortnite', 'Battle Royale', 'PC', true);
multiplayerGame.play(); // Output: Playing Fortnite on PC.
multiplayerGame.toggleMultiplayer(); // Output: Multiplayer mode disabled for Fortnite.
multiplayerGame.toggleMultiplayer(); // Output: Multiplayer mode enabled for Fortnite.

const player1 = new Player('John Doe', 25, 'johndoe123');
player1.joinGame(game);
player1.joinGame(multiplayerGame);

const player2 = new Player('Jane Smith', 22, 'janesmith789');
player2.joinGame(multiplayerGame);

player1.displayGamesPlayed(); // Output: John Doe's Games Played: 1. The Legend of Zelda 2. Fortnite
player2.displayGamesPlayed(); // Output: Jane Smith's Games Played: 1. Fortnite
