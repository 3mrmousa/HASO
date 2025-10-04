const form = document.getElementById('signupForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[\d\s\-\+\(\)]+$/;

togglePassword.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    if (type === 'text') {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});

function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    
    if (firstName === '') {
        firstNameInput.classList.add('error');
        firstNameInput.classList.remove('success');
        firstNameError.textContent = 'First name is required';
        firstNameError.classList.add('show');
        return false;
    } else if (firstName.length < 2) {
        firstNameInput.classList.add('error');
        firstNameInput.classList.remove('success');
        firstNameError.textContent = 'First name must be at least 2 characters';
        firstNameError.classList.add('show');
        return false;
    } else {
        firstNameInput.classList.remove('error');
        firstNameInput.classList.add('success');
        firstNameError.classList.remove('show');
        return true;
    }
}

function validateLastName() {
    const lastName = lastNameInput.value.trim();
    
    if (lastName === '') {
        lastNameInput.classList.add('error');
        lastNameInput.classList.remove('success');
        lastNameError.textContent = 'Last name is required';
        lastNameError.classList.add('show');
        return false;
    } else if (lastName.length < 2) {
        lastNameInput.classList.add('error');
        lastNameInput.classList.remove('success');
        lastNameError.textContent = 'Last name must be at least 2 characters';
        lastNameError.classList.add('show');
        return false;
    } else {
        lastNameInput.classList.remove('error');
        lastNameInput.classList.add('success');
        lastNameError.classList.remove('show');
        return true;
    }
}

function validateUsername() {
    const username = usernameInput.value.trim();
    
    if (username === '') {
        usernameInput.classList.add('error');
        usernameInput.classList.remove('success');
        usernameError.textContent = 'Username is required';
        usernameError.classList.add('show');
        return false;
    } else if (username.length < 3) {
        usernameInput.classList.add('error');
        usernameInput.classList.remove('success');
        usernameError.textContent = 'Username must be at least 3 characters';
        usernameError.classList.add('show');
        return false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        usernameInput.classList.add('error');
        usernameInput.classList.remove('success');
        usernameError.textContent = 'Username can only contain letters, numbers and underscores';
        usernameError.classList.add('show');
        return false;
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('success');
        usernameError.classList.remove('show');
        return true;
    }
}

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
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordError.textContent = 'Password must contain uppercase, lowercase and number';
        passwordError.classList.add('show');
        return false;
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.classList.remove('show');
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    
    if (phone === '') {
        phoneInput.classList.add('error');
        phoneInput.classList.remove('success');
        phoneError.textContent = 'Phone number is required';
        phoneError.classList.add('show');
        return false;
    } else if (!phonePattern.test(phone)) {
        phoneInput.classList.add('error');
        phoneInput.classList.remove('success');
        phoneError.textContent = 'Please enter a valid phone number';
        phoneError.classList.add('show');
        return false;
    } else if (phone.replace(/\D/g, '').length < 10) {
        phoneInput.classList.add('error');
        phoneInput.classList.remove('success');
        phoneError.textContent = 'Phone number must be at least 10 digits';
        phoneError.classList.add('show');
        return false;
    } else {
        phoneInput.classList.remove('error');
        phoneInput.classList.add('success');
        phoneError.classList.remove('show');
        return true;
    }
}

firstNameInput.addEventListener('blur', validateFirstName);
firstNameInput.addEventListener('input', function() {
    if (firstNameInput.classList.contains('error')) {
        validateFirstName();
    }
});

lastNameInput.addEventListener('blur', validateLastName);
lastNameInput.addEventListener('input', function() {
    if (lastNameInput.classList.contains('error')) {
        validateLastName();
    }
});

usernameInput.addEventListener('blur', validateUsername);
usernameInput.addEventListener('input', function() {
    if (usernameInput.classList.contains('error')) {
        validateUsername();
    }
});

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

phoneInput.addEventListener('blur', validatePhone);
phoneInput.addEventListener('input', function() {
    if (phoneInput.classList.contains('error')) {
        validatePhone();
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPhoneValid = validatePhone();
    
    if (isFirstNameValid && isLastNameValid && isUsernameValid && 
        isEmailValid && isPasswordValid && isPhoneValid) {
        
        const formData = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value,
            phone: phoneInput.value.trim()
        };
        
        console.log('Form submitted successfully!');
        console.log('Form Data:', formData);
        
        alert('Sign up successful!\nWelcome ' + formData.firstName + ' ' + formData.lastName + '!');
        
    } else {
        console.log('Form validation failed');
    }
});