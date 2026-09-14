const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function checkAuth(req, res, next) {
    let isLoginIn = false;

    req.query.user == 'prathamesh'
        ? isLoginIn = true
        : isLoginIn = false;

    if (!isLoginIn) {i
        return res.status(401).json({
            message: "Pls Login First"
        });            i
    }

    next();
}

app.use((req, res, next) => {
    
});

app.post('/', (req, res) => {
    res.json(req.body.user.pass);
});

app.post('/',(req,res)=>{
    res.send('Hello form post');
})

app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome');
});

app.listen(PORT);