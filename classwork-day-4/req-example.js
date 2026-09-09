const express = require('express');
const app = express();

app.use(express.json());

app.get('/about', (req, res) => {
    res.send("About us page from express");
    console.log(req.headers);
})

app.get('/products', (req, res) => {

    // console.log(req.query.category);
    // console.log(req.query.maxPrice);
    // console.log(req.path);
    // console.log(req.url);
    // console.log(req.protocol);
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.route);
    // console.log(req.cookies);
    
    // res.send("Hello Classs")
    // res.send("<h1>Hello</h1>")
    // res.end();
    res.status(200);
    res.send({
        name: "TTT Sahur",
        city: "Dholakpur",
    });
    
})

app.post('/products/addProduct', (req, res) => {
    console.log(req.body);
    console.log(req.headers.authorization);
    res.send("Completed");
})

app.listen(3000);