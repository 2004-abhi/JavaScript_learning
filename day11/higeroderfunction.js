// function travelling(a){
//     console.log("going home.... ");
//     // console.log(a);//notification dispalys all functions
//     a()
// }
// function notification(){
//     console.log("reached home.... very late today🥲");
    
// }
// travelling(notification)


// function malePayment(x){
//     console.log("payment is process on way ....... ");
//     console.log("payment successufullyyy ");
//     // console.log(x); //is show full readydelivery function 
//     x()
// }

// function readydelivery(){
//     console.log("your food is ready.... ");
// }
// malePayment(readydelivery)


// function ticketBooking(a){
//     console.log("Booking your movie ticket...");
//     a("kalki",6)
    
// }

// function sendConfirmation(movie,time){
//     console.log("ticket booked for",movie);
//     console.log("see movie in",time,"pm");
    
    
// }
// ticketBooking(sendConfirmation)


// function f1(){
//     return"ayooo"
// }
// let a=f1
// console.log(a);


function mainBranch(){
    console.log("india is one of the powerfull country...");
    return function subBranch(){
        console.log("uk is not bad alsoo....");
        
    }
    
}
let res=mainBranch()
res()
// console.log(res);
