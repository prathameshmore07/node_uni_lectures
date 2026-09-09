var totalCartValue=0;
const taxRate=0.10;

function addtoCart(itemPrice,discount){
    let discountprice=itemPrice-discount;
    let tax=discountprice*taxRate;
    let finalprice=discountprice+tax;
     totalCartValue+=finalprice;
     

    console.log("\nfinal price of item: " + finalprice.toFixed(2));
    console.log("\ntotal cart value: " + totalCartValue.toFixed(2));


}
addtoCart(100, 30);
addtoCart(70, 1);

