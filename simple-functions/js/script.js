//--------------------------------------------------------------------
// Problem 1
// --------------

// Part 1
// --------------
// Make a function called "calculateMoonWeight" that:
//   - takes a single input parameter - weight on earth
//   - returns the equivalent weight on the moon (17% of earth weight)



// Part 2
// --------------
// Test your function.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
document.getElementById('btn-moon-weight').addEventListener('click', function () {
  console.log('Calculating Moon Weight');

  // 1. Prompt to have a weight entered.

  // 2. Call your calculateMoonWeight function to get the moon weight.

  // 3. Show an alert with the moon weight.

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
//   - returns the human age
//
// Use the following rules to do the calculation:
//   - For the first two years, a dog year is equal to 10.5 human years.
//   - After that, each dog year equals 4 human years.
// FYI: This calculation is for fun, but is based on studies that indicate dogs,
// except maybe larger breeds, develop more quickly in the first two years of life.


// Part 2
// --------------
// Test your function.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
document.getElementById('btn-dog-age').addEventListener('click', function () {
  console.log('Calculating dog age');

  // 1. Prompt to have a dog's age (in years) entered.

  // 2. Call your function to get the dog's equivalent human age.

  // 3. Show an alert that say's both the dog's age & equivalent human age.

});

// -------------------------------------------------------------------
// End Problem 2


//--------------------------------------------------------------------
// Problem 3
// --------------

// Part 1
// --------------
// Make a function that will tell you if a letter is a vowel or not.
//  - take in a letter as an input parameter
//  - return a boolean true if the letter is a vowel, false otherwise.


// Part 2
// --------------
// Test your function.  The code provided runs the code when the button is clicked.
// Fill in the code after the comments below.
document.getElementById('btn-moon-weight').addEventListener('click', function () {
  console.log('Calculating Moon Weight');

  // 1. Prompt to have the person enter their name.
  //    - Use the trim function to ensure no leading or trailing spaces are kept.

  // 2. Show an alert to say how many letters are in the name.
  //    - (Extra: do not count any spaces, i.e. Jane Doe is 7 letters not 8.)

  // 3. IF their name starts and ends with the same letter, then show an alert
  //    telling them it is cool that their name starts and ends with the same letter.
  //    Do nothing if their name does NOT start and end with the same letter

  // 4. Count the number of vowels in the name.
  //    Use a loop to examine each character in the string to check if it is a vowel.

  // 5. Show an alert to say how many letters are vowels & how many are consonants.
  //    - (Extra: do not count spaces, i.e. Jane Doe is 7 letters, 4 vowels, 3 consonants.

  // 6. Count the number of times each letter appears in the name.
  //    Use a 2nd loop and a JavaScript Map to do this.  More info on Map:
  //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


});

/*
 * Problem 4
 * -------------------------------------------------------------------
 * Make a function that:
 *   - takes a single input parameter of a word
 *   - returns the number of characters it contains (it's length)
 *
 * Note the reading shows how to get the length of a string.
 */


/*
 * Problem 4 setup
 * -------------------------------------------------------------------
 * Look at the examples below (in the DO NOT MODIFY)
 * Follow their example, and modify it to complete this setup code
 */
// Clear result field on input focus
document.getElementById("string").addEventListener("focus", function(){
    // Get the length form field and clear out the value

});

// Setup button click to call function and update output field
document.getElementById("submit4").addEventListener("click", function(){
    //Log a message for your function


    // Get the input value from the form & log the value


    // Call your function that you defined above and pass in the input value
    // Save the returned value as a variable


    // Use the variable to set the output form field value & log the result to the console


});


/**********************************************
 * DO NOT MODIFY THE CODE BELOW
 *
 * But do look at it to see what it is doing.
 *
 **********************************************/
assignmentName = "HW2 - Logic & Functions"
console.log( assignmentName );
console.log();

// Problem 1 setup
//-----------------------------------
document.getElementById('btn-moon-weight').addEventListener('click', function() {
    console.log("Calculating Moon Weight");
    calculateMoonWeight();
    console.log( "Moon Weight = " + moonWeight );
    document.getElementById("moon-weight").value = moonWeight;
});


// Problem 2 setup
//-----------------------------------
// Clear result field on input focus
document.getElementById("dog-age").addEventListener("focus", function(){
    document.getElementById("human-age").value = "";
});

// Setup button click to call function and update output field
document.getElementById("submit2").addEventListener("click", function(){
    console.log( "Calculating Dog's Human Age" );

    // Get input value
    var dogAge = document.getElementById("dog-age").value;
    console.log( "Dog's Age = " + dogAge );

    // Write output value
    var humanAge = calculateDogHumanAge(dogAge);
    console.log( "Human Age = " + humanAge );
    document.getElementById("human-age").value = humanAge;
});
