const validateUser = (user) => {
    const errors = [];

    if (!user || typeof user !== "object") {
        return { isValid: false, errors: ["Payload must be an object"] };
    }

    if (typeof user.name !== "string" || !user.name.trim()) {
        errors.push("name must be a non-empty string");
    }

    if (typeof user.age !== "number" || user.age <= 18) {
        errors.push("age must be a number greater than 18");
    }

    if (typeof user.email !== "string" || !user.email.includes("@")) {
        errors.push("email must include '@'");
    }

    return { isValid: errors.length === 0, errors };
};

module.exports = { validateUser };