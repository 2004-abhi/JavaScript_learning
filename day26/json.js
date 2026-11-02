
// waht is JSON?
// JSON - javascript object notation
// it is a format used to store or send the data between client (frontend) and server (backend) 
// we have 2 methods
// 1. JSON.stringify() - it convert - javascript object to json
// 2. JSON.parse() - it convert - JSON to javascript object

// when you fetch the data from the server it will give json format ,
//  so we want to understand the data we use to convert it into javascript object

let student= {
    name :"abhinand ",
    isActive:true,
    hasGirlfriend : 0


}

let x=JSON.stringify(student)
console.log(x);  //json data


// converting JSON to Javascript Object
let result=JSON.parse(x)
console.log(result); // Javascript object
console.log(result.hasGirlfriend);

