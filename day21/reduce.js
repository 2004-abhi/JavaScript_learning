// let prices=[10,20,3,40];
// let result=prices.reduce((acc,value)=>{
//     return acc+value
// },10)
// console.log(result);



// string to array -> split()
// array to string -> join()


// let name=["abu","aby","abhi","abhinand","unni"];
// console.log(name);
// let result=name.join("--")
// console.log(result);

// console.log(name.includes("abhi"));


// slice()
// it returns a portion of an array without changing the array
// slice()does not modify the original array 


// show first three products
// let products=["laptop","mouse","keyboard","speaker","monitor"];
// console.log(products.slice(0, 3));


// //recent oders
// let orders=["01","02","03","04"];
// console.log(orders.slice(-2));



// splice()
// add , remove , or replace elements at a choise

// remove cancalled item
// let cart=["laptop","mouse","keyboard","speaker","monitor"];
// cart.splice(1, 1);
// console.log(cart);


// insert a product
// let product=["laptop","mouse","keyboard","speaker","monitor"];
// product.splice(1 , 0 , "remote")
// console.log(product);

// replace a product
// let products=["laptop","mouse","keyboard","speaker","monitor"];
// products.splice(1, 1, "new mouse");
// console.log(products);



// includes()
// check wheather an exact v value exists in an array


// cart check
// let cart=["laptop","mouse","keyboard","speaker","monitor"];
// console.log(cart.includes("mouse"));


// // skill check
// let skills=["html","java","python"];
// console.log(skills.includes("react"));


// join()
// combines array elements into one string using join

// display skills
//  let skills=["html","java","python"];
//  console.log(skills.join(","));

 
// // order summary
// let items= ["laptop","mouse","keyboard","speaker","monitor"];
// console.log(items.join(" + "));



// concat()
// combines two or more arrays and return a new

// combine batches
// let morning = ["ravi","abu"];
// let evening = ["arya","abhinand"];
// console.log(morning.concat(evening));


// // combine skills
// let fronted = ["html","css"];
// let js =["javascript","react"];
// console.log(fronted.concat(js));



// find()
// returns the first element that satisfied a condition

// find first expensive products
// let prices = [10000 , 5000 , 45000 ,600000];
// console.log(prices.find(prices => prices > 40000));

// find first failed mark
// let marks = [ 75 , 65 , 32 , 28];
// console.log(marks.find(marks => marks<40 ));




// fiter()
// creates a new array containing all elements that satisfy the condition

// product above budgets
// let prices = [500,1500,5000,25000];
// console.log((prices.filter(prices=>prices>1000)));


// let marks=[35,45,60,75,80];
// console.log(marks.filter(marks=>marks>=40));


// forEach()
// runs a function once for every elements

//example - 1
let students = ["Ravi","Kiran","Suresh"];
students.forEach(student => console.log(student));


let users= ["ravi","kiran"];
users.forEach(user => console.log(`Hi ${user}`));

let price=[200,100,300];
price.forEach(price => console.log(price));
