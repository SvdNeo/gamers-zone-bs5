function createGameManager() {
    let players = [];
    let gameState = 'waiting';

    function getPlayerIndex(name) {
        return players.findIndex((player) => player.name === name);
    }

    function addPlayer(name) {
        if (getPlayerIndex(name) === -1) {
            players.push({ name, score: 0 });
        }
    }

    function removePlayer(name) {
        const index = getPlayerIndex(name);
        if (index !== -1) {
            players.splice(index, 1);
        }
    }

    function updateScore(name, points) {
        const index = getPlayerIndex(name);
        if (index !== -1) {
            players[index].score += points;
        }
    }

    function startGame() {
        gameState = 'running';
        console.log('Game has started!');
    }

    function endGame() {
        gameState = 'finished';
        console.log('Game over!');
    }

    function getGameState() {
        return gameState;
    }

    function getPlayerScore(name) {
        const index = getPlayerIndex(name);
        return index !== -1 ? players[index].score : null;
    }

    function getPlayers() {
        return players.map((player) => player.name);
    }

    return {
        addPlayer,
        removePlayer,
        updateScore,
        startGame,
        endGame,
        getGameState,
        getPlayerScore,
        getPlayers,
    };
}

// Create a new game manager
const gameManager = createGameManager();

// Add players
gameManager.addPlayer('Player 1');
gameManager.addPlayer('Player 2');
gameManager.addPlayer('Player 3');

// Start the game
gameManager.startGame();

// Simulate game actions
gameManager.updateScore('Player 1', 50);
gameManager.updateScore('Player 2', 30);
gameManager.updateScore('Player 3', 20);

// End the game
gameManager.endGame();

// Get the final scores and players
const players = gameManager.getPlayers();
console.log('Final Scores:');
players.forEach((player) => {
    console.log(`${player}: ${gameManager.getPlayerScore(player)}`);
});
