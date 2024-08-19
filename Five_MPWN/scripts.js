document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Clear previous errors
            document.querySelectorAll('.error').forEach(error => {
                error.textContent = '';
            });

            // Validate inputs
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                isValid = false;
                alert('Name is required.');
            }

            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                alert('Invalid email address.');
            }

            const message = document.getElementById('message').value.trim();
            if (message === '') {
                isValid = false;
                alert('Message is required.');
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if invalid
            } else {
                alert('Form submitted successfully!');
            }
        });
    }
});
