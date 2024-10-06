const http = require('http');

// Dummy data for products
const menProducts = [
    { id: 1, name: 'Men Product 1', price: 50 },
    { id: 2, name: 'Men Product 2', price: 40 },
    { id: 3, name: 'Men Product 3', price: 60 },
    { id: 4, name: 'Men Product 4', price: 70 },
    { id: 5, name: 'Men Product 5', price: 30 },
    { id: 6, name: 'Men Product 6', price: 80 },
    { id: 7, name: 'Men Product 7', price: 90 },
    { id: 8, name: 'Men Product 8', price: 100 },
    { id: 9, name: 'Men Product 9', price: 110 },
    { id: 10, name: 'Men Product 10', price: 120 }
];

const womenProducts = [
    { id: 1, name: 'Women Product 1', price: 55 },
    { id: 2, name: 'Women Product 2', price: 45 },
    { id: 3, name: 'Women Product 3', price: 65 },
    { id: 4, name: 'Women Product 4', price: 75 },
    { id: 5, name: 'Women Product 5', price: 35 },
    { id: 6, name: 'Women Product 6', price: 85 },
    { id: 7, name: 'Women Product 7', price: 95 },
    { id: 8, name: 'Women Product 8', price: 105 },
    { id: 9, name: 'Women Product 9', price: 115 },
    { id: 10, name: 'Women Product 10', price: 125 }
];

// Create server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Start the server on port 5000
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
