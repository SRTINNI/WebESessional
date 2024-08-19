let randomNumber;

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    console.log('Random number:', randomNumber); // For debugging purposes
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        feedback.textContent = 'Please enter a number between 1 and 10.';
        feedback.style.color = 'red';
        return;
    }

    if (userGuess === randomNumber) {
        feedback.textContent = 'Congratulations! You guessed the right number!';
        feedback.style.color = 'green';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'blue';
    } else {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    }
}

function resetGame() {
    startGame();
    document.getElementById('guess').value = '';
    document.getElementById('feedback').textContent = '';
}

// Initialize the game when the page loads
window.onload = startGame;
