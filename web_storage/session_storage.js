// Store data
sessionStorage.setItem('score', '100');

// Retrieve data
const score = sessionStorage.getItem('score');

// Remove data
sessionStorage.removeItem('score');

// Clear all data in Session Storage
sessionStorage.clear();

// Storing data in Session Storage
sessionStorage.setItem('formStep1', JSON.stringify({ name: 'John', email: 'john@example.com' }));

// Retrieving data from Session Storage
const formStep1Data = JSON.parse(sessionStorage.getItem('formStep1'));

// Removing data from Session Storage
sessionStorage.removeItem('formStep1');

// Clearing all data from Session Storage
sessionStorage.clear();
