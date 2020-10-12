$('document').ready(readyNow);

let totalMonthlySalaryValue = 0;
const employeeInfo = [];

function readyNow() {
  console.log('Document is ready.');
  $('#submitButton').on('click', submitter);
  $('#tableBody').on('click', '.js-btn', deleter);
}

function submitter() {
  if (checkFields() === true) {
    $('#tableBody').empty();
    createObject();
    render();
    updateTotalMonthly();
    emptier();
  }
}

function checkFields() {
  if (
    $(firstNameInput).val() === '' ||
    $(lastNameInput).val() === '' ||
    $(idInput).val() === '' ||
    $(titleInput).val() === '' ||
    $(salaryInput).val() === ''
  ) {
    alert('Please fill out all fields before submitting.');
    return false;
  } else {
    return true;
  }
}

function createObject() {
  let obj = {
    firstName: $(firstNameInput).val(),
    lastName: $(lastNameInput).val(),
    id: parseInt($(idInput).val()),
    title: $(titleInput).val(),
    salary: parseInt($(salaryInput).val()),
  };
  employeeInfo.push(obj);
}
function render() {
  for (let i = 0; i < employeeInfo.length; i++) {
    const employee = employeeInfo[i];
    $('#tableBody').append(`<tr> 
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${numberWithCommas(employee.salary)}</td>
        <td><button class="js-btn" data-index="${i}">Delete</button></td>
        </tr>`);
  }
}
function updateTotalMonthly() {
  totalMonthlySalaryValue = 0;
  let amount = 0;
  for (let i = 0; i < employeeInfo.length; i++) {
    const employee = employeeInfo[i];
    amount += employee.salary;
  }
  totalMonthlySalaryValue = parseInt(amount / 12);
  if (totalMonthlySalaryValue > 20000) {
    $('.align-right-green').addClass('align-right-red');
  } else {
    $('.align-right-green').removeClass('align-right-red');
  }
  totalMonthlySalaryValue = numberWithCommas(totalMonthlySalaryValue);
  $('#totalMonthly').empty();
  $('#totalMonthly').append(totalMonthlySalaryValue);
}
function emptier() {
  $(firstNameInput).val('');
  $(lastNameInput).val('');
  $(idInput).val('');
  $(titleInput).val('');
  $(salaryInput).val('');
}
function deleter() {
  let index = $(this).parent().data('index');
  employeeInfo.splice(index, 1);
  $(this).parent().parent().remove();
  updateTotalMonthly();
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// code from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
// used this just for appearance purposes ONLY. THIS DOES NOT ADD ANY [REAL] FUNCTIONALITY TO MY CODE. :) <3
