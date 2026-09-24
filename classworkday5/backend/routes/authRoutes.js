const express = require("express");
const jwt = require("jsonwebtoken");
const user = require("../models/users");

const router = express.Router();

const JWT_SECRET = "railway";

router.post("/register", async (req, res) => {
    try {
        const newUser = await user.create(req.body);

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to register user",
            error: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await user.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        if (existingUser.password !== password) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: existingUser._id,
                email: existingUser.email
            },
            JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
});

module.exports = router;