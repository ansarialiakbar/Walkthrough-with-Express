const express = require('express');
const app = express();

// Route to generate and send a random number
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
    res.json({ random: randomNumber });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
