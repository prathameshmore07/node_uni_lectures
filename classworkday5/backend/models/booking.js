const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    bookingId: String,
    passengerId: String,
    trainNo:String,
    source: String,
    destination: String,
    journeyDate:Date,
    seatNo : String,
    coach: String,
    fare: Number,
    status:String
});
const passenger=mongoose.model("booking",bookingSchema)
module.exports = passenger;