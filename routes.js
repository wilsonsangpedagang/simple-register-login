// Import necessary modules
const express = require('express');
const path = require('path');

// Create a new router instance
const router = express.Router();

// Temporary in-memory "database" to store users
const database = [];

// Route: GET '/' - Serve the welcome page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Route: GET '/login' - Serve the login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route: GET '/register' - Serve the registration page
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Route: GET '/success' - Serve the success page after login
router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Route: POST '/register' - Handle user registration logic
router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the username is already taken
    let userExists = false;
    for (let i = 0; i < database.length; i++) {
        const user = database[i];
        if (user.username === username) {
            userExists = true;
            break;
        }
    }

    // If username already exists, return error
    if (userExists) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Otherwise, add user to the database and redirect to login page
    database.push({ username, password });
    res.redirect('/login');
});

// Route: POST '/login' - Handle user login logic
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    let success = false;

    // Check if the username and password match an entry in the database
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            success = true;
            break;
        }
    }

    // If login is successful, redirect to the success page
    if (success) {
        res.redirect('/success');
    } else {
        // Otherwise, return an error message
        res.status(400).json({ message: 'Invalid Credentials' });
    }
});

// Export the router so it can be used in app.js
module.exports = router;
