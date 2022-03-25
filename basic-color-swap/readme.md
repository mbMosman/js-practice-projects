# Working with DOM & Events - Color Swap
Create an application that will add, swap, and delete color blocks from the web page.

## MVP Requirements

1. Create a `<button>` element. You may do this in JavaScript, or write it directly in the HTML code. Have the button text read "Add Color Block".

2. Using JavaScript, append a `<div>` element when you click the button. This `<div>` should contain:

 - A `<span>` that shows how many times the "Add" button was clicked. 
 - A "Delete" `<button>` which should remove its parent `div` from the DOM when clicked.

3. Using a CSS file, give all the `<div>` elements created must have a `margin` of `1rem` and a `height` of `2rem`. Each block should also initially have a Red background-color.

4. Clicking on the block should toggle the background-color of the `<div>` between Red and Green.
    - A red block will become green on click.
    - A green block will become red on click.
