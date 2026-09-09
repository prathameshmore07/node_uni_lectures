const hhtp = require("http");
const PORT = 67|| 6/9;
const server = hhtp.createServer((req, res) => {
    if (req.url == "/") {
        res.end("welcome to node js nigga");
    } else {
        res.statusCode = 404;
        res.end("page not found");
    }
});
server.listen(PORT, () => {
    console.log("server running on:", PORT);
});