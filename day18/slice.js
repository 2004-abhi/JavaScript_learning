//charAt() - uesd to get character at the particular index
//example - 1
function checkFirstLetter(Name){
  let first = name.charAt(0);
  if(first.toUpperCase() === "K"){
    return "Name starts with k";
  }
  else{
    return "Different starting letter";
  }
}
console.log(checkFirstLetter("Kalam"));


//example - 2
function checkOTP(otp){
  let firstDigit = otp.charAt(0);
  if(firstDigit === "9"){
    return "OTP starts with 9";
  }
  else{
    return "OTP starts with another digit";
  }
}

console.log(checkOTP("912345"));

//replace()
function formatMessage(message){
  let result = message.replace("Hello","Hi");
  if(result!== message){
    return result;
  }
  else{
    return "Word not found";
  }
}
console.log(formatMessage("Hello students"));

//example - 2 (replace())
function updatePrice(text){
  let result = text.replace("500","450");
  if(result !== text){
    return "Discounted price";
  }
  else{
    return "Price unchanged";
  }
}
console.log(updatePrice("Product price is 500"));


//replaceAll()
function cleanMessage(message){
  let result = message.replaceAll("bad","***");
  if (result !== message){
    return result;
  }
  else{
    return "No unwanted word found";
  }
}
console.log(cleanMessage("bad word , bad comment"));


// slice()

let trainer = "Kalam";
// let a = trainer.slice(0,3);
// let a = trainer.slice(0);
let a = trainer.slice(-3,-1

)
// let a = trainer.slice(3,2);  // this will not work , we cannot iterate from backwords using slicing
console.log(a);


let tr = "Kalam";
let aa = tr.substring(0,4);
let bb = tr.substring(1,2);
let cc = tr.substring(4,2);// if the starting index is larger than the ending index in substring() swaps the starting and ending index.
console.log(aa);
console.log(bb);
console.log(cc);


//spli()

let date = "25-09-26";
let a2 = date.split("-");
console.log(a2);

let email = "abinnnmss@gmail.com";
let b = email.split("@");
console.log(b);

let user = "Venkat";
let c = user.split("@");
console.log(b);

let user2 = "Venkat";
let ccc = user2.split(" ");
let dd = user2.split("  ");
console.log(ccc);
console.log(dd)



//sep - 26
//concat()
//example -1 
// function createaName(firstName , lastName){
//   let fullName = firstName.concat("",lastName);

// }


//example - 2
function createMessage(name , city){
  let message = "Hello ".concat(name," , welcome to ",city);
  if(message.includes("Welcome")){
    return message;
  }
  else{
    return "Message error";
  }
}
console.log(createMessage("Ravi","Kochi"));


//repeat() - repeat a string a specified number of times
//example - 1
function generateStars(count){
  let stars = "*".repeat(count);
  if(count > 0){
    return "Rating: "+stars;

  }
  else{
    return "No rating";
  }
}
console.log(generateStars(5));

//example - 2
function createDivider(count){
  let line = "-".repeat(count);
  if(count >= 5){
    return line;
  }
  else{
    return "Divider too short";
  }
}
console.log(createDivider(10));

//padStart() - add characters at the begining untill a target length is reached
//example - 1
function formatOTP(otp){
  let formatted = otp.padStart(6,"0");
  if (formatted.length === 6){
    return "Your OTP is " +formatted;
  }
  else{
    return "Invalid OTP";
  }
}
console.log(formatOTP("123456"));


//example - 2
function accountNumber(number){
  let formatted = number.padStart(8,"0");
  if(formatted.length === 8){
    return "Account no : " +formatted;
  }
  else{
    return "Invalid account number";
  }
}
console.log(accountNumber("5678"))

