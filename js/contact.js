const form = document.querySelector("#contact-form");

form.onsubmit = function (event) {
  event.preventDefault();

  console.log(event);
  
}

