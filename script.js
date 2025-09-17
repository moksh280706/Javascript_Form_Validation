// app.js

const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Function to display error message
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
}

// Function to display success state
function showSuccess(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = '';
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}

// Validation Functions
function validateFullName() {
    const fullName = fullNameInput.value.trim();
    if (fullName.length < 5) {
        showError(fullNameInput, 'Name must be at least 5 characters long');
        return false;
    }
    showSuccess(fullNameInput);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (!email.includes('@')) {
        showError(emailInput, 'Please enter a valid email address');
        return false;
    }
    showSuccess(emailInput);
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    if (phone.length !== 10 || phone === '1234567890') {
        showError(phoneInput, 'Please enter a valid 10-digit phone number');
        return false;
    }
    showSuccess(phoneInput);
    return true;
}

function validatePassword() {
    const password = passwordInput.value;
    const fullName = fullNameInput.value.trim().toLowerCase();
    
    if (password.length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters long');
        return false;
    }
    if (password.toLowerCase() === 'password') {
        showError(passwordInput, 'Password cannot be "password"');
        return false;
    }
    if (password.toLowerCase().includes(fullName) && fullName.length > 0) {
        showError(passwordInput, 'Password cannot contain your name');
        return false;
    }
    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Passwords do not match');
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Check if all validations pass before submitting
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after successful submission
    }
});

// Real-time validation on input
fullNameInput.addEventListener('input', validateFullName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);