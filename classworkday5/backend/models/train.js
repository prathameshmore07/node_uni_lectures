const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
    trainNo: Number,
    trainName: String,
    source: String,
    destination: String,
    availableSeats: Number,
    totalSeats: Number
});
const train=mongoose.model("train",trainSchema)
module.exports = train;