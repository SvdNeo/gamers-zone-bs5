function createPlayer(name) {
    let health = 100;

    return {
        getName: function () {
            return name;
        },
        getHealth: function () {
            return health;
        },
        takeDamage: function (amount) {
            health -= amount;
        },
        heal: function (amount) {
            health += amount;
        },
    };
}

const player1 = createPlayer('Player 1');
console.log(player1.getName()); // Output: "Player 1"
console.log(player1.getHealth()); // Output: 100

player1.takeDamage(20);
console.log(player1.getHealth()); // Output: 80

player1.heal(10);
console.log(player1.getHealth()); // Output: 90
