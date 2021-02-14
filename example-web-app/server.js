const fs = require('fs');
const http = require('http');

const routes = {
    home: '/'
};

const server = http.createServer(function (req, res) {
    if (req.url === routes.home) {
        const page = fs.readFileSync('./index.html', 'utf-8');
        res.end(page);
    } else {
        res.end('Page not found');
    }
});

server.listen(5000);
console.log('Server is up and running on port 5000');