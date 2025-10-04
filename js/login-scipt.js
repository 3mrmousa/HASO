const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

togglePassword.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    if (type === 'text') {
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        `;
    } else {
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        `;
    }
});

function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email === '') {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailError.textContent = 'Email is required';
        emailError.classList.add('show');
        return false;
    } else if (!emailPattern.test(email)) {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('show');
        return false;
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.classList.remove('show');
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    
    if (password === '') {
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordError.textContent = 'Password is required';
        passwordError.classList.add('show');
        return false;
    } else if (password.length < 6) {
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.classList.add('show');
        return false;
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.classList.remove('show');
        return true;
    }
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', function() {
    if (emailInput.classList.contains('error')) {
        validateEmail();
    }
});

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('input', function() {
    if (passwordInput.classList.contains('error')) {
        validatePassword();
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isEmailValid && isPasswordValid) {
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const remember = document.getElementById('remember').checked;
        
        console.log('Form submitted successfully!');
        console.log('Email:', email);
        console.log('Remember:', remember);
        
        alert('Login successful!\nEmail: ' + email + '\nRemember me: ' + remember);
        
    } else {
        console.log('Form validation failed');
    }
});