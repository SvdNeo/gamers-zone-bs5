const gameThumbnail = document.getElementById('gameThumbnail_img');

gameThumbnail.addEventListener('click', function () {
    // Open game details or perform an action
    console.log('Game thumbnail clicked!');
    gameThumbnail.src = "./player_icon.jpg"
});


const gameCard1 = document.getElementById('gameCard');

gameCard1.addEventListener('mouseover', function () {
    // Change background color or apply hover effect
    gameCard1.style.backgroundColor = 'lightblue';
});

const gameCard2 = document.getElementById('gameCard');

gameCard2.addEventListener('mouseout', function () {
    // Restore original background color or remove hover effect
    gameCard2.style.backgroundColor = '';
});


const draggableElement = document.getElementById('draggableElement');

draggableElement.addEventListener('mousedown', function () {
    // Perform actions for drag and drop
    console.log('Mouse button pressed on draggable element');
});

// JavaScript code for the context menu logic
const gameElement = document.getElementById('gameElement');
const contextMenu = document.getElementById('contextMenu');

gameElement.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    // Show the custom context menu at the mouse position
    showContextMenu(event.clientX, event.clientY);
});

gameElement.addEventListener('mouseleave', function () {
    // Hide the context menu when the mouse leaves the game element
    hideContextMenu();
});

function showContextMenu(x, y) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}

// // JavaScript code for the mouse events
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(function (card) {
    card.addEventListener('click', function () {
        console.log('Clicked on', this.id);
    });

    card.addEventListener('dblclick', function () {
        console.log('Double-clicked on', this.id);
    });

    card.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'lightblue';
    });

    card.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#109500';
    });

    card.addEventListener('mousedown', function () {
        console.log('Mouse button pressed on', this.id);
    });

    card.addEventListener('mouseup', function () {
        console.log('Mouse button released on', this.id);
    });

    card.addEventListener('mousemove', function () {
        console.log('Mouse moved over', this.id);
    });

    card.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        console.log('Right-clicked on', this.id);
    });

    card.addEventListener('wheel', function (event) {
        console.log('Mouse wheel scrolled on', this.id, 'with delta', event.deltaY);
    });
});

