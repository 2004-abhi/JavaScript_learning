// let price=[10,30,40,70,100]
// let res=price.slice(1,4)
// console.log(res);


// //remove
// let fruits=["apple","mango","orange","grape"];
// console.log(fruits);
// fruits.splice(1,2)
// console.log(fruits);

// //add
// let fruitts=["apple","mango","orange","grape"];
// fruitts.splice(2,0,"Ilana","Arya")
// console.log(fruitts)


// //replace
// let fruittss=["apple","mango","orange","grape"];
// fruittss.splice(3,1,"BANNANA")
// console.log(fruittss);



// //reverse
// let mit=["abhijith","kailas","abin","akash"];
// console.log("brfore reverse",mit);
// mit.reverse()
// console.log("after reverse",mit);


// for each
// let prices=[100,350,400,9000]
// prices.forEach((Element,index)=>{
//     console.log(Element);
//     console.log(index);
// })



let prices=[2000,999,3500,500,700];
prices.forEach((ele,ind,arr)=>{
      console.log("Element:",ele+20);
      console.log("Index:",ind); 
      console.log(arr); 
}) 