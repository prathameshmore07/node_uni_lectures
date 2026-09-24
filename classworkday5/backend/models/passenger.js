const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
    passengerId: String,
    name: String,
    age: Number,
    gender: String,
    phone: String,
    email: String
});

const passenger = mongoose.model("passenger", passengerSchema);

module.exports = passenger;