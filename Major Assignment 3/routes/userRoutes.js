const express = require("express");

const {
    signup,
    login,
    getAllUsers,
    getUserById
} = require("../controllers/userController");

const validateSignup = require("../middleware/validation");

const router = express.Router();

router.post("/signup", validateSignup, signup);
router.post("/login", login);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

module.exports = router;
