const { valid } = require("./module");
const http=require('http');

// const data = {
//     name: "prathamesh",
//     age: 67,
//     email: "prathamesh@mail.com"
// };

// const server=http.createServer((req,res)=>{
//     if (valid(data)) {
//         res.end("user is valid");
//     } else {
//         res.end("invalid");
//     }

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url=="/user") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            if (valid(user)) {
                res.end("user is valid");
            } else {
                res.end("invalid user");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Only POST request allowed");
    }
});

server.listen(6767, () => {
    console.log("server running on 6767");
});
