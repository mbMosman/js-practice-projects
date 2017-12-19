# Company Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Details

Add employee salaries:

- Create an input form with a 'Submit' button to collect _employee first name, last name, ID number, job title, annual salary_. 

- When the form is submitted: 
    - Store the information in order to calculate *monthly* costs
    - Add the information to the DOM (web page) 
    - Clear the form input fields

Show monthly salary costs:
-  Using the stored information, calculate *monthly* salary cost and append this to the to DOM.

Delete employees:

- Add a delete button (for each employee) to remove the employee. 

- When the delete button is clicked:
    - Remove the employee from the DOM
    - Update the monthly salaray cost display 
    
Hints for delete: 
- Look into jQuery's .data() function to help track which item is deleted.
- If not using jQuery, you might us an id attribute to help track which item is deleted.
