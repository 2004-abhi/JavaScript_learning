// // rest parameter
// function cart(item1,...x){
//     console.log(item1);
//     console.log(x); 
// }
// cart("laptop","HeadPhones","watch")
// // note:rest parameter always should be the last parameter

// Spread Operator(...)
// by using this we can copy an array/object
// let mit=["abhijith","kailas","abin","akash"]
// console.log("Original Array:",mit);

// let copiedarray=["abhiand",...mit,"poojith"]
// console.log("copied array:",copiedarray);


// // using object
// let kochiBranch={
//     areaNmae:"palarivattom",
//     NoOfStudents:450,
//     BranchHead:undefined
// }

// console.log("original object:",kochiBranch);

// let copiedObject={...kochiBranch}
// console.log("copied Object:",copiedObject);



let student={
    user:"liya",
    age:23,
    display:function liya(){
        console.log(this);
        console.log(this.user);    
    }

}
student.display()


// Non - strict mode
function f1(){
    console.log(this);  // this  keyword points to window
    
}
f1()


// strict mode
"use strict"
function f1(){
    console.log(this);//this keyword value will be undefined  
}
f1()


// arrow function do not have their own THIS keyword
// it takes this from outer scope
// (inside outer scope we have window objecr)
// so it points to window object only...
let a=()=>{
    console.log(this);
    
}
a()

let student1={
    user:"liya",
    age:22,
    display:()=>{
        console.log(this);
        
    }
}
student1.display()