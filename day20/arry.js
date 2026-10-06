// let names=["arya","aby","ammu"]
// let result=names.forEach((ele)=>{
//     console.log(ele)

//     return"hii"; // we cannot return anything / it will not returning any value
    
// })
// console.log(result);


// // map()  it returing values 
// let namees=["rose","appu","unni"];
// let res=namees.map((ele)=>{
//     return ele
// })
// console.log(res);


// let price=[100,300,200,400,500];
// let result=price.map((element)=>{
//     return element+50;
// })
// console.log("returns array",result);
// console.log("original array",price);


// let users=["Arya","Ammu","KunjiKili","Paru"];
// let res=users.map((ele)=>{
//     return ele.toUpperCase()

// })
// console.log("acctual is:",users);
// console.log("return array:",res);



// let salaries=[3000,10000,40000,30000,75000,560000];
// let res=salaries.filter((ele)=>{
//     return ele > 30000   // return all matching elements
// })
// console.log("new return array:",res);
// console.log("using filter method:",salaries);


// let names=["rose","anugrah","abin","arjun"];
// let res=names.filter((ele)=>{
//     return ele.startsWith("r")
// })
// console.log(res);


// let salaries=[3000,10000,40000,30000,75000,560000];
// let resu=salaries.find((ele)=>{  // return first matching element
//     return ele > 30000
// })
// console.log("new return array:",resu);
// console.log("using finding method:",salaries);


// map method
 let users = ["arya","abhinand","arjun","abhi"];
 let result=users.map((ele,ind)=>{
    // console.log("element:",ele);
    // console.log("index:",ind);
    // return ele
    return ind
    
    
 })
 console.log("result:",result);
 