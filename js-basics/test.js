const getUser = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve({
            id: 6769,
            name: "TTT sahur",
            email: "tttsahur@gmail.com",
            age: 25
        })
    } else {
        reject({ message: "Something went wrong!" })
    }
});

getUser
    .then((data) => {
        console.log("Step 1: Data Received", data);
        return data
    })
    .then((data) => {
        console.log(" Step 2: Username: ", data.name)
        return data.email;
    })
    .then((email) => {
        console.log(" Step 3: Email:", email);
        return "User Processing Completed";
    })
    .then((message) => {
        console.log(" Step 4: ", message);
    })
    .catch((error) => {
        console.log("Error: ", error);
    })