var isFirstNameValidate;
var isLastNameValidate;
var isEmailValidate;
var isPasswordValidate;
var isPasswordConfirmationValidate;
var isZipCodeValidate;

function validateFirstName() {
    var name = document.getElementById('firstname').value;
    var nameError = document.getElementById('firstNameError');
    var nameRegex = '^[A-Za-z]+(?:[ _-][A-Za-z-]+)*$';

    if(name == '') {
        nameError.innerHTML = "Please enter the First Name";
        isFirstNameValidate = false;
    }else if(name.match(nameRegex)) {
        nameError.innerHTML = "";
        isFirstNameValidate = true;
    }else {
        nameError.innerHTML = "Please enter only alphabets";
        isFirstNameValidate = false;
    }
}

function validateLastName() {
    var lastname = document.getElementById('lastname').value;
    var lNameError = document.getElementById('lastsNameError');
    var lNameRegex = '^[A-Za-z]+(?:[ _-][A-Za-z-]+)*$';

    if(lastname == '') {
        lNameError.innerHTML = "Please enter the First Name";
        isLastNameValidate = false;
    }else if(lastname.match(lNameRegex)) {
        lNameError.innerHTML = "";
        isLastNameValidate = true;
    }else {
        lNameError.innerHTML = "Please enter only alphabets";
        isLastNameValidate = false;
    }
}

function validateEmailId() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    var emailRegex = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$';

    if(email == '') {
        emailError.innerHTML = "Please enter email id";
        isEmailValidate = false;
    }else if(email.match(emailRegex)) {
        emailError.innerHTML = "";
        isEmailValidate = true;
    }else {
        emailError.innerHTML = "Please enter valid email id";
        isEmailValidate = false;
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(password == '') {
        passwordError.innerHTML = "Please enter password";
        isPasswordValidate = false;
    }else if(password.match(passwordRegex)) {
        passwordError.innerHTML = "";
        isPasswordValidate = true;
    }else {
        passwordError.innerHTML = "Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        isPasswordValidate = false;
    }
}

function validateConfirmPassword() {
    var passwordConfirm = document.getElementById('passwordConfirmation').value;
    var password = document.getElementById('password').value;
    var passwordConfirmError = document.getElementById('confirmpasswordError');

    if(passwordConfirm == '') {
        passwordConfirmError.innerHTML = "Please enter password";
        isPasswordConfirmationValidate = false;
    }else if(password == passwordConfirm) {
        passwordConfirmError.innerHTML = "";
        isPasswordConfirmationValidate = true;
    }else {
        passwordConfirmError.innerHTML = "Both password should match";
        isPasswordConfirmationValidate = false;
    }
}

function validateZipCode() {
    var zipCode = document.getElementById('zipCode').value;
    var zipCodeError = document.getElementById('zipCodeError');
    var zipCodeRegex = /^[1-9][0-9]{5}$/;

    if(zipCode == '') {
        zipCodeError.innerHTML = "Please enter zip code";
        isZipCodeValidate = false;
    }else if(zipCode.test(zipCodeRegex)) {
        zipCodeError.innerHTML = "";
        isZipCodeValidate = true;
    }else {
        zipCodeError.innerHTML = "Please enter correct zip code";
        isZipCodeValidate = false;
    }
}

function validateForm() {
    var form_Error = document.getElementById('formError');

    if(isFirstNameValidate && isLastNameValidate && isEmailValidate && isPasswordValidate && isPasswordConfirmationValidate && isZipCodeValidate ) {
        form_Error.innerHTML =  "";
		return true;
    }else {
        form_Error.innerHTML = "Please fill all field";
		return false;
    }
}
