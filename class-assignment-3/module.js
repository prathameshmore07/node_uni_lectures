function test(data) {
    if (typeof data.studentname != "string")
        return false;

    if (typeof data.age != "number")
        return false;

    if (typeof data.rollno != "number")
        return false;

    if (typeof data.email != "string" || !data.email.includes("@"))
        return false;

    if (typeof data.time != "string" || isNaN(Date.parse(data.time)))
        return false;

    return true;
}

module.exports = { test };