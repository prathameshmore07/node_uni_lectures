const { rto } = require("./module");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/user") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const user = JSON.parse(body);

            if (rto(user)) {
                fs.appendFileSync("data.txt", body + "\n");
                res.end("user is valid");
            } else {
                res.end("invalid user");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("invalid req");
    }
});

server.listen(8080, () => {
    console.log("server running on 8080");
});