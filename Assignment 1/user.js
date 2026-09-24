const username='TTT sahur';
const userage=67;
const userbio=null;
const ispremiumuser=true;
const userid=Symbol;

const useraddress={
    city:"Dholakpur",
    country:"United States of Dholakpur"

};
const favoriteitems=['car','bike','keys','keychain','money'];
function getusergreeting(){
    return `Hello, ${username}! may u have a noice day:)`
}

console.log('user name: ',username);
console.log('city: ', useraddress.city);
console.log('third fav item: ', favoriteitems[2]);
console.log('greeting: : ', getusergreeting());