// async function fetchdata(a,b){
// return a+b;
// };

function getBookingStatus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("booking confirm");
        }, 2000);
    });
};

 async function showStatus(){
    console.log("checking status.....");
    const result=await getBookingStatus(); //yaha rukega jak tak resolve nhi hota
    console.log(result);
 };

 showStatus();
 console.log("u are nigga")
