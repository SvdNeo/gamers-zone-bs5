function handleCapture(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('game-card')) {
        const gameId = clickedElement.id;
        console.log(`Game card with ID ${gameId} captured during capturing phase`);
    }
}

function handleBubble(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('game-card')) {
        const gameId = clickedElement.id;
        console.log(`Game card with ID ${gameId} handled during bubbling phase`);
    }
}

const dashboard = document.getElementById('dashboard');
dashboard.addEventListener('click', handleCapture, true);
dashboard.addEventListener('click', handleBubble, false);