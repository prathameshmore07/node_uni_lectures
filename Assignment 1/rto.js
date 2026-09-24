const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "rto_data.json");

function registerVehicle(studentName, collegeId, vehicleNumber, vehicleType) {
    const newEntry = {
        studentName,
        collegeId,
        vehicleNumber,
        vehicleType,
        registrationDate: new Date().toISOString()
    };

    let records = [];

    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, "utf-8");
            records = data.trim() ? JSON.parse(data) : [];
        } catch {
            records = [];
        }
    }

    records.push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
    console.log(`Registered ${vehicleNumber}`);
}

registerVehicle("Siddharth Joshi", "COEP1023", "MH-12-AB-1234", "Bike");