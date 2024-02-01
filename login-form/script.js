function isNameValid(firstName, lastName) {
    return firstName.trim() !== '' && lastName.trim() !== '';
}

function isPhoneNumberValid(phoneNumber) {
    return /^[0-9]+$/.test(phoneNumber);
}

function isEmailValid(email) {
    // A simple email format check, not a perfect one
    return /\S+@\S+\.\S+/.test(email);
}

function isPasswordValid(password) {
    const isLengthValid = password.length > 10;
    const containsNumber = /[0-9]/.test(password);
    const containsSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const containsCapitalLetter = /[A-Z]/.test(password);

    return isLengthValid && containsNumber && containsSymbol && containsCapitalLetter;
}

document.querySelector('.signup-btn').addEventListener('click', function (event) {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const emailAddress = document.getElementById('emailaddress').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    // Check all form field validations
    if (!isNameValid(firstName, lastName) ||
        !isPhoneNumberValid(phoneNumber) ||
        !isEmailValid(emailAddress) ||
        !isPasswordValid(password) ||
        password !== confirmPassword) {
        // Display an error message or take some action for invalid input
        alert('Invalid input. Please check the highlighted fields.');
        event.preventDefault(); // Prevent form submission
    }
});
