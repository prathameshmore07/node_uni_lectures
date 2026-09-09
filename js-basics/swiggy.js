// // function trackOrder() {
// //     return new Promise((resolve, reject) => {
// //         console.log("Order placed, preparing order.....");

// //         setTimeout(() => {
// //             const orderPlaced = true;

// //             if (orderPlaced) {
// //                 resolve("Order successfully placed");
// //             } else {
// //                 reject("Order cancelled by restaurant bhuka reh bkl");
// //             }
// //         }, 3000);
// //     });
// // }

// const orderResult = trackOrder();

// orderResult
//     .then((result) => {
//         console.log("Success:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Order tracking completed.");
//     });
// const getUser = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve({
//             id: 101,
//             name: "Rahul",
//             email: "aymd@gmail.com",
//             age: 25
//         })
//     } else {
//         reject({ message: "Something went wrong!" })
//     }
// });

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
        return "User Processign Completed";
    })
    .then((message) => {
        console.log(" Step 4: ", message);
    })
    .catch((error) => {
        console.log("Error: ", error);
    })