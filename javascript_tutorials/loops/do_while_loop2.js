var choice;

do {
    choice = getPlayerChoice();
} while (choice !== "A" && choice !== "B" && choice !== "C");

console.log("Valid choice: " + choice);

var playerInput;

do {
    playerInput = getPlayerInput();
    processPlayerMovement(playerInput);
} while (!isValidMovement(playerInput));
