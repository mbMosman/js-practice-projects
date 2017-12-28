
function chooseSecretNumber() {
  console.log('Choosing a number...');
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
}

function getPlayerGuess() {
  let guess = $('#in-guess').val();
  $('#in-guess').val('');
  if (guess < 1 || guess > 100) {
    guess = 0;
    alert('Please guess a number between 1 and 100.');
  }

  return guess;
}

function playGame() {

  let secretNumber = chooseSecretNumber();
  let winCount = 0;

  $('#btn-reset').on('click', function (event) {
    event.preventDefault();
    secretNumber = chooseSecretNumber();
    $('#form-guess').removeClass('hide');
    $('#form-reset').addClass('hide');
    $('#output').empty();
  });

  $('#btn-guess').on('click', function (event) {

    event.preventDefault();

    let playerGuess = getPlayerGuess();
    if (playerGuess != 0) {
      $('#output').removeClass('hide');
      if (playerGuess > secretNumber) {
        $('#output').append(`<p>Sorry, ${playerGuess} is not the correct number. Guess lower.</p>`);
      } else if (playerGuess < secretNumber) {
        $('#output').append(`<p>Sorry, ${playerGuess} is not the correct number. Guess higher.</p>`);
      } else {
        $('#output').append(`<p>You win! ${playerGuess} was the correct number.</p>`);
        winCount += 1;
        $('#win-count').text(winCount);
        $('#form-guess').addClass('hide');
        $('#form-reset').removeClass('hide');
      }
    }

  });
}

$(document).ready(playGame);
