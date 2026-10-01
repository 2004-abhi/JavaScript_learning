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


let price=[100,300,200,400,500];
let result=price.map((element)=>{
    return element+50;
})
console.log("returns array",result);
console.log("original array",price);

