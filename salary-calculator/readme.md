# Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_. 
Add styling to the page so that it looks good.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM.

Create a delete button that removes an employee from the DOM. For Hard mode, it does not need to remove that Employee's salary from the reported total.

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. Look into jQuery's .data() function. You will need to do something both when the employee is added and when they are deleted.
