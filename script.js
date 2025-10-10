
document.addEventListener('DOMContentLoaded', function() {
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const errorMessage = document.getElementById('error-message');

    // Default credentials (you can change these)
    const validUsername = "admin";
    const validPassword = "12345t";

    // Login functionality
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === validUsername && password === validPassword) {
            // Successful login
            loginPage.classList.add('hidden');
            mainPage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            
            // Clear input fields
            usernameInput.value = '';
            passwordInput.value = '';
        } else {
            // Failed login
            errorMessage.classList.remove('hidden');
        }
    });

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        mainPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    // Allow login with Enter key
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
});
