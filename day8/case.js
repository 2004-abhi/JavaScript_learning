let month=12;
switch(month){
    case 1 :
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
     case 3:
        console.log("march");
        break;    
    default :
         console.log("invalid month");   
}

let item="pizza";
switch(item){
     case "burger":
        console.log("burger is selected");
        break;
    case "kfc":
        console.log("kfc is selected");
        break;
    case "pizza":
        console.log("pizza is selected");
        break;
            
    default:
        console.log("item");
}

let balance = "Check Balance";
switch (balance) {
    case "Check Balance":
        console.log("Your balance is ₹10,000");
        break;
    case "Deposit Money":
        console.log("Money deposited ");
        break;
    case "Withdraw Money":
        console.log("Money withdrawn ");
        break;
    case "Mini Statement":
        console.log(" mini statement");
        break;
    default:
        console.log("Invalid option");
}


console.log(window);

console.log(Window.alert("welcome to unemoloyed erra"));

let salary=prompt("enter your expected salary")
console.log("aby expected salary is:",salary);
console.log(typeof salary);

let result=confirm("are you sure you want to join a company or move to your dream")
console.log("student response:",result);




let username="aby";
let password="nobody";
if (username==="aby" && password==="nobody"){
    alert("aby entered succesfully")
}
else{
    alert("sir please enter valid username and password")
}


let usernamee="aby";
let passworrd="nobody_uuu";
if (usernamee==="aby" && passworrd==="nobody"){
    alert("aby entered succesfully")
}
else{
    alert("sir please enter valid username and password")
}


let resullt=confirm("are you want to exit ?")
    if(resullt===true){
        console.log("exited out succesfully"); 
    }
    else{
        console.log("exit failed ");
    }


    let name=prompt("enter your name")
    console.log("username is:",name);
    
/// verfication age
let age = Number(prompt("enter your age "));
if (age>=18){
    alert("you are correct!");
}
else{
    alert("you are not correct")
}