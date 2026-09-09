function valid(data) {

    if (typeof data.name != "string")
        return false;

    if (typeof data.age != "number" || data.age <=18)
        return false;

    if (typeof data.email != "string" || !data.email.includes("@"))
        return false;
return true;

}

module.exports = { valid };