// Helps read and write file from and to file-styles
const fs = require('fs');
// Create a http server
const http = require('http');

// Contains routes of application
const routes = {
    home: '/'
};

// Created the web-server
const server = http.createServer(function (req, res) {
    // Hosts only home page
    if (req.url === routes.home) {
        // Copy index.html from fs to page
        const page = fs.readFileSync('./index.html', 'utf-8');
        // Send response back to browser
        res.end(page);
    } else {
        // Return this when page is not found
        res.end('Page not found');
    }
});
// Open port 
server.listen(5000);
// Message for server being online.
console.log('Server is up and running on port 5000');