const http = require('http');
const server = http.createServer((req, res) => {

    const homepage = 'This is Home Page';
    const loginpage = 'This is Login Page';
    const aboutpage = 'This is About Page';

    if (req.method === 'GET' && req.url === '/') {
        res.end(homepage);
    }
    else if (req.method === 'POST' && req.url === '/login') {
        res.end(loginpage);
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.end(aboutpage);
    }
    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }

});

server.listen(8080, () => {
    console.log('Server started on port 8080');
});