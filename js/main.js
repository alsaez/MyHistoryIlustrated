/*jslint browser:true */
/*
var ctForm = document.getElementById("form-send");
var name = ctForm.fullName;
var email = ctForm.email;
var sms = ctForm.sms;
var errorSms = "Please complete the following information: ";

function validateName(e) {
  if (name.value == "" || name.value === null) return true;
  else return false;
}

function validateEmail(e) {
  if (email.value == "" || email.value === null) return true;
  else return false;
    }
  //In the future had to send a verification code by email an the person must introduce the verification code before sending me the message....
}

function validateSms(e) {
  if (sms.value == "" || sms.value === null) return true;
  else return false;
}

function validateForm(e) {
  if (validateName(e) || validateEmail(e) || validateSms(e)) {
    e.preventDefault();
    }
}

ctForm.addEventListener("submit", validateForm);

var project1 = document.getElementById("project-1");
var project2 = document.getElementById("project-2");
var project3 = document.getElementById("project-3");
var projectImage = document.getElementById("project-img").src;

function placeImage(e){
  if(e.id=="project-1"){
    projectImage="img/works/bc-regular.png";
  }
  else if(e.id=="project-2"){
    projectImage="img/works/set-social-gray.png";
  }
  else if(e.id=="project-3"){
    projectImage="img/works/resume.png";
  }
}
project1.addEventListener("onclick", placeImage(project1));
project2.addEventListener("onclick", placeImage(project2));
project3.addEventListener("onclick", placeImage(project3));
*/
