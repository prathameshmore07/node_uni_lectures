const myPromise = new Promise((resolve, reject) => {
    // here we do async work
    const success = true;

    if (success) {
        resolve("kaam kiya bc");
    } else {
        reject("reject hua bc");
    }
});