var timeRemaining = 10;

while (timeRemaining > 0) {
    console.log("Time remaining: " + timeRemaining);
    timeRemaining--;
}

console.log("Time's up!");

var playerHealth = 100;

while (playerHealth > 0) {
    updateGame();
    playerHealth -= calculateEnemyDamage();
}

gameOver();
