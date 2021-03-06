// ————————‡————————  HTML Targets  ————————‡————————
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullNameErr");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjectErr");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailErr");
const address = document.querySelector("#address");
const addressErr = document.querySelector("#addressErr");
const header = document.querySelector(".main-head");
const resetForm = document.querySelector(".reset");


// ————————‡————————  FORM Validation  ————————‡————————
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
  
  if (checkRange(fullName.value, 1) && checkRange(subject.value, 9) && emailVisa(email.value) && checkRange(address.value, 24)) {
    header.innerHTML = `<h1 style="color: var(--clr-yellow); font-size: 4rem;">Your message has been sent!</h1>`; 
  form.reset();
  }
}
form.addEventListener("submit", formVisa);

// ————————————————————————————————————— How can I make this below more succinct
function clearForm(event) {

  fullNameErr.innerHTML = "";
  subjectErr.innerHTML = "";
  emailErr.innerHTML = "";
  addressErr.innerHTML = "";
}

function eventListener() {
  if (clearForm) {
    form.reset();
  }
}
form.addEventListener("reset", clearForm);
// ————————————————————————————————————— How can I make this above more succinct

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
