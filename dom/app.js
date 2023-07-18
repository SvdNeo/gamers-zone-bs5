// Accessing the element with ID "game-info"
var gameInfoElement = document.getElementById("game-info");

// Modifying the content of the selected element
gameInfoElement.innerHTML += "<p>New content added dynamically!</p>";

// Modifying the style of the selected element
gameInfoElement.style.backgroundColor = "yellow";


// Accessing elements with the class name "game-card"
var gameCards = document.getElementsByClassName("game-card");

// Modifying the selected elements
for (var i = 0; i < gameCards.length; i++) {
    gameCards[i].style.border = "4px solid blue";
}

// Accessing elements with the tag name "div"
var gameDivs = document.getElementsByTagName("div");

// Modifying the selected elements
for (var i = 0; i < gameDivs.length; i++) {
    console.log(gameDivs[i].classList)
    gameDivs[i].classList.add("highlight");
}

// Accessing the element with the CSS selector ".game-card-fav"
var gameCardElement = document.querySelector(".game-card-fav");

// Modifying the content of the selected element
gameCardElement.innerHTML += "<p>New content added dynamically!</p>";

// Modifying the style of the selected element
gameCardElement.style.border = "4px solid fuchsia";

// Accessing elements with the CSS selector ".game-card"
var gameCards = document.querySelectorAll(".game-card");

// Modifying the selected elements with game numbers 8 and 9
gameCards.forEach(function (card) {
    var gameNumber = card.querySelector("h2").textContent;
    if (gameNumber === "Game 8" || gameNumber === "Game 9") {
        card.style.border = "2px solid red";
        card.style.backgroundColor = "yellow";
        card.style.fontWeight = "bold";
    }
});

// Creating a new game card for game 6
// var newGameCard = document.createElement("div");
// newGameCard.className = "game-card";

// var gameTitle = document.createElement("h2");
// gameTitle.textContent = "Game 6";
// newGameCard.appendChild(gameTitle);

// var gameDescription = document.createElement("p");
// gameDescription.textContent = "This is the sixth game description.";
// newGameCard.appendChild(gameDescription);

// // // Appending the new game card to the "Gamers Zone"
// var gamersZone = document.querySelector("body");
// gamersZone.appendChild(newGameCard);

// // Inserting the new game card after the specific div with id "insertion-point"


// Creating a new game card for game 6
var newGameCard = document.createElement("div");
newGameCard.className = "game-card";

var gameTitle = document.createElement("h2");
gameTitle.textContent = "Game 6";
newGameCard.appendChild(gameTitle);

var gameDescription = document.createElement("p");
gameDescription.textContent = "This is the sixth game description.";
newGameCard.appendChild(gameDescription);

// var insertionPoint = document.getElementById("insertion-point-after");
// var gamersZone = insertionPoint.parentNode;
// gamersZone.insertBefore(newGameCard, insertionPoint.nextSibling);

// // Inserting the new game card after the fifth div element
var gameCards = document.getElementsByClassName("game-card-fav");
var insertionIndex = 1;

if (gameCards.length >= insertionIndex + 1) {
    var insertionPoint = gameCards[insertionIndex];
    var gamersZone = insertionPoint.parentNode;
    gamersZone.insertBefore(newGameCard, insertionPoint.nextSibling);
} else {
    console.log("Insufficient number of game cards to insert after index " + insertionIndex);
}


// Creating a new game card for game 7
var newGameCard2 = document.createElement("div");
newGameCard2.className = "game-card";

var gameTitle = document.createElement("h2");
gameTitle.textContent = "Game 7";
newGameCard2.appendChild(gameTitle);

var gameDescription = document.createElement("p");
gameDescription.textContent = "This is the seventh game description.";
newGameCard2.appendChild(gameDescription);

// Inserting the new game card after the specific div with id "insertion-point-before"
var insertionPoint = document.getElementById("insertion-point-before");
var gamersZone = insertionPoint.parentNode;
gamersZone.insertBefore(newGameCard2, insertionPoint.nextSibling);

