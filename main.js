const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

function validatePassword() {
    if(confirmPassword.value !== password.value) {
        passwordError.textContent = "Passwords do not match";
    }else {
        passwordError.textContent = '';
    }
}

password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validatePassword);

