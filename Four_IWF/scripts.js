/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => {
            error.textContent = '';
        });

        // Validate Full Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').textContent = 'Full Name is required.';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value.trim();
        const phonePattern = /^[0-9]{10}$/;
        if (phone && !phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
            isValid = false;
        }

        // Validate Date of Birth
        const dob = document.getElementById('dob').value;
        if (dob === '') {
            document.getElementById('dobError').textContent = 'Date of Birth is required.';
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => {
            error.textContent = '';
        });

        // Validate Full Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').textContent = 'Full Name is required.';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value.trim();
        const phonePattern = /^[0-9]{10}$/;
        if (phone && !phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
            isValid = false;
        }

        // Validate Date of Birth
        const dob = document.getElementById('dob').value;
        if (dob === '') {
            document.getElementById('dobError').textContent = 'Date of Birth is required.';
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            // Display form data in an alert box (for demonstration purposes)
            alert(`Submitted Information:\n
                Full Name: ${name}\n
                Email: ${email}\n
                Phone Number: ${phone}\n
                Date of Birth: ${dob}\n
                Message: ${message}`);
        }
    });
});
