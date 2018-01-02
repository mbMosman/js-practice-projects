$(document).ready(readyNow);

let monthlySalaryCost = 0;
let allEmployees = new Map();

class Employee {
  constructor(id, first, last, title, salary) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.name = `${first} ${last}`;
    this.title = title;
    this.salary = salary;
  }
}

function readyNow() {
  console.log('jQuery ready!');
  $('#btn-submit').on('click', addEmployee);
  $('#out-salaries').on('click', '.btn-del', removeEmployee);
}

function createEmployee() {
  let first = $('#in-first').val();
  let last = $('#in-last').val();
  let empid = $('#in-empid').val();
  let title = $('#in-title').val();
  let salary = $('#in-salary').val();
  let employee = new Employee(empid, first, last, title, salary);
  return employee;
}

function removeEmployee() {
  let empid = $(this).attr('data-id');
  let employee = allEmployees.get(empid);
  allEmployees.delete(empid);
  $(this).parents('tr').get(0).remove();
  changeMonthlyCostBy(0 - employee.salary);
}

function addEmployee(event) {
  event.preventDefault();

  let employee = createEmployee();
  allEmployees.set(employee.id, employee);
  formReset();

  $('#out-salaries').append(`
      <tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button class= "btn-del" data-id="${employee.id}">Remove</button>
      </tr>
  `);
  changeMonthlyCostBy(employee.salary);
}

function changeMonthlyCostBy(amt) {
  monthlySalaryCost += amt / 12;
  let formattedCost = monthlySalaryCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  $('#out-monthly-salary').html(`<p><strong>Monthly Salary Cost: ${formattedCost}</strong></p>`);
}

function formReset() {
  $('#in-info input').val('');
}
