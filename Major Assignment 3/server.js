const express = require("express");

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
