// function outer(){
//     console.log("koi is a outer class ");
//     function inner(){
//         console.log("suu is inner class ");
        
//     }
//     inner()
// }
// outer()


// function outer(){
//     let Branch="mumbai "
//     function inner(){
//         console.log("gilly is inner function ");
//         console.log(Branch); // using closure object
//     }
//     inner()
// }
// outer()


// function f1(){
//     function f2(){
//         return "my name is abu... "
//     }
//     let res = f2()
//     // console.log(res);
//     return res;
    
// }
// let x=f1()
// console.log(x);



// function calculateSalary(sal){
//     function calculateBonus(){
//         let Bonus = sal*10/100  //5000
//         // console.log(Bonus); 
//         return Bonus
//     }
//     let res=calculateBonus()
//         // console.log(res);
//         return res+sal //50000+50000=55000
        
   
// }
// let totalsal=calculateSalary(50000)
// console.log(totalsal);


//arrow function

// const calculateBill = (units) =>{
//     let bill;
//     if (units<=100){
//         bill = units*2;

//     }else{
//         bill = units *5;
//     }
//     console.log("electricity Bill :",bill);
    
// };


// employee bonus

// const calculateBonus = (salary)=>{
//     let bonus;
//     if (salary>=30000){
//         bonus = salary*0.10;
//     }else{
//         bonus=salary*0.05;
//     }
//     console.log("bonus :",bonus);
    
// };
// calculateBonus(40000);


// movie ticket

const ticketPrice = (age)=>{
    let price;
    if(age<12){
        price=100;
    }else {
        price=200;
    }
    console.log( "ticket price  ",price);
    
};
ticketPrice(10);