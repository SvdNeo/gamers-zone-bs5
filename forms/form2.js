// JavaScript code for form validation

const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const zipcodeInput = document.getElementById('zipcode');

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

    if (!isValidPhone(phoneInput.value.trim())) {
        displayError('phoneError', 'Invalid phone number (e.g., 8844883344).');
        isValid = false;
    }

    if (!isValidZipcode(zipcodeInput.value.trim())) {
        displayError('zipcodeError', 'Invalid ZIP code (e.g., 580066).');
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
        // Submit form if all fields are valid
        if (isValid) {
            setTimeout(() =>
                form.submit(), 2000)
        }
        console.log('Form submitted successfully.');
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

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidZipcode(zipcode) {
    const zipcodeRegex = /^\d{6}?$/;
    return zipcodeRegex.test(zipcode);
}
