
function chooseSecretNumber() {
  console.log('Choosing a number...');
  const number = 42;
  return number;
}

function getPlayerGuess() {
  let guess = prompt('Guess a number:');
  while (guess < 1 || guess > 100) {
    guess = prompt('Please guess a number between 1 and 100:');
  }

  return guess;
}

let secretNumber = chooseSecretNumber();
let playerGuess = getPlayerGuess();

while (playerGuess != secretNumber) {
  alert(`Sorry, ${playerGuess} is not the correct number.`);
  playerGuess = getPlayerGuess();
}

alert(`You win!  ${playerGuess} was the correct number.`);
