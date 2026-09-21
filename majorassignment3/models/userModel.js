const fs = require("fs");

const filePath = "./data/users.json";

function getUsers() {
    return JSON.parse(fs.readFileSync(filePath));
}

function saveUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = {
    getUsers,
    saveUsers
};