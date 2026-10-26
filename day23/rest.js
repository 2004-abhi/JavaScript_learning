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
// let employee = {
//     name : "Ravi",
//     monthlySalary : 25000,
//     showYearlySalary : function(){
//         let yearlySalary = this.monthlySalary * 12;
//         console.log("employee :" + this.name);
//         console.log("yearly salary :" +yearlySalary);
        
        
//     }
  
// };
// employee.showYearlySalary();



// call, apply, bind for this keyword
// this is the problem we use it as multiple times

// let appu={
//     user:"Abhijith",
//     course:"Hotel management",
//     city:"Thuravoor",
//     display:function showDetails(){
//         console.log(this.course);
        
//     }

// }
// appu.display()



// let unni={
//     user:"Abhinand",
//     course:"Enginner in cse",
//     city:"Alapuzha",
//     display:function showDetails(){
//         console.log(this.course);
        
//     }

// }
// unni.display()



// let kunjikili={
//     user:"archana",
//     course:"Bio Technology",
//     city:"Thuravoor",
//     display:function showDetails(){
//         console.log(this.course);
        
//     }

// }
// kunjikili.display()



// solution
// call(),apply() and bind() --> used to control the value of this
// inside function.

// call() ---> it invokes/Executes the function immediately.
//we can specify which object the this keyword should refer to inside the fuction


let appu={
    user:"Abhijith",
    course:"Hotel management",
    city:"Thuravoor",
   
}




let unni={
    user:"Abhinand",
    course:"Enginner in cse",
    city:"Alapuzha",
  
}




let kunjikili={
    user:"archana",
    course:"Bio Technology",
    city:"Thuravoor",

}

function showDetails(father,age){
    console.log("user name is :",this.user);
    console.log("course name is :",this.course);
    console.log("father name is :",father);
    console.log("age is :",age);
    
      
}

// showDetails.call(unni,"harilal",55)
// showDetails.call(appu,"binu",56)
// showDetails.call(kunjikili,"lali",60)


// showDetails.apply(unni,["harilal",55])
// showDetails.apply(appu,["binu",56])
// showDetails.apply(kunjikili,["lali",60])



// bind() -->it will not execute the function immediately.
// it returns  new function with specified object
// bind()
let newfunction=showDetails.bind(unni,'soumya',45)
// let newfunction=showDetails.bind(appu,'joly',48)
newfunction()