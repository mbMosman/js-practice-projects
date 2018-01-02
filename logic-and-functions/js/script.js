//--------------------------------------------------------------------
// Problem 1
// --------------

// Part 1
// --------------
// Make a function called "calculateMoonWeight" that:
//   - takes a single input parameter - weight on earth
//   - calculates the equivalent weight on the moon (16.5% of earth weight)
//   - returns the weight on the moon, rounded to show 1 decimal place

function calculateMoonWeight(earthWeight) {
  let moonWeight = (earthWeight * 0.165);
  return moonWeight.toFixed(1);
}

// Part 2
// --------------
// Test your function.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
console.log(document.getElementById('btn-moon-weight'));
document.getElementById('btn-moon-weight').addEventListener('click', function () {
  console.log('Calculating Moon Weight');

  // 1. Prompt to have a weight entered.
  let weight = prompt('Please enter your weight: ');

  // 2. Call your calculateMoonWeight function to get the moon weight.
  let moonWeight = calculateMoonWeight(weight);

  // 3. Show an alert with the moon weight.
  alert(`Your weight on the moon would be ${moonWeight}`);

});
//--------------------------------------------------------------------
// End Problem 1


//--------------------------------------------------------------------
// Problem 2
// --------------

// Part 1
// --------------
// Make a function called "calculateDogHumanAge" that:
//   - takes a single input parameter (that might be a decimal)
//   - returns the human age, rounded to 2 decimal places
//
// Use the following rules to do the calculation:
//   - For the first two years, a dog year is equal to 10.5 human years.
//   - After that, each dog year equals 4 human years.
// FYI: This calculation is for fun, but is based on studies that indicate dogs,
// except maybe larger breeds, develop more quickly in the first two years of life.

function calculateDogHumanAge(years) {
  let humanYears = 0;
  if (years < 2) {
    humanYears = years * 10.5;
  } else {
    humanYears = 2 * 10.5;
    humanYears += (years - 2) * 4;
  }

  return humanYears.toFixed(2);
}

// Part 2
// --------------
// Test your function.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
document.getElementById('btn-dog-age').addEventListener('click', function () {
  console.log('Calculating dog age');

  // 1. Prompt to have a dog's age (in years) entered.
  let age = prompt('How old is your dog?');

  // 2. Call your function to get the dog's equivalent human age.
  let humanAge = calculateDogHumanAge(age);

  // 3. Show an alert that say's both the dog's age & equivalent human age.
  alert(`Your dog's equivalent human age is ${humanAge}.`);
});

// -------------------------------------------------------------------
// End Problem 2


//--------------------------------------------------------------------
// Problem 3
// --------------

// Part 1
// --------------
// Make a function that will tell you if the first and last letter of a string are the same.
//  - take in a string as an input parameter
//  - return a boolean true if the first & last letter is the same, false otherwise.
function firstCharSameAsLast(string) {

  if (string.length > 0) {
    let first = string[0];
    let last = string[string.length - 1];
    return first === last;
  }

  return false;
}

// Part 2
// --------------
// Make a function that will tell you if a letter is a vowel or not.
//  - take in a letter as an input parameter
//  - return a boolean true if the letter is a vowel, false otherwise.
function isVowel(char) {

  let lower = char.toLowerCase();
  if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
    return true;
  }

  return false;
}

// Part 3
// --------------
// Make a function to determine how many times letters occur in a word.
//  - take in a word as an input parameter
//  - return back a JavaScript Map that tracks the number of occurences there are
//    for each letter in the word. Letters not in the word, should not be tracked.
function countLetterOccurences(word) {
  let map = new Map();
  for (letter of word) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1)
    } else {
      map.set(letter, 1)
    }
  }

  return map;
}

// Part 4
// --------------
// Write the script.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
document.getElementById('btn-name-fun').addEventListener('click', function () {
  console.log('Determining name facts');

  // 1. Prompt to have the person enter their name.
  //    - Use the trim function to ensure no leading or trailing spaces are kept.
  name = prompt('Please enter your name: ');
  name = name.trim();

  // 2. Show an alert to say how many letters are in the name.
  //    - (Extra: do not count any spaces, i.e. Jane Doe is 7 letters not 8.)
  alert(`${name}, your name contains ${name.length} letters.`);

  // 3. Use your function from part 1 above to determine if the first and last letters
  //    of the name are the same. If it does, then show an alert saying it's cool that
  //    their name starts and ends with the same letter.
  //    Do nothing if their name does NOT start and end with the same letter
  if (firstCharSameAsLast(name)) {
    alert(`That's cool, your name starts and ends with the same letter.`);
  }

  // 4. Count the number of vowels in the name.
  //    Use a loop to examine each character in the string and your function from
  //    Part 2 to check if the character is a vowel or not.
  let vowelCount = 0;
  let consonantCount = 0;
  for (letter of name) {
    if (isVowel(letter)) {
      vowelCount += 1;
    } else if (letter !== ' ') {
      consonantCount += 1;
    }
  }

  // 5. Show an alert to say how many letters are vowels & how many are consonants.
  //    - (Extra: do not count spaces, i.e. Jane Doe is 7 letters, 4 vowels, 3 consonants.
  alert(`Your name contains ${vowelCount} vowels and ${consonantCount} consonants.`);

  // 6. Use your function from Part 3 to identify how many times each letter appears in the name.
  //    For every letter that occurs more than once, show an alert to say the letter and
  //    how many times it was found in the name.
  //    If no letter occurs more than once, say that there are no duplicate letters.
  let occurences = countLetterOccurences(name);
  let messageDisplayed = false;
  for (key of occurences.keys()) {
    let count = occurences.get(key);
    if (count > 1) {
      alert(`Your name contains ${count} ${key}'s.`);
      messageDisplayed = true;
    }
  }

  if (messageDisplayed == false) {
    alert('Your name does not contain any duplicate letters.');
  }

});
