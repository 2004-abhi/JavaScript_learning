// arithematic operator
let a =10;
let b=3;
console.log(a+b); //13
console.log(a-b); //7
console.log(a*b); //30
console.log(a/b); //3.33 --->Quotient
console.log(a%b); //1 ---> reminder

let price=500;
let quan=3;
let total =price*quan;
console.log(total);


//assignment operator
let bal=1000;
bal=bal+500;
console.log(bal);
bal+=500;
console.log(bal);


bal=bal-500;
console.log(bal);
bal-=500;
console.log(bal);

bal=bal*500;
console.log(bal);
bal*=500;
console.log(bal);


//comparison
// let age=20;
console.log(age>18);
console.log(age<20);
console.log(age>=18);
console.log(age<=18);
console.log(age==" 20"); //checks only value
console.log(age===" 20");//checks both values and data-type
console.log(age!=" 20");//false
console.log(age!==" 20");//true


//loical operator
let age=20;
let hasticket = true;
console.log(age>=20 &&  hasticket);
console.log(age>=25 ||  hasticket);
console.log(!hasticket);
//&&-returns true when both conditions are true
//||-returns trure if any of the conditions are true
//!-it reverses if true ,returns false. And if false it returs true

//string operator
let fn="Kalam";
let ln="Reddy";
console.log(fn+ln);
console.log(fn+" "+ln);

