

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-main-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-main-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

/*Toggle between Sign In and Sign Up forms*/
document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpBox').style.display = 'block';
});

document.getElementById('showSignIn').addEventListener('click', () => {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpBox').style.display = 'none';
});

/* Toggle between Sign In and Sign Up forms*/
document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('signInBox').style.display = 'none';
    document.getElementById('signUpBox').style.display = 'block';
});

document.getElementById('showSignIn').addEventListener('click', () => {
    document.getElementById('signInBox').style.display = 'block';
    document.getElementById('signUpBox').style.display = 'none';
});

/* Password visibility toggle*/
const togglePassword = document.getElementById('togglePassword');
const signInPassword = document.getElementById('signInPassword');
togglePassword.addEventListener('click', () => {
    if (signInPassword.type === 'password') {
        signInPassword.type = 'text';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        signInPassword.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
});

const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
const signUpPassword = document.getElementById('signUpPassword');
toggleSignUpPassword.addEventListener('click', () => {
    if (signUpPassword.type === 'password') {
        signUpPassword.type = 'text';
        toggleSignUpPassword.classList.remove('fa-eye');
        toggleSignUpPassword.classList.add('fa-eye-slash');
    } else {
        signUpPassword.type = 'password';
        toggleSignUpPassword.classList.remove('fa-eye-slash');
        toggleSignUpPassword.classList.add('fa-eye');
    }
});


/* Toggle mobile menu*/
const menuToggle = document.querySelector('.menu-toggle');
const navMainMenu = document.querySelector('.nav-main-menu');

menuToggle.addEventListener('click', () => {
    navMainMenu.classList.toggle('active');
});

/* Form submission handler*/
function submitForm() {
    alert('Form submitted successfully!');
}


