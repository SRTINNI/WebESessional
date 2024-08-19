function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    let userScore = 0;
    let computerScore = 0;

    // Determine the result based on user and computer choices
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You win!';
        userScore = 1;   // Winning: Player gains 1 point
        computerScore = -1; // Losing: Computer loses 1 point
    } else {
        result = 'Computer wins!';
        userScore = -1;  // Losing: Player loses 1 point
        computerScore = 1; // Winning: Computer gains 1 point
    }

    // Update the display with the choices and result
    document.getElementById('user-choice').textContent = 'Your choice: ' + userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    document.getElementById('computer-choice').textContent = 'Computer\'s choice: ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    document.getElementById('winner').textContent = 'Result: ' + result;
}
