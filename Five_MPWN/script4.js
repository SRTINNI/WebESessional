function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('user-choice').textContent = 'Your choice: ' + userChoice;
    document.getElementById('computer-choice').textContent = 'Computer\'s choice: ' + computerChoice;
    document.getElementById('winner').textContent = 'Result: ' + result;
}
