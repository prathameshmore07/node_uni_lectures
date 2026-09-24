const { getUsers, saveUsers } = require('../services/userServices');

function signup(req, res) {
    const users = getUsers();
    const { name, email, password } = req.body;

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);
    saveUsers(users);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser
    });
}

function login(req, res) {
    const users = getUsers();
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    res.json({
        message: "Login successful",
        user: user
    });
}

module.exports = {
    signup,
    login
};
