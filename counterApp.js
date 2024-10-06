const express = require('express');
const app = express();

// Initialize counter
let counter = 0;

// Middleware to parse JSON
app.use(express.json());

// Root route to get the counter value
app.get('/', (req, res) => {
    res.json({ counter });
});

// Route to increment the counter
app.get('/increment', (req, res) => {
    counter += 1;
    res.json({ counter });
});

// Route to decrement the counter
app.get('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
