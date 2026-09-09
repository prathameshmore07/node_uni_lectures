const bookings=[
    {
        pnr:6767671,
        passengerName: "TTT Sahur",
        age:67,
        gender: "Male",
        coachClass: "1AC",
        fare:6767,
        status:"Confirmed",
        seatNo: "A167",
        boardingStation: "Mumbai",
        destinationStation:"Mizoram"
    },
    {
        pnr: 6767672,
        passengerName: "Charlie Kirk",
        age: 69,
        gender: "Male",
        coachClass: "2AC",
        fare: 5069,
        status: "Confirmed",
        seatNo: "A205",
        boardingStation: "Mizoram",
        destinationStation: "Mumbai"
    },
    {
        pnr: 6767673,
        passengerName: "Mr. Least",
        age: 51,
        gender: "Male",
        coachClass: "Sleeper",
        fare: 150,
        status: "Confirmed",
        seatNo: "S105",
        boardingStation: "Bihar",
        destinationStation: "Mumbai"
    },
    {
        pnr: 6767674,
        passengerName: "Jethalal Gada",
        age: 53,
        gender: "Male",
        coachClass: "1AC",
        fare: 5000,
        status: "Confirmed",
        seatNo: "A101",
        boardingStation: "Mumbai",
        destinationStation: "Amhmedabad"
    },
    {
        pnr: 6767675,
        passengerName: "Daya Gada",
        age: 50,
        gender: "Female",
        coachClass: "1AC",
        fare: 5069,
        status: "Confirmed",
        seatNo: "A102",
        boardingStation: "Mumbai",
        destinationStation: "Ahmedabad"
    },
    {
        pnr: 6767676,
        passengerName: "Baburao Ganpatrao Apte",
        age: 65,
        gender: "Male",
        coachClass: "2AC",
        fare: 5000,
        status: "Confirmed",
        seatNo: "A203",
        boardingStation: "Delhi",
        destinationStation: "Mumbai"
    },
    {
        pnr: 6767677,
        passengerName: "Hemant Ghotala",
        age: 51,
        gender: "Male",
        coachClass: "3AC",
        fare: 3000,
        status: "RAC",
        seatNo: "A303",
        boardingStation: "Mumbai",
        destinationStation: "Pune"
    },
    {
        pnr: 6767678,
        passengerName: "Manmohan Tiwari",
        age: 35,
        gender: "Male",
        coachClass: "1AC",
        fare: 5000,
        status: "Confirmed",
        seatNo: "A108",
        boardingStation: "Bhopal",
        destinationStation: "Manali"
    },
    {
        pnr: 6767679,
        passengerName: "Anita Vibhuti Mishra",
        age: 30,
        gender: "Female",
        coachClass: "1AC",
        fare: 5000,
        status: "Confirmed",
        seatNo: "A109",
        boardingStation: "Bhopal",
        destinationStation: "Manali"
    },
    {
        pnr: 6767670,
        passengerName: "Krishnan Iyer",
        age: 48,
        gender: "Male",
        coachClass: "1AC",
        fare: 5000,
        status: "WL",
        seatNo: "A107",
        boardingStation: "Mumbai",
        destinationStation: "Kolkata"
    },
    
];

const getOccupancySummary=(bookings)=>{
    const confirmed=bookings.filter(booking=>booking.status==="Confirmed").length;
    const waitlisted=bookings.filter(booking=>booking.status==="WL").length;
    const RAC=bookings.filter(booking=>booking.status==="RAC").length;
    const totalPassengers = bookings.length;
    const occupancyRate =(confirmed / totalPassengers) * 100;
    return{
        confirmed,
        waitlisted,
        RAC,
        totalPassengers,
        occupancyRate
    };
};

const getRevenueBreakdown=(bookings)=>{
    const totalRevenue=bookings.reduce(
        (sum,booking)=>sum+booking.fare,0
    );
    const revenueByCoach=bookings.reduce((result,booking)=>{
        result[booking.coachClass]=(result[booking.coachClass]||0)+booking.fare;
            return result;
        
    },{});
    const revenueByStatus=bookings.reduce((result,booking)=>{
        result[booking.status]=(result[booking.status]||0)+booking.fare;
        return result;
    },{});
    return{
        totalRevenue,
        revenueByCoach,
        revenueByStatus
    };
};

const getStationLoad=(bookings)=>{
    const stationLoad=bookings.reduce((result,booking)=>
    {
        const station = booking.boardingStation;
        result[station]=(result[station]||0)+1;
            return result;

        },{})
        return stationLoad;
    };


const getVulnerablePassengers=(bookings)=>{
    return bookings.filter(booking=>booking.status==="Confirmed"&&(booking.age<12 || booking.age>=60)).map(booking=>(
        {
            name:booking.passengerName,
            age:booking.age,
            coach: booking.coachClass,
            seat: booking.seatNo
        }
    ));
}

const getWaitlistClearancePlan = (bookings) => {
    return bookings.filter(booking => booking.status === "WL") .sort((a, b) => a.pnr - b.pnr)
    .map((booking, index) => ({
            pnr: booking.pnr,
            name: booking.passengerName,
            age: booking.age,
            coach: booking.coachClass,
            clearanceRank: index + 1
        }));
};

const generateFullDashboard =(bookings)=>{
    return{
        occupancySummary: getOccupancySummary(bookings),
        revenueBreakdown: getRevenueBreakdown(bookings),
        stationLoad: getStationLoad(bookings),
        vulnerablePassengers: getVulnerablePassengers(bookings),
        waitlistClearancePlan: getWaitlistClearancePlan(bookings)
    };

};

const dashboard = generateFullDashboard(bookings);
console.log(dashboard);