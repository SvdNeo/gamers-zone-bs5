const { Game, Player } = require('./gamers');

const game = new Game('The Legend of Zelda', 'Action-Adventure', 'Nintendo Switch');
game.play(); // Output: Playing The Legend of Zelda on Nintendo Switch.

const player = new Player('Bharat', 25, 'bharat007');
player.joinGame(game); // Output: bharat007 joins the game The Legend of Zelda.
