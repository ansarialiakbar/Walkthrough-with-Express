const express = require('express');
const app = express();

// Root route to send homepage message
app.get('/', (req, res) => {
    res.json({ msg: 'I am homepage' });
});

// About route to send about page message
app.get('/about', (req, res) => {
    res.json({ msg: 'I am about page' });
});

// Contact route to send contact email
app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
