// ————————‡————————  FORM Validation  ————————‡————————
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullNameErr");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjectErr");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailErr");
const address = document.querySelector("#address");
const addressErr = document.querySelector("#addressErr");
const submitButton = document.querySelector(".btn");
const sent = document.querySelector("#sent");
const formError = document.querySelector(".form-error");






function formVisa(event) {
  event.preventDefault();

  if (checkRange(fullName.value, 1)) {
    fullNameErr.style.display = "none";
  } else {
    fullNameErr.style.display = "block";
  }

  if (checkRange(subject.value, 9)) {
    subjectErr.style.display = "none";
  } else {
    subjectErr.style.display = "block";
  }

  if (emailVisa(email.value)) {
    emailErr.style.display = "none";
  } else {
    emailErr.style.display = "block";
  }

  if (checkRange(address.value, 24)) {
    addressErr.style.display = "none";
  } else {
    addressErr.style.display = "block";
  }
  validForm();
}
form.addEventListener("submit", formVisa)

function checkRange(value, range) {
  if (value.trim().length > range) {
    return true;
  } else {
    return false;
  }
}

function emailVisa(email) {
  const regEx = /\S+@\S+\.\S+/;
  const typeFit = regEx.test(email);
  return typeFit;
}

// function validForm(event) {
//   if (fullNameErr.style.display = "block" || subjectErr.style.display = "block" || emailErr.style.display = "block" || addressErr.style.display = "block") {
//     return false;
//   } else {
//     return true;
//   }
//   form.reset();
// } 

function validForm(event) {
  event.preventDefault();

  form.reset();

  if (formVisa) {
    sent.style.display = "block";
  } else {
    sent.style.display = "none";
  }
  
}
form.addEventListener("submit", validForm)