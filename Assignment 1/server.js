const express = require("express");
const { validateUser } = require("./validate");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.post("/users", (req, res) => {
    const userPayload = req.body;


    const { isValid, errors } = validateUser(userPayload);

    if (!isValid) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
    }

    return res.status(201).json({
        success: true,
        message: "User validated and created successfully",
        user: userPayload
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});