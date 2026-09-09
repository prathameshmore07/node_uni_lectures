//primitive data type: number, string,operators, boolean
var a = 34; //number
var str = 'name' || 'name' || 'name'; //string
var isReady = true || false; //boolean 

//boolean is used because the whole logic of any 
// language works on 0 and 1 binary system. 

//unary operator: increment and decrement,etc.

var value = null;
var b = undefined;

var user = {       //user defined object
    name: "Manish",
    age: 35,
    isAdmin: true,

};
console.log(user.name)

//type corrision or typecasting: priority based
//Basically, if there are two types of data types and print it will
//convert the other data type into a the higher priority data type.

console.log(typeof null); //typeof operator
console.log(3 + '4'); //string concatenation (typecasting eg.)
console.log(3/4); //floating point number (precision error occurs)

function myFun (aFunction) {
    aFunction();
}

function callback() {
    console.log('callback called');
}

myFun(callback);

//Arrow Function
const newFun = () => console.log('NewFun');
 
//asychronous model, async await, promise
//micro & macro server: blocking and how to make it non blocking using asynchro.