// JavaScript code for form validation

const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Reset errors
    const errorElements = document.getElementsByClassName('invalid-feedback');
    Array.from(errorElements).forEach(element => element.textContent = '');

    // Reset invalid class
    const formControls = document.getElementsByClassName('form-control');
    Array.from(formControls).forEach(control => {
        control.classList.remove('is-invalid');
        control.classList.remove('is-valid');
    });

    // Validate each field
    let isValid = true;

    if (usernameInput.value.trim() === '') {
        displayError('usernameError', 'Username is required.');
        isValid = false;
    }

    if (!isValidEmail(emailInput.value.trim())) {
        displayError('emailError', 'Invalid email address.');
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // Add valid or invalid class to form controls
    if (isValid) {
        Array.from(formControls).forEach(control => control.classList.add('is-valid'));
    } else {
        Array.from(formControls).forEach(control => control.classList.add('is-invalid'));
    }

    // Submit form if all fields are valid
    if (isValid) {
        setTimeout(() =>
            form.submit(), 1000)
    }
}

function displayError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}
