function validatePassword(password) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (
        password.length >= 8 &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('passwordForm');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;

        if (!validatePassword(password)) {
            event.preventDefault();
            errorElement.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
        }
    });
});
