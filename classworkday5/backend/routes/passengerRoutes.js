const express = require("express");
const passenger = require("../models/passenger");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const passengers = await passenger.find();
        res.json(passengers);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch passengers",
            error: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newPassenger = await passenger.create(req.body);
        res.status(201).json(newPassenger);
    } catch (error) {
        res.status(500).json({
            message: "Failed to add passenger",
            error: error.message
        });
    }
});

module.exports = router;