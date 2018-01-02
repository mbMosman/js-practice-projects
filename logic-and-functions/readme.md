# Logic and Functions

## Objectives
- Make functions in JavaScript that take input parameters
- Call functions and use return values
- Use String properties and methods
- Checkout the JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object

## Provided Files
Look at the index.html and script.js files provided.

In the JavaScript file, there are 3 Problems for you to complete. These correspond to buttons on the HTML page.

1. Moon Weight
2. Dog Human Age
3. Name Game

They are separated into two or more parts. In the first parts, you will write functions that you will then use in the last part of the problem. In the last part of the problem, you will add code to the event handler functions setup for the buttons found on the HTML page.

### Event Listeners
An event listener is code that waits for an event to occur, and when that event happens it will
call a function (an event handler) to have something happen.  There are 3 event handlers written
for you in the provided JavaScript file that will run certain code when the buttons are pressed on the web page.  

```
document.getElementById('btn-moon-weight').addEventListener('click', function () {
  console.log('Calculating Moon Weight');

  // You will add code here, inside the function.

});
```

The code above listens for a specific button (the one with the id="btn-moon-weight") to be
clicked. When the button is clicked, the code inside the the function { } is executed.  
