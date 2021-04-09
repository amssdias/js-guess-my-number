'use strict';

const body = document.querySelector('body');
const numberSecret = document.querySelector('.number');
const displayedScore = document.querySelector('.score');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('No number!');
    }
    // When player wins
    else if (guess == secretNumber) {
        displayMessage('Correct number!');

        body.style.backgroundColor = '#60b347';
        numberSecret.textContent = secretNumber;

        numberSecret.style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            displayedScore.textContent = score;
        } else {
            displayMessage('You lost the game');
            displayedScore.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    displayedScore.textContent = score;
    numberSecret.textContent = '?';
    document.querySelector('.guess').value = '';
    body.style.backgroundColor = '#222';
    numberSecret.style.width = '15rem';
});
