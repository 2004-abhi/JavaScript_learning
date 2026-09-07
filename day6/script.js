//increment
let a=10;
console.log("Before Increment",a);
a++; //a=a+1
console.log("Before Increment",a);


//decrement
let b=5;
console.log("after decrement",b);
b--; //a=a-1
console.log("Before decrement",b);


//post increment
let c=5;
console.log(c++);
console.log(c);


//pre increment
let d=4;
console.log(++d);
console.log(d);

// +++  +  +++
let e=10;
let res=e++ + e++; // first 10+1 next + second 11 --- 21 o\p store in res(last +++ value of second 11 current value of e)
console.log(res);
console.log(e);

