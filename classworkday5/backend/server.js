const express = require("express");
const { connectDB } = require("./config/db");
const trainRoutes = require("./routes/trainRoutes");
const stationRoutes = require("./routes/stationRoutes");
const passenger = require("./models/passenger");
const passengerRoutes = require("./routes/passengerRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

connectDB();

app.use(express.json());

app.use("/trains", trainRoutes);
app.use("/passengers", passengerRoutes);
app.use("/stations", stationRoutes);

// auth should come BEFORE "/"
app.use("/auth", authRoutes);

app.use("/", (req, res) => {
    res.send("Railway Management System API is running");
});

app.use(authMiddleware);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});