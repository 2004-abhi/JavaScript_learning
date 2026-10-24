// // rest parameter
// function cart(item1,...x){
//     console.log(item1);
//     console.log(x); 
// }
// cart("laptop","HeadPhones","watch")
// // note:rest parameter always should be the last parameter

// Spread Operator(...)
// by using this we can copy an array/object
// let mit=["abhijith","kailas","abin","akash"]
// console.log("Original Array:",mit);

// let copiedarray=["abhiand",...mit,"poojith"]
// console.log("copied array:",copiedarray);


// // using object
// let kochiBranch={
//     areaNmae:"palarivattom",
//     NoOfStudents:450,
//     BranchHead:undefined
// }

// console.log("original object:",kochiBranch);

// let copiedObject={...kochiBranch}
// console.log("copied Object:",copiedObject);



// let student={
//     user:"liya",
//     age:23,
//     display:function liya(){
//         console.log(this);
//         console.log(this.user);    
//     }

// }
// student.display()


// Non - strict mode
// function f1(){
//     console.log(this);  // this  keyword points to window
    
// }
// f1()


// strict mode
// "use strict"
// function f1(){
//     console.log(this);//this keyword value will be undefined  
// }
// f1()


// arrow function do not have their own THIS keyword
// it takes this from outer scope
// (inside outer scope we have window objecr)
// so it points to window object only...
// let a=()=>{
//     console.log(this);
    
// }
// a()

// let student1={
//     user:"liya",
//     age:22,
//     display:()=>{
//         console.log(this);
//         console.log(this.age);
        
        
//     }
// }
// student1.display()


// let sathiya={
//     subject:"great sql",
//     age:30,
//     user:"satiya shelan"
//     satisfies:function
// }


// 1 bank account - withdraw AND check balance
// 
// let account={
//     holder:"abhinand",
//     balance:5000,
//     withdraw:function(amount){
//         if (amount <= this.balance){
//             this.balance = this.balance - amount;
//             console.log("withdrawn :" +amount);
//             console.log("remaining balance :" + this.balance);
            
//         }
//         else {
//             console.log("Insufficent Balance");
            
//         }

//     },
//     showBalance:function(){
//         console.log("balance :" + this.balance);
        
//     }

// };
// account.withdraw(1000)
// account.showBalance()



// shopping cart - add item and calculate total
// let cart = {
//     item:"headphones",
//     price:1500,
//     quantity:2,
//     showTotal:function(){
//         console.log("Item :" + this.item);
//         console.log("Total :" + (this.price * this.quantity)); 
//     }
// };
// cart.showTotal()



// let student = {
//     name : "abu",
//     maths  : 80 ,
//     science : 90,
//     english : 70,
//     showResult:function(){
//         let total = this.maths + this.science + this.english;
//         let average = total / 3;
//         console.log("student :"+this.name);
//         console.log("total marks:" +total);
//         console.log("average :" +average);  
//     }
// };
// student.showResult();



// employee salary - calculate yearly salary
let employee = {
    name : "Ravi",
    monthlySalary : 25000,
    showYearlySalary : function(){
        let yearlySalary = this.monthlySalary * 12;
        console.log("employee :" + this.name);
        console.log("yearly salary :" +yearlySalary);
        
        
    }
  
};
employee.showYearlySalary();