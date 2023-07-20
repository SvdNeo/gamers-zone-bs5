// The Event Loop is a critical part of the JavaScript runtime environment,
// responsible for handling asynchronous tasks and ensuring non - blocking behavior.
// It allows JavaScript to perform tasks like waiting for timers, handling user interactions,
// making network requests, and more, without freezing the main thread.

// JavaScript code here for the Event Loop
console.log('Start');

setTimeout(function () {
    console.log('Timeout 1 (200 ms)');
}, 200);

setTimeout(function () {
    console.log('Timeout 2 (0 ms)');
}, 0);

console.log('End');


function simulateAsyncOperation(gameId) {
    return new Promise((resolve) => {
        // Simulate an asynchronous operation, e.g., fetching data from the server
        setTimeout(() => {
            resolve(`Data for Game ${gameId}`);
        }, 1000);
    });
}

async function displayGameData(gameId) {
    const data = await simulateAsyncOperation(gameId);
    console.log(`Data received: ${data}`);
}

function handleClick(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('game-card')) {
        const gameId = clickedElement.id;
        console.log(`Game card with ID ${gameId} before displayGameData`);
        displayGameData(gameId);
        console.log(`Game card with ID ${gameId} after displayGameData`);
    }

}

const dashboard = document.getElementById('dashboard');
dashboard.addEventListener('click', handleClick);