// //Synchronous code 
// console.log("start");
// for(let i=1;i<100;i++){
//     console.log(i);   
// }
// console.log("END");

// // in synchronous will execute first and code will execute until the end , so sometimes its show some delay in UI because . 
// // it executes completely then moves to the another so shows delay
// //  this delay problem was solved by asyncronous


// // Asynchronous code
// console.log("Start");  // synchronous code
// setTimeout(()=>{
//     console.log("Hello EveryOne");
    
// },5000)
// console.log("End");   // synchronus code

// //////


// console.log("welcome to AbhiBUS");  //synchronous code
// setTimeout(()=>{
//     console.log("Thank you for Booking");
//     console.log("use ABHIRETURN coupon to get 50% Discount");
// },7000)
// console.log("Your booking is in Process...");  //synchronous code

// ///////

// console.log("loading...");
// setTimeout(()=>{
//     console.log("data loaded successfully");
    
// },3000)


// // we use setTimeout to delay the excution of code in asyncronous this way we can reduce the imapct 
// // setTimeout (callBackfunction , delaytime);



// ///////////



// // asyncronous code (setIntravel)

// console.log("Start");
// setInterval(()=>{
//     console.log("This is Asynchronous code");
//     console.log("It will keep on execute after a delay time");   
// },3000)
// console.log("End");


// // counter
// console.log("time started");
// let count=0;
// setInterval(()=>{
//     count++;
//     console.log("count down :",count);  
// },1000)


// // clock
// console.log("This is Digital Clock");
// // console.log(new Date()); //complete date and time everytime

// setInterval(()=>{
//     console.log(new Date().toLocaleString());  //only date and time
//     console.log(new Date().toLocaleTimeString()); // only time
//     console.log(new Date().toLocaleDateString());   
// },1000)


//////////////

//clearTimeout
// clearInterval
//using this method we can stop/remove the timeout and intervals
// console.log("start");
// let id=setTimeout(()=>{
//     console.log("this is setTimeout");
    
// },2000)
// clearTimeout(id)    // used to stop the timeout of 2 sec
// console.log("timer removed");


//counter

// let count=0;
// let id=setInterval(()=>{
//     count++ //count=count+1
//     console.log("count down :",count);  // 1 / 2 / 3 / 4 / 5
//     if (count==5){
//         clearInterval(id)
//     }
// },1000)



// //////////////////////////////////////////////
// what is promise ......?
// how to create a promise...?
let payment = new Promise((resolve,reject)=>{
    console.log("payment processing......");
    setTimeout(() => {
        let paymentStatus=true;
        if(paymentStatus){
            resolve("payment successful..! Oder confirmed")
        }
        else{
            reject("Payment failed...! plz try later or do it again")
        }
        
    }, 3000);
    
})

// How to handle a promise

payment.then((message)=>{
        console.log(message);
        
})
.catch((reason)=>{
    console.log(reason);
    
})
