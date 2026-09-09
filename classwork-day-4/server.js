// const http =require('http');
// const PORT=3000;
// http.createServer((req,res)=>{
// if (req.url==='/about'){
//     res.end('about us page');
// }
// }).listen(PORT);

const express = require('express');
const app = express();

app.use(express.json());

app.get('/about', (req, res) => {
    res.send("About us page from express");
    console.log(req.headers);
});

app.get('/products', (req, res) => {
    console.log(req.query.catergory);
    console.log(req.query.maxPrice);
    console.log(req.path);

    res.end('completed');
});

app.post('/products/addProduct', (req, res) => {

    console.log(req.body);
    console.log(req.headers.authorization);

    console.log(req.url);
    console.log(req.protocol);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.route);

    res.send('completed');
});

app.listen(6767);