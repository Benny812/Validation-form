/***************** Target id and classes *******************/

// let id = (id) => {
//   return document.getElementById(id);
// };

// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let form = document.getElementById("form");
// let errorMsg = documennt.getElementByClassName("error");
// let succsessIcon = document.getElementsByClassName("success-icon");
// let faliureIcon = document.getElementsByClassName("failure-icon");

/**
 * !Code belov is the same without repetition.
 **/

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  faliureIcon = classes("failure-icon");
/**
 * ! classes contains multiple elements 3 st, get stored as an array.
 * ! errorMsg = ['error', 'error', 'error'],
 * ! successIcon = ['success-icon','success-icon','success-icon']
 * ! failureIcon = ['failure-icon','failure-icon','failure-icon']
 **/

/********************* eventlistener *********************/

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (username.value === "") {
//     errorMsg[0].innerHTML = "Username cannot be blank";
//     faliureIcon[0].style.opacity = "1";
//     successIcon[0].style.opacity = "0";
//   } else {
//     errorMsg[0].innerHTML = "";
//     faliureIcon[0].style.opacity = "0";
//     successIcon[0].style.opacity = "1";
//   }
// });

/**
 * ! code below create a funktion "engine" to prevent repetition
 **/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    faliureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    faliureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
