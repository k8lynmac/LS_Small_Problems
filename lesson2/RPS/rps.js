const rlsync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
function prompt(message) {
  console.log(`=> ${message}`);
}


while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`)
  let choice = rlsync.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt('That won\'t work!')
  choice = rlsync.question();
}

let random = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[random];

prompt(`You chose ${choice}, computer chose ${computerChoice}`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
} else if ((choice === 'rock' && computerChoice === 'paper') ||
           (choice === 'paper' && computerChoice === 'scissors') ||
           (choice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
} else {
  prompt('It\'s a tie');
}

prompt('Do you want to play again (y/n)?');
let answer = rlsync.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  prompt('Please enter "y" or "n".');
  answer = rlsync.question().toLowerCase();
}

if (answer[0] !== 'y') break;
}
