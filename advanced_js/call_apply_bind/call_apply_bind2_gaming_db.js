const gamingDashboard = {
    player: "Vishal",
    score: 1000,

    updateScore: function (points) {
        this.score += points;
        console.log(`${this.player}'s score: ${this.score}`);
    },

    updatePlayer: function (newPlayer) {
        this.player = newPlayer;
        console.log(`Player updated to: ${this.player}`);
    },

    displayDashboard: function () {
        console.log(`Player: ${this.player}, Score: ${this.score}`);
    },
};

// Example using apply
const newPlayer = { player: "Kavya", score: 800 };
gamingDashboard.updateScore.apply(newPlayer, [200]);
// Output: Kavya's score: 1000 (800 + 200)

// Example using call
gamingDashboard.updatePlayer.call(newPlayer, "Arjun");
// Output: Player updated to: Arjun

// Example using bind
const updateScoreForNewPlayer = gamingDashboard.updateScore.bind(newPlayer, 100);
updateScoreForNewPlayer();
// Output: Arjun's score: 900 (800 + 100)

gamingDashboard.displayDashboard();
// Output: Player: Arjun, Score: 900
