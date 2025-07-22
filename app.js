// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Import the path module to handle file paths
const path = require('path');

// Import the routes defined in a separate file (e.g., routes/index.js)
const routes = require('./routes');

// Middleware to parse JSON data in request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in routes.js for any requests to "/"
app.use('/', routes);

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('server is running on http://localhost:5000');
});
