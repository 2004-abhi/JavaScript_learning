// // immutable example cannot be chan 
let trainer = "kalam ";
// console.log(trainer[0]);
trainer[0]="R ";
console.log(trainer);


// // muttable example can be chan
let student=["abi ","abuuuu ","ammu ","kunjiii "]
// console.log(student[0]);
student[0]="abinand ";
console.log(student);


// //string data type
let movieName="kudumba unit ";
let theater="pvr cinema ";
console.log(typeof movieName);
console.log(typeof theater);


// //number data type
let ticketPrice=200;
let noOfSeats=5;
let rating=4.5
let totalAmount=ticketPrice*noOfSeats;
console.log(totalAmount);


// //Boolean(true , false)
let isPaymentCompleted=true;
let hasShowStarted=false;
console.log(isPaymentCompleted);


// //undefined
let interviewData;
console.log(interviewData);


// //null
let salary=null;
console.log(salary);
console.log(typeof salary);

// mixed values
// let a=10n
// let b=20
// console.log(a+b);

let a="liya ";
let b="liya ";
console.log(a==b);


let user1=Symbol("liya ")
let user2=Symbol("liya ")
console.log(user1==user2);