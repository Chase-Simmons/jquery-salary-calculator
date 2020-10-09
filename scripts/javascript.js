$('document').ready(readyNow);

let totalMonthlySalaryValue = 0;

function readyNow() {
  console.log('Document is ready.');
  $('#submitButton').on('click', submitter);
  $('#tableBody').on('click', '.js-btn', deleter);
}

function submitter() {
  if (checkFields() === true) {
    $('#tableBody').append(`<tr> 
    <td>${$(firstNameInput).val()}</td>
    <td>${$(lastNameInput).val()}</td>
    <td>${$(idInput).val()}</td>
    <td>${$(titleInput).val()}</td>
    <td>$${$(salaryInput).val()}</td>
    <td><button class="js-btn">Delete</button></td>
    </tr>`);
    updateTotalMonthly();
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

function updateTotalMonthly() {
  totalMonthlySalaryValue = parseInt(
    Number($(salaryInput).val()) / 12 + +totalMonthlySalaryValue
  );
  $('#totalMonthly').empty();
  $('#totalMonthly').append(totalMonthlySalaryValue);
}

function deleter() {
  console.log('running');
}
