// var a=10;
// let b=30;
// const c=30;

// console.log("ouside , ",a);
// console.log("outside , ",b);
// console.log("outside , ",c);



// function f1(){
//     console.log("inside function ",a);
//     console.log("inside function ",b);
//     console.log("inside function ",b);
// }
// f1()


// if (true){
//       console.log("inside function ",a);
//     console.log("inside function ",a);
//     console.log("inside function ",a);
// }

// console.log("ouside , ",a);
// console.log("outside , ",b);
// console.log("outside , ",c);


//function scope
// function abu(){
//     var user1= "rose ";
//     let user2="abyyy "
//     const user3="arya "

//     console.log("nee1 ",user1);
//     console.log("nee2 ",user2);
//     console.log("nee2 ",user3);
    
// }
// abu()
//  console.log("nee1 ",user1);
//     console.log("nee2 ",user2);
//     console.log("nee2 ",user3);


    // block scope
// if("qspiders "){
//     var isBatteriesAvailable=false;
//     let studentCount=700;
//     const brand="banloree ";

//     console.log("is batterties are avilable: ",isBatteriesAvailable);
//     console.log("total no of nee:",studentCount);
//     console.log("brand name :",brand);

// }   
//   console.log("is batterties are avilable: ",isBatteriesAvailable); 
//     console.log("brand name :",brand);
//     console.log("total no of nee:",studentCount);




// let companyName = "testYantra ";
// function employeeDetails(){
//     console.log("employee works at  "+ companyName);

    
// }

// function companyDetails(){
//     console.log("company : "+ companyName);
    
// }

// employeeDetails();
// companyDetails();



// let currency = "₹";
// function showProductPrice() {
//     let price = 25000;

//     console.log("Price:", currency + price);
// }
// showProductPrice()

// function showCartTotal() {
//     let total = 45000;

//     console.log("Cart Total:", currency + total);
// }
// showCartTotal();
// showProductPrice();



// let deliveryPay=40;
// function calculateFoodBill(){
//     let foodPrice=500;
//     console.log("foodBill: ",foodPrice + deliveryPay);
    
// }

// calculateFoodBill();
// function  calculateOderBill(){
//     let oderPrice=800;
//     console.log("oder bill : ",oderPrice + deliveryPay);
    
// }
//  calculateOderBill();







 //function scope
// function calculateSalary() {
//     let salary = 30000;
//     let bonus = 5000;
//     let totalSalary = salary + bonus;
//     console.log(employee);
//     console.log("Total Salary:", totalSalary);
// }
// calculateSalary();
// console.log(salary); 





// function checkBalance() {

//     let balance = 25000;
//     let accountNumber = "12345";

//     console.log("Balance:", balance);
//     console.log("Account:", accountNumber);
// }

// checkBalance();

// console.log(balance); 








function calculateElectricityBill() {

    let units = 180;
    let rate = 6;

    let bill = units * rate;

    console.log("Electricity Bill:", bill);
}

calculateElectricityBill();

console.log(units); 
    












// let product = "Laptop";

// if (product === "Laptop") {

//     let discount = 10;
//     const message = "10% discount available";

//     console.log(product);
//     console.log(discount);
//     console.log(message);
// }

// console.log(product);  
// console.log(discount); 








// let employeePresent = true;

// if (employeePresent) {

//     let attendanceMessage = "Employee is Present";

//     console.log(attendanceMessage);
// }

// console.log(employeePresent);     
// console.log(attendanceMessage);  






// let products = ["Laptop", "Mobile", "Watch"];

// for (let i = 0; i < products.length; i++) {

//     console.log(products[i]);
// }

// console.log(products); 
// console.log(i);        





////Mixed Example
// let company = "Amazon"; // Global Scope

// function employeeDetails() {

//     let employeeName = "Ravi"; // Function Scope

//     if (employeeName === "Ravi") {

//         let salary = 40000; // Block Scope

//         console.log(company);      
//         console.log(employeeName); 
//         console.log(salary);       
//     }

//     console.log(company);      
//     console.log(employeeName); 
//     // console.log(salary);    
// }



// employeeDetails();

// console.log(company);      
// // console.log(employeeName); 
// // console.log(salary);   