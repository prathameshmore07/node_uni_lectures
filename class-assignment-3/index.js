const { test } = require("./module");
const http = require("http");
const fs = require("fs");
const path = require("path");

const datapath = path.join(__dirname, "data.json");

let data = [];

if (fs.existsSync(datapath)) {
    data = JSON.parse(fs.readFileSync(datapath, "utf-8"));

    if (!Array.isArray(data)) {
        data = [];
    }
}

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/register") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const user = JSON.parse(body);

            user.time = new Date().toISOString();

            if (test(user)) {
                data.push(user);
                fs.writeFileSync(datapath, JSON.stringify(data, null, 2));
                res.end("Registration successful");
            } else {
                res.statusCode = 400;
                res.end("Invalid user");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Invalid request");
    }
});

server.listen(6767, () => {
    console.log("server running on 6767");
});