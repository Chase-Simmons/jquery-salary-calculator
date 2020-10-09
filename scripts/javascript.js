$('document').ready(readyNow);

function readyNow() {
  console.log('Document is ready.');
  $('#submitButton').on('click', submitter);
}

function submitter() {
  if (checkFields() === true) {
    console.log('working');
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

function updateTotalMonthly() {}
