// Function Declaration
function playGame() {
    console.log("Hi Team.!")
}

// playGame();
// Variable
let name = "The User";
// console.log(name)

// Function Expression - Anonymous
let gameFunc = function (playerName) {
    console.log(`${playerName} is playing Chess`)
}

// gameFunc(name)
// Function Expression - Named
let gameFuncNamed = function play(playerName) {
    console.log(`Named Expr : ${playerName} is playing Chess `)
}

// gameFuncNamed(name)

// () => {}
// Arrow functions
const gameFuncArrow = (playerName) => {
    console.log(`Arrow Func : ${playerName} is playing Chess `)
}
// gameFuncArrow(name)

const gameFuncArrow1 = playerName => {
    console.log(`Arrow Func no paranthesis: ${playerName} is playing Chess `)
}

// gameFuncArrow1(name)

const gameFuncArrow2 = playerName => console.log(`Arrow Func single line : ${playerName} is playing Chess `);

// gameFuncArrow2(name)

const player = {
    name: "Virat Kohli",
    play: function (name) {
        console.log(`${name ? name : this.name} is playing`)
    }
}

player.play("Dhoni");

function Player(name, typeOfSport) {
    this.name = name;
    this.typeOfSport = typeOfSport;
}

let player1 = new Player("Sachin", "Cricket")

let player2 = new Player("Federrer", "Tennis")

console.log(player1)
console.log(player2)
