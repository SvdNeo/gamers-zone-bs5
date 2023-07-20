// JavaScript code for event bubbling
const dashboard = document.getElementById('dashboard');

dashboard.addEventListener('click', function (event) {
    // Check the event target to identify the source element that triggered the event
    // console.log(event.target)
    // console.log(event.target.classList)
    if (event.target.classList.contains('game-card')) {
        const gameId = event.target.id;
        console.log(`Dashboard : Game card with ID ${gameId} clicked`);
    } else {
        console.log(`Clicked on other element which doesn't have game-card class`)
    }
}, true);


// JavaScript code for event propagation control
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        const gameId = this.id;
        console.log(`ForEach :  Game card with ID ${gameId} clicked`);
        // event.stopPropagation(); // Stop the event from bubbling further
        // event.preventDefault();
    });
});


const main = document.getElementById('main');

main.addEventListener('click',
    event => console.log(`Main`));