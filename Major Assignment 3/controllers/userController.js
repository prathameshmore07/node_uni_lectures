const { getUsers, saveUsers } = require("../models/userModel");

// Signup
const signup = (req, res) => {
    const users = getUsers();
    const { name, email, password, age } = req.body;

    if (users.some(user => user.email === email)) {
        return res.status(400).json({
            message: "Email already registered"
        });
    }

    const user = {
        id: Date.now(),
        name,
        email,
        password,
        age
    };

    users.push(user);
    saveUsers(users);

    res.status(201).json({
        message: "Signup successful"
    });
};

// Login
const login = (req, res) => {
    const users = getUsers();
    const { email, password } = req.body;

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    res.status(200).json({
        message: "Login successful"
    });
};

// Get all users
const getAllUsers = (req, res) => {
    const users = getUsers();

    res.status(200).json(users);
};

// Get user by ID
const getUserById = (req, res) => {
    const users = getUsers();

    const user = users.find(
        user => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);
};

module.exports = {
    signup,
    login,
    getAllUsers,
    getUserById
};