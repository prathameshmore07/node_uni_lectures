const express = require("express");
const train = require("../models/train");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const trains = await train.find();
        res.json(trains);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch trains",
            error: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newTrain = await train.create(req.body);
        res.status(201).json(newTrain);
    } catch (error) {
        res.status(500).json({
            message: "Failed to add train",
            error: error.message
        });
    }
});

module.exports = router;