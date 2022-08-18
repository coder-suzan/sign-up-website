// Javascript error handeling custom js code

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'customForm error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'customForm success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not valid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters and 1 number`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([email, password, confirmPassword]);
    checkLength(password,8,15);
    checkEmail(email);
    checkPasswordMatch(password, confirmPassword);
});


// hideShow password Function
const firstPassword = document.getElementById("password");
const secondPassword = document.getElementById("confirmPassword");
const firsTtoggle = document.getElementById("firsTtoggle");
const secondToggle = document.getElementById("secondToggle");

function showHideFirst(){
 if(firstPassword.type === "password"){
    firstPassword.setAttribute("type", "text");
    firsTtoggle.classList.add("firstHide");
 }
 else {
    firstPassword.setAttribute("type", "password");
    firsTtoggle.classList.remove("firstHide")
 }
}

function showHideSecond(){
    if(secondPassword.type === "password"){
       secondPassword.setAttribute("type", "text");
        secondToggle.classList.add("secondHide");
    }
    else {
       secondPassword.setAttribute("type", "password");
        secondToggle.classList.remove("secondHide")
    }
   }