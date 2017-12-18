$(document).ready(readyNow);

let averageSalary = 0;

function readyNow(){
    console.log("jQuery ready!");
    $('#btn-submit').on("click", submitClicked)
}

function submitClicked() {
    let salary = $('#in-salary').val();
    console.log('Salary', salary);

    $('#out-salaries').append(`<p>${salary}</p>`);
    averageSalary += salary/12;
    $('#out-avg-salary').html(`<p><strong>${averageSalary}</strong></p>`);
}