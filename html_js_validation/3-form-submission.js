document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('submitForm');

    function handleFormSubmit(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        const errorElement = document.createElement('p');
        errorElement.style.color = 'red';
        errorElement.id = 'errorMessage';

        if (name === '' || email === '') {
            errorElement.textContent = 'Please fill in all required fields';
            form.appendChild(errorElement);
            return;
        }

        const previousError = document.getElementById('errorMessage');
        if (previousError) {
            form.removeChild(previousError);
        }

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Form submitted successfully!';
        form.appendChild(successMessage);
    }

    form.addEventListener('submit', handleFormSubmit);
});
