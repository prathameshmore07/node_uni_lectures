const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA_FILE = path.join(__dirname, "students.json");

app.use(express.json());

app.post("/students", (req, res) => {
    const studentData = req.body;

    if (!studentData || Object.keys(studentData).length === 0) {
        return res.status(400).json({ error: "Empty request body" });
    }

    const record = {
        ...studentData,
        registeredAt: new Date().toISOString()
    };

    let students = [];

    if (fs.existsSync(DATA_FILE)) {
        try {
            const fileData = fs.readFileSync(DATA_FILE, "utf-8");
            students = fileData.trim() ? JSON.parse(fileData) : [];
        } catch {
            students = [];
        }
    }

    students.push(record);

    fs.writeFile(DATA_FILE, JSON.stringify(students, null, 2), (err) => {
        if (err) return res.status(500).json({ error: "Failed to save record" });
        return res.status(201).json({ success: true, student: record });
    });
});

app.listen(4000, () => console.log("Student service on port 4000"));