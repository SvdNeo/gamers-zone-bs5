// JavaScript code for the keyboard events
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function (event) {
    console.log('Search input key down:', event.key);
});

searchInput.addEventListener('keyup', function (event) {
    console.log('Search input key up:', event.key);
});

searchInput.addEventListener('keypress', function (event) {
    console.log('Search input key press:', event.key);
});

