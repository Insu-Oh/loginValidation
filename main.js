let loginForm = document.getElementById('loginForm');
 let email = document.getElementById('emailField');
 let pw = document.getElementById('pw');
 let loginBtn = document.getElementById('loginBtn');
 
let signupForm = document.getElementById('signupForm');
  let FirstName = document.getElementById('firstname');
  let LastName = document.getElementById('lastname');
  let Email2 = document.getElementById('email2');
  let Dob = document.getElementById('dob');
  let Pw2 = document.getElementById('pw2');
  let SignupBtn = document.getElementById('signupBtn');

let users = [];

function signup() {
  let isValidatedEmail = validateEmail(Email2.value); 
  if(Email2.value != '' && Pw2.value != '' && Pw2.value.length > 5 && isValidatedEmail != false && FirstName.value.length > 1 && LastName.value.length > 1) {
    users.push({
      email: Email2.value,
      firstName: FirstName.value,
      lastName: LastName.value,
      dob: Dob.value,
      pw: Pw2.value,
    });
    alert("You succesfully signed up!");
    Email2.value = '';
    Pw2.value = '';
    FirstName.value = '';
    LastName.value = '';
    Dob.value = '';
  } else {
    alert("Try again");
  }
}

function login() {
  let isUserFound = findUser();
  if(isUserFound == true) {
    alert("You succesfully loged in!")
  } else {
    alert("Try again");
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function findUser() {
  for(var i = 0; i < users.length; i++) {
    let userEmail = users[i].email;
    let userPw = users[i].pw;
    if(email.value == userEmail && pw.value == userPw) {
      return true;
      break;
    } 
  }
}