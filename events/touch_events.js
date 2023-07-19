// JavaScript code for the touch events
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(function (card) {
    card.addEventListener('touchstart', function (event) {
        console.log('Touch start on', this.id);
    });

    card.addEventListener('touchend', function (event) {
        console.log('Touch end on', this.id);
    });

    card.addEventListener('touchmove', function (event) {
        console.log('Touch move on', this.id);
    });

    card.addEventListener('touchcancel', function (event) {
        console.log('Touch cancel on', this.id);
    });
});