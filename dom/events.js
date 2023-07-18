function handleClick() {
    console.log('Button clicked!');
}

// Attaching a click event to the button
document.getElementById('myButton').addEventListener('click', handleClick);

// Detaching the click event from the button
setTimeout(() => document.getElementById('myButton').removeEventListener('click', handleClick), 5000)

// Creating a new list item
var newListItem = document.createElement('li');
newListItem.textContent = 'Game 4';

// Appending the new list item to the existing list
document.getElementById('gameList').appendChild(newListItem);

// Removing an existing list item
var listItemToRemove = document.getElementById('gameList').getElementsByTagName('li')[2];
document.getElementById('gameList').removeChild(listItemToRemove);

// Replacing an existing list item with a new one
var existingListItem = document.getElementById('gameList').getElementsByTagName('li')[0];
var newReplacementItem = document.createElement('li');
newReplacementItem.textContent = 'Game 1 (Updated)';
setTimeout(() =>
    document.getElementById('gameList').replaceChild(newReplacementItem, existingListItem), 2000)

// // Changing the source attribute of an image
// document.getElementById('gameImage').setAttribute('src', 'game.jpg');

// // Removing the alt attribute from an image
setTimeout(() =>
    document.getElementById('gameImage').removeAttribute('alt'), 2000)

function addGame() {
    // Creating a new game card
    var newGameCard = document.createElement('div');
    newGameCard.className = 'game-card';
    newGameCard.innerHTML = '<h2>New Game</h2><p>This is a newly added game by setTimeout</p>';

    // Appending the new game card to the game container
    document.getElementById('gameContainer').appendChild(newGameCard);
}

// // Adding a new game card after 3 seconds using setTimeout()
// setTimeout(addGame, 2000);

var timeoutId = setTimeout(addGame, 2000);

// To cancel the execution:
setTimeout(() => clearTimeout(timeoutId), 3000)


var gameCount = 1;

function addNewGame() {
    // Creating a new game card
    var newGameCard = document.createElement('div');
    newGameCard.className = 'game-card';
    newGameCard.innerHTML = `<h2>New Game ${gameCount}</h2><p>This is a newly added game by setInterval </p>`;

    // Appending the new game card to the game container
    document.getElementById('gameContainer').appendChild(newGameCard);

    gameCount++;
}

// // Adding a new game card every 3 seconds using setInterval()
var intervalId = setInterval(addNewGame, 3000);

// Stopping the interval after 10 seconds
setTimeout(function () {
    clearInterval(intervalId);
}, 10000);

