function MyFunction(){
    var x = 6; 
    document.getElementById("res1").innerHTML = x * x;
}

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
        } else {
            usernameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
        } else {
            passwordError.textContent = '';
        }
    });
});