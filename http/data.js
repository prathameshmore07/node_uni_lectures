const http = require('http');

const server = http.createServer((req, res) => {

    const homepage = 'This is Home Page';
    const loginpage = 'user registered';
    const aboutpage = 'This is About Page';

    if (req.method === 'GET' && req.url === '/') {
        res.end(homepage);
    }
    else if (req.method === 'POST' && req.url === '/login') {
        res.write('Welcome to the login page');
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
       
        req.on('end', () => {
            const details = JSON.parse(body);
            console.log(details)
        });
    }

    else if (req.method === 'GET' && req.url === '/about') {
        res.end(aboutpage);
    }

    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }

});

server.listen(4000, () => {
    console.log('Server started on port 4000');
});