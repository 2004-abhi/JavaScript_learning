//task - 2 (24-09-26)
// function checkUsername(username){
//   if(username.length <= 15){
//     return "Username accepted";
//   }
//   else{
//     return "Usernmae is too long";
//   }
// }
// console.log(checkUsername("reddy"));

//task - 2
// function checkCoupon(coupon){
//   if(coupon.toUppercase() === "SAVE20"){
//     return "Coupon applied succeddfully";
//   }
//   else{
//     return "Invalid coupon";
//   }
// }
// console.log(checkCoupon("SAVE20"));


//.toLowerCase()
//use:convert text to Lowercase
//Example 1
// function checkMail(email){
//   if(email.toLowerCase() === "admin@gmail.com"){
//     return "Admit login";
//   }
//   else{
//     return "User login";
//   }
// }
// console.log(checkMail("ADMIN@GMAIL.COM"));


// example 3
// Example 2:

// function checkCity(city){
//     if (city.toUpperCase()==="HYDERABAD"){
//         return "Delivery available"
//     }
//     else{
//         return "Check another city"
//     }
// }

// console.log(checkCity("hyderabad"));


//task - 5
// function checkRole(role){
//   if(role.toLowerCase() === "trainer"){
//     return "Train dashboard";
//   }
//   else{
//     return "Student dashboard";
//   }
// }
// console.log(checkRole("TRAINER"));



//REMOVE SPACE FROM Begining and end
// function login(username){

//     username = username.trim();

//     if (username == "kalam"){

//         return "enter successful ..!!!"; 

//     }

//     else{

//         return "invalid username"; 

//     }

// }

// console.log(login("kalam"));



// function searchProduct(product){
//   product = product.trim();
//   if(product === "laptop"){
//     return "Laptop found";
//   }
//   else{
//     return "Product not found";
//   }
// }
// console.log(searchProduct("laptop"));


//example 3
// function checkMessage(message){
//   if(message.toLowerCase().includes("Urgent")){
//     return "Show urgent notification";
//   }
//   else{
//     return "Normal notification";
//   }
// }
// console.log(checkMessage("This is an urgent message"))

// example 4
function checkMail(email){
  if(email.includes("@")){
    return "valid eamil format";
  }
  else{
    return "Invalid email format";
  }
}
console.log(checkMail("student@gmail.com"));



//ceck waeater a strin starts wit specific text
//example 1
function checkFile(fileName){
  if(fileName.startsWith("IMG")){
    return "This is an image file";
  }
  else{
    return "Unknown file";
  }
}
console.log(checkFile("IMG_1024.jpeg"));

//example 2
//ethoo example
function checkURL(url){
  if(url.startsWith("https://")){
    return "Secure webisite";
  }
  else{
    return "Not a secure URL";
  }
}
console.log(checkURL("https://example.com"))


//endwit()
//use : ceck weater a strin ends wit specific text
// example 1
function checkUsername(username){
    if(username.length<=15){
        return "username accepted"
    }
    else{
        return "username is too long"
    }
}
console.log(checkUsername("kalamreddy"));

//example 2
function checkFile(filename){
    if(filename.endsWith(".pdf")){
        return "pdf document"
    }
    else{
        return "other type of file"
    }
}
console.log(checkFile("resume.pdf"));

// example 3
function searchProduct(product){
  product=product.trim();
  if(product==="laptop"){
    return "laptop found";
  }else{
    return "product not found";
  }
}
console.log(searchProduct("laptop"));
