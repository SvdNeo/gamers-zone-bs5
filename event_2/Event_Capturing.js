function handleCapture(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('game-card')) {
        const gameId = clickedElement.id;
        console.log(`Game card with ID ${gameId} captured during capturing phase`);
    }
}

document.addEventListener('click', handleCapture, true);

const gameCard2 = document.getElementById('game2');

function handleCapture(event) {
    const clickedElement = event.target;
    if (clickedElement === gameCard2) {
        console.log('Game card 2 captured during capturing phase');
        // Add your custom logic here for capturing phase handling
    }
}

gameCard2.addEventListener('click', handleCapture, true);

// JavaScript code for event bubbling
// const dashboard = document.getElementById('dashboard');

dashboard.addEventListener('click', function (event) {
    // Check the event target to identify the source element that triggered the event
    if (event.target.classList.contains('game-card')) {
        const gameId = event.target.id;
        console.log(`Single Event Capture: Game card with ID ${gameId} clicked`);
    } else {
        console.log(`Clicked outside `, event.target)
    }
}, true);


// // JavaScript code for event propagation control
// const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        const gameId = this.id;
        console.log(`ForEach :  Game card with ID ${gameId} clicked`);
        // event.stopPropagation(); // Stop the event from bubbling further
        // event.preventDefault();
    }, true);
});


