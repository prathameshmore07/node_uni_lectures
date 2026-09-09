function rto(data) {

    if (typeof data.clgname != "string")
        return false;

    if (typeof data.clgid != "number")
        return false;

    if (typeof data.vehiclenumber != "number")
        return false;

    if (typeof data.vehicletype !== "string" || !["car", "bike", "scooter"].includes(data.vehicletype)
    )return false;

    return true;
}

module.exports = { rto };