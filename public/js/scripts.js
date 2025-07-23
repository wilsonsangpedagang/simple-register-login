// This code waits until the full HTML document is loaded before running
document.addEventListener('DOMContentLoaded', () => {

    // Selects the button with id="login-btn"
    const loginBtn = document.getElementById('login-btn');

    // Selects the button with id="register-btn"
    const registerBtn = document.getElementById('register-btn');

    // If the login button exists on the page...
    if (loginBtn) {
        // ...add a click event listener
        loginBtn.addEventListener('click', () => {
            // When clicked, redirect the user to the "/login" page
            window.location.href = '/login';
        });
    }

    // If the register button exists on the page...
    if (registerBtn) {
        // ...add a click event listener
        registerBtn.addEventListener('click', () => {
            // When clicked, redirect the user to the "/register" page
            window.location.href = '/register';
        });
    }
});
