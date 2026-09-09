const getOccupancySummary = (bookings) => {
    const confirmed = bookings.filter(b => b.status === "CONFIRMED").length;
    const waitlisted = bookings.filter(b => b.status === "WL").length;
    const rac = bookings.filter(b => b.status === "RAC").length;
    const total = bookings.length;
    const occupancyRate = total > 0 ? `${((confirmed / total) * 100).toFixed(2)}%` : "0.00%";

    return { confirmed, waitlisted, rac, totalPassengers: total, occupancyRate };
};

const getRevenueBreakdown = (bookings) => {
    const totalRevenue = bookings.reduce((sum, b) => sum + b.fare, 0);

    const byCoachClass = bookings.reduce((acc, b) => {
        acc[b.coachClass] = (acc[b.coachClass] || 0) + b.fare;
        return acc;
    }, {});

    const byStatus = bookings.reduce((acc, b) => {
        acc[b.status] = (acc[b.status] || 0) + b.fare;
        return acc;
    }, {});

    return { totalRevenue, byCoachClass, byStatus };
};

const getStationLoad = (bookings) =>
    bookings.reduce((acc, b) => {
        acc[b.boardingStation] = (acc[b.boardingStation] || 0) + 1;
        return acc;
    }, {});

const getVulnerablePassengers = (bookings) =>
    bookings
        .filter(b => b.status === "CONFIRMED" && (b.age < 12 || b.age >= 60))
        .map(b => ({
            name: b.passengerName,
            age: b.age,
            coach: b.coachClass,
            seat: b.seatNo
        }));

const getWaitlistClearancePlan = (bookings) =>
    bookings
        .filter(b => b.status === "WL")
        .slice()
        .sort((a, b) => Number(a.pnr) - Number(b.pnr))
        .map((passenger, index) => ({
            ...passenger,
            clearanceRank: index + 1
        }));

const generateFullDashboard = (bookings) => ({
    train: "12951 – Mumbai Rajdhani Express",
    generatedAt: new Date().toISOString(),
    occupancy: getOccupancySummary(bookings),
    revenue: getRevenueBreakdown(bookings),
    stationLoad: getStationLoad(bookings),
    vulnerablePassengers: getVulnerablePassengers(bookings),
    waitlistPlan: getWaitlistClearancePlan(bookings)
});

const sampleBookings = [
    { pnr: "2834710291", passengerName: "Ramesh Sen", age: 67, gender: "M", coachClass: "1A", fare: 4500, status: "CONFIRMED", seatNo: "H1-4", boardingStation: "MMCT", destinationStation: "NDLS" },
    { pnr: "2834710295", passengerName: "Pooja Verma", age: 8, gender: "F", coachClass: "2A", fare: 3000, status: "CONFIRMED", seatNo: "A1-12", boardingStation: "BVI", destinationStation: "NDLS" },
    { pnr: "2834710293", passengerName: "Ankit Roy", age: 29, gender: "M", coachClass: "3A", fare: 2100, status: "WL", seatNo: null, boardingStation: "ST", destinationStation: "KOTA" },
    { pnr: "2834710292", passengerName: "Sunita Rao", age: 34, gender: "F", coachClass: "3A", fare: 2100, status: "RAC", seatNo: "B2-7", boardingStation: "MMCT", destinationStation: "NDLS" },
    { pnr: "2834710290", passengerName: "Deepak Pal", age: 25, gender: "M", coachClass: "2A", fare: 3000, status: "WL", seatNo: null, boardingStation: "BRC", destinationStation: "NDLS" }
];

console.log(generateFullDashboard(sampleBookings));