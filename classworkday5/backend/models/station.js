const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    stationCode: String,
    stationName: String,
    city: String,
    state: String
});

const station = mongoose.model("station", stationSchema);

module.exports = station;