// Railway Ops DASHBOARD

const getOccupancySummary = (bookings) => {
    const confirmed = bookings.filter(b => b.status === "Confirmed").length;
    const waitlisted = bookings.filter(b => b.status === "WL").length;
    const rac = bookings.filter(b => b.status === "RAC").length;
    const totalPassengers = bookings.length;

    return {
        confirmed,
        waitlisted,
        RAC: rac,
        totalPassengers,
        occupancyRate: ((confirmed / totalPassengers) * 100).toFixed(2) + "%"
    };
};

const getRevenueBreakdown = (bookings) => {
    const totalRevenue = bookings
        .filter(b => b.status === "Confirmed")
        .reduce((sum, b) => sum + b.fare, 0);

    const byCoachClass = bookings.reduce((result, b) => {
        result[b.coachClass] = (result[b.coachClass] || 0) + b.fare;
        return result;
    }, {});

    const byBookingStatus = bookings.reduce((result, b) => {
        result[b.status] = (result[b.status] || 0) + b.fare;
        return result;
    }, {});

    return {
        totalRevenue,
        byCoachClass,
        byBookingStatus
    };
};

const getStationLoad = (bookings) => {
    return bookings.reduce((result, b) => {
        result[b.boardingStation] = (result[b.boardingStation] || 0) + 1;
        return result;
    }, {});
};

const getVulnerablePassengers = (bookings) => {
    return bookings
        .filter(b => b.status === "Confirmed" && (b.age < 12 || b.age >= 60))
        .map(b => ({
            name: b.passengerName,
            age: b.age,
            coach: b.coachClass,
            seat: b.seatNo
        }));
};

const getWaitlistClearancePlan = (bookings) => {
    return bookings
        .filter(b => b.status === "WL")
        .sort((a, b) => a.pnr - b.pnr)
        .map((b, index) => ({
            pnr: b.pnr,
            passengerName: b.passengerName,
            clearanceRank: index + 1
        }));
};

const generateFullDashboard = (bookings) => {
    return {
        occupancySummary: getOccupancySummary(bookings),
        revenueBreakdown: getRevenueBreakdown(bookings),
        stationLoad: getStationLoad(bookings),
        vulnerablePassengers: getVulnerablePassengers(bookings),
        waitlistClearancePlan: getWaitlistClearancePlan(bookings)
    };
};

const bookings = [
    {
        pnr: 12951001,
        passengerName: "Eknath Shinde",
        age: 65,
        gender: "Male",
        coachClass: "2A",
        fare: 2500,
        status: "Confirmed",
        seatNo: "A1-21",
        boardingStation: "Mumbai",
        destinationStation: "Delhi"
    },
    {
        pnr: 12951002,
        passengerName: "Devendra Fadnavis",
        age: 25,
        gender: "Male",
        coachClass: "3A",
        fare: 1800,
        status: "Confirmed",
        seatNo: "B2-34",
        boardingStation: "Mumbai",
        destinationStation: "Delhi"
    },
    {
        pnr: 12951003,
        passengerName: "Daksh Srivastava",
        age: 10,
        gender: "Male",
        coachClass: "3A",
        fare: 1800,
        status: "Confirmed",
        seatNo: "B2-35",
        boardingStation: "Vadodara",
        destinationStation: "Delhi"
    },
    {
        pnr: 12951004,
        passengerName: "Indira Gandhi",
        age: 32,
        gender: "Female",
        coachClass: "2A",
        fare: 2500,
        status: "WL",
        seatNo: null,
        boardingStation: "Surat",
        destinationStation: "Delhi"
    },
    {
        pnr: 12951005,
        passengerName: "Narendra Modi",
        age: 45,
        gender: "Male",
        coachClass: "3A",
        fare: 1800,
        status: "RAC",
        seatNo: "B3-12",
        boardingStation: "Mumbai",
        destinationStation: "Delhi"
    }
];

console.log(generateFullDashboard(bookings));