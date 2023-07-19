// JavaScript code for the form events
const addCardForm = document.getElementById('addCardForm');

addCardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted');


});


const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');

titleInput.addEventListener('input', function (event) {
    console.log('Title input changed:', this.value);
});

descriptionInput.addEventListener('input', function (event) {
    console.log('Description input changed:', this.value);
});

titleInput.addEventListener('change', function (event) {
    console.log('Title input changed and lost focus:', this.value);
});

descriptionInput.addEventListener('change', function (event) {
    console.log('Description input changed and lost focus:', this.value);
});

titleInput.addEventListener('focus', function (event) {
    console.log('Title input focused');
});

descriptionInput.addEventListener('focus', function (event) {
    console.log('Description input focused');
});

titleInput.addEventListener('blur', function (event) {
    console.log('Title input blurred');
});

descriptionInput.addEventListener('blur', function (event) {
    console.log('Description input blurred');
});

titleInput.addEventListener('select', function (event) {
    console.log('Title input text selected:', this.value);
});

descriptionInput.addEventListener('select', function (event) {
    console.log('Description input text selected:', this.value);
});