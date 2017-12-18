# Working with DOM & Events - Color Swap
Create an application that will add, swap, and delete color blocks from the web page. 

## Details

1. Create a `<button>` element on the DOM, you may do this in jQuery, or write it directly in the HTML code. Have the button text read "Add".

2. Using jQuery, append a `<div>` element when you click the button. This `<div>` should contain:

 - A `<span>` element that shows how many times you have clicked the button from the first step.
 - Two `<button>` elements. The text of the two buttons should read "Swap" and "Delete".

3. Using a CSS file, style any `<div>` created using the "Add" button to have a Red background-color.

4. Clicking the "Swap" `<button>` should change the background-color of its parent `<div>` from Red to Yellow.

5. Clicking the "Swap" `<button>` again should turn the color back to Red.

6. Clicking a "Delete" `<button>` should remove its parent `<div>` container (and all of its contents) from the page.
