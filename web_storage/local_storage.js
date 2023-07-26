// Store data
localStorage.setItem('username', 'LAKSHMIKANT');

// Retrieve data
const username = localStorage.getItem('username');

// Remove data
localStorage.removeItem('username');

// Clear all data in Local Storage
localStorage.clear();


// Storing data in Local Storage
localStorage.setItem('cartItems', JSON.stringify(['item1', 'item2', 'item3']));

// Retrieving data from Local Storage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Removing data from Local Storage
localStorage.removeItem('cartItems');

// Clearing all data from Local Storage
localStorage.clear();
