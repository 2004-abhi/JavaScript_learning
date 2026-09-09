// let month=12;
// switch(month){
//     case 1 :
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//      case 3:
//         console.log("march");
//         break;    
//     default :
//          console.log("invalid month");   
// }

// let item="pizza";
// switch(item){
//      case "burger":
//         console.log("burger is selected");
//         break;
//     case "kfc":
//         console.log("kfc is selected");
//         break;
//     case "pizza":
//         console.log("pizza is selected");
//         break;
            
//     default:
//         console.log("item");
// }

// let balance = "Check Balance";
// switch (balance) {
//     case "Check Balance":
//         console.log("Your balance is ₹10,000");
//         break;
//     case "Deposit Money":
//         console.log("Money deposited ");
//         break;
//     case "Withdraw Money":
//         console.log("Money withdrawn ");
//         break;
//     case "Mini Statement":
//         console.log(" mini statement");
//         break;
//     default:
//         console.log("Invalid option");
// }


// console.log(window);

// console.log(Window.alert("welcome to unemoloyed erra"));

// let salary=prompt("enter your expected salary")
// console.log("aby expected salary is:",salary);
// console.log(typeof salary);

// let result=confirm("are you sure you want to join a company or move to your dream")
// console.log("student response:",result);




// let username="aby";
// let password="nobody";
// if (username==="aby" && password==="nobody"){
//     alert("aby entered succesfully")
// }
// else{
//     alert("sir please enter valid username and password")
// }


// let usernamee="aby";
// let passworrd="nobody_uuu";
// if (usernamee==="aby" && passworrd==="nobody"){
//     alert("aby entered succesfully")
// }
// else{
//     alert("sir please enter valid username and password")
// }


// let resullt=confirm("are you want to exit ?")
//     if(resullt===true){
//         console.log("exited out succesfully"); 
//     }
//     else{
//         console.log("exit failed ");
//     }


//     let name=prompt("enter your name")
//     console.log("username is:",name);
    
// /// verfication age
// let age = Number(prompt("enter your age "));
// if (age>=18){
//     alert("you are correct!");
// }
// else{
//     alert("you are not correct")
// }


// student result
// let marks = Number(prompt("enter your marks ")); 
// if (marks>=35){
//     alert("sucessfully! you passed");
// }
// else{
//     alert("sorry! you failed. ");
// }

// movie eligibility
// let age = Number(prompt("enter your age "))
// if ( age>=18){
//     alert("you can see movie!..")
// }
// else
// {
// alert("sorry ! you are not enter")
// }


// atm withdrawal
// let balance=5000;
// let amount= Number(prompt("enter withdrawal amount!.. "));
// if (amount<=balance){
//     balance=balance-amount;
//     alert("withdrawal successfull !...")
//     alert("remaining balance:"+balance); // cancatination +balance
// }
// else{
//     alert("insufficent balance !...");
// }


// let amount =Number(prompt("enter your purchase amount "));
// if (amount >= 5000 ){
//     alert("wow ! you nice a 20% discount");
// }
// else if(amount>=2000){
//     alert("wow ! you nice a 10% discount");
// }
// else {
//     alert("no discount available");
// }


// delect conformation
// let result = confirm("are you sure you want to delete your account"); // confirm is used to ask user for conformation is ok or cancel 
// if (result){
//     alert("ammount delete successfully");

// }else {
//     alert("account delection cancelled !...");
// }

// online shopping
// let product=prompt("enter product name");
// let result=confirm("do you want to buy"+product+ "?");
// if (result){
//     alert(product+"ordered successfully !");
// }
// else{
//     alert("order cancelled");
// }

// food oder
let food = prompt("Enter food name");

let quantity = Number(prompt("Enter quantity"));

if (quantity > 0) {

    let result = confirm(
        "Do you want to order " + quantity + " " + food + "?"
    );

    if (result) {
        alert("Your order for " + quantity + " " + food + " is confirmed");
    }
    else {
        alert("Order canceled");
    }

}
else {

    alert("Please enter a valid quantity!");

}