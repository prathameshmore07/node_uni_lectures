const express = require("express");
const station = require("../models/station");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const stations = await station.find();
        res.json(stations);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch stations",
            error: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newStation = await station.create(req.body);
        res.status(201).json(newStation);
    } catch (error) {
        res.status(500).json({
            message: "Failed to add station",
            error: error.message
        });
    }
});

module.exports = router;