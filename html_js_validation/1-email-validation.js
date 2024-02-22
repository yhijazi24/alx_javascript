function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emailForm');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (!validateEmail(email)) {
            event.preventDefault();
            errorElement.textContent = 'Please enter a valid email address.';
        }
    });
});
