const { getUsers, saveUsers } = require("../models/userModel");

function signup(req, res) {

    const users = getUsers();
    const { email, password } = req.body;

    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({
            message: "email already exists"
        });
    }

    const user = {
        id: users.length + 1,
        email: email,
        password: password
    };

    users.push(user);
    saveUsers(users);

    res.json({
        message: "registration successful"
    });
}

function login(req, res) {

    const users = getUsers();
    const { email, password } = req.body;

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "invalid email or password"
        });
    }

    res.json({
        message: "login successful"
    });
}

function getAllUsers(req, res) {

    const users = getUsers();

    const result = users.map(user => ({
        id: user.id,
        email: user.email
    }));

    res.json(result);
}

function getUserById(req, res) {

    const users = getUsers();

    const user = users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    res.json({
        id: user.id,
        email: user.email
    });
}

module.exports = {
    signup,
    login,
    getAllUsers,
    getUserById
};