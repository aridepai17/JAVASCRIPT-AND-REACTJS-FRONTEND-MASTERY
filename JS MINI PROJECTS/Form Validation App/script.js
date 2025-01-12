const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Cpassword = document.getElementById('confirm-password');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const CpasswordValue = Cpassword.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must be at least 8 characters');
    }
    else {
        setSuccessFor(password);
    }
    if (CpasswordValue === '') {
        setErrorFor(Cpassword, 'Password cannot be blank');
    }
    else if (CpasswordValue !== passwordValue) {
        setErrorFor(Cpassword, 'Passwords does not match');
    }
    else {
        setSuccessFor(Cpassword);
    }
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }
    else {
        setSuccessFor(email);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');
}

function isValidEmail(email) {
    var Registration = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return Registration.test(email);
}