// let student={
//     user:"abhinand",
//     city:"alapuzha",
//     course:"python fullstack",
//     isPlaced:false,
//     hasMarried:undefined,
//     hasGirlfriend:null,
//     hasChildren:5,
//     "@gmail":"abhinand@gmail.com",
//     "phone-number":8547783172,
//     101:30000

// }
// console.log(student.user);
// console.log(student.course);
// console.log(student["isPlaced"]);
// console.log(student["@gmail"]);
// console.log(student["phone-number"]);
// console.log(student[101]);




// let Children={
//     name:"liya",
//     id:103,
//     skills:["html","css","js",["rose","appu"],"Python","sql"],
//     address:{
//         city:"ernakulam",
//         pincode:99938,
//         contact:108
//     }
    
// }

// console.log(Children.skills[3]);
// console.log(Children.skills[3][1]);
// console.log(Children.address.city);


// // product details
// let product={
//     productName:"samsung galaxy s26 ultra",
//     price:754252,
//     brand:"samsung",
//     instock:true,
//     color:["black","blue","silver"],
//     specification:{
//         ram:"12gb",
//         storage:"256gb",
//         display:"6.2 inch"

//     },
//     discount:10,
//     rating:4.5,
//     wrranty:null,
//     deliveryDate:undefined,
//     category:"mobile phone"

// };
// console.log(product);
// console.log(product.productName);
// console.log(product.price);
// console.log(product.color);
// console.log(product.specification.ram);

// employee
// let employee={
//     employeeId:"agjhv222",
//     name:"abyyy",
//     age:25,
//     salary:3200,
//     isActive:true,
//     skills:["html","css","javascript","react"],
//     experience:{
//         years:undefined,
//         company:"abc tech",
//         address:{
//             branch:"kochi",
//             pincode:"343443"
//         },
//         role:"frontend Developer"

//     },

//     married:false,
//     manager:null,
//     joiningDate:undefined,
//     location:"Hyderabad"
// };

// console.log(employee.experience.address.branch);
// console.log(employee);
// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.skills);
// console.log(employee.experience.pincode);


// oder details
// let order={
//     orderId:"osdccv33e2",
//     customerName:"kiran",
//     amount:2434,
//     paymentSucessful: true    ,
//     product:[
//         "t-shirt",
//         "jeans",
//         "shoes",

//     ]     ,
//     deliveryAdress:{
//         houseNo:"12-45",
//         street:"main road",
//         city:"vijajjaaha",
//         pincode:52545e666
//     } ,
//     couponApplied:false,
//     discountAmount:200,
//     deliveryCharge:50,
//     "track-id":null,
//     expectefdDevilvery:undefined,
//     "payment-metod":"upi"

// };

// console.log(order["payment-metod"]);
// console.log(oder);
// console.log(oder.orderId);
// console.log(oder.amount);
// console.log(order.product);
// console.log(order.deliveryAdress.city);




// creating object
// let MITvictim={
//     victim:"aby",
//     Vid:303
// }

// console.log("details of MIT:",MITvictim);
// console.log(MITvictim.Vid);
// console.log(MITvictim["Vid"]);

// // adding property
// MITvictim.college="mahaguru institute";
// console.log(MITvictim);


// // updating properties
// MITvictim.Vid=203;
// console.log(MITvictim);

// //deleting properties
// delete MITvictim.college;
// console.log(MITvictim);


// we canot delete a object completely their  no way to delete but we store its as null
// delete MITvictim;    
// console.log(MITvictim);

// storing as null
// MITvicitim=null
// console.log(MITvicitim);



// seal property : it is used to seal the object we can't add or delete the data in the object but we can "update the object data"


// let product={
//     item:"mobile",
//     price:1.30
// }
// console.log(product);

// Object.seal(product)
// product.brand="samsung s26 ultra"; // adding not possible
// console.log(product);

// product.price=55000; // update is possible
// console.log(product);

// delete product.price;
// console.log("before deleting:",product);


// freez property : is used to freez the values in the object we can not add , delete , update any values in the freez 


// let product={
//     item:"mobile",
//     price:1.30
// }
// console.log(product);

// Object.freeze(product)
// product.brand="samsung s26 ultra"; // adding not possible
// console.log(product);

// product.price=55000; // updateing property is not  possible
// console.log(product);

// delete product.price;
// console.log("before deleting:",product); // deleting is not possible



// showing key , values both in the  object

// let product={
//     item:"mobile",
//     price:75000,
//     color:"black",
//     brand:"samsung",
//     battery:"6000mAh"
// }
// console.log(product.keys);
// console.log(Object.keys(product)); // showing key values like items , price
// console.log(Object.values(product));  // showing values like black , samsung
// console.log(Object.entries(product)); // showing both key and values




// map method
//  let users = ["arya","abhinand","arjun","abhi"];
//  let result=users.map((ele,ind)=>{
    // console.log("element:",ele);
    // console.log("index:",ind);
    // return ele
//     return ind
    
    
//  })
//  console.log("result:",result);




// let student=["rose","arya","lekshmi","avani","sreelekshmi"];
// for(let m of student){
//     console.log("student names",":",m);
// }


// let price=[35,45,999,455,300]    // off gives valuess of the array
// for(let x of price){
//     console.log("price",":",x);
// }

// for (let x in price){   // in shows index positioning
//     console.log(x);   
    
// }

// let noice={
//     name:"abinand H",
//     id:104,
//     course:"javascript"
// }
// for(let n in noice){
//     // console.log(n);
//     // console.log(noise[n]);
//     console.log("properties",":",noice[n]);
// }

// let prices=[20,40,550,30];
// let result=prices.map((ele,ind,arr)=>{
//     console.log(ele);
    
// })
// console.log(result); // it shows undefined  because it does not returning any values 




// let user=[{
//     name:"abu",
//     id:101
// },{
//     name:"abhi",
//     id:102
// },{
//     name:"abhiand",
//     id:104
// },{
//     name:"aby",
//     id:105
// },{
//     name:"unni",
//     id:106
// }]

// let result=user.map((ele)=>{
//     return ele.name;
//     // console.log(ele);
//     // console.log(ele.name);
    
    
// })
// console.log(result);



// let data=[{
//     item:"mobile",
//     price:50000,
//     details:{
//         brand:"OPPO",
//         color:"white"
//     }
// },
// {
//     item:"laptop",
//     price:90000,
//     details:{
//         brand:"hp",
//         color:"grey"
//     }
// },
// {
//     item:"keyword",
//     price:20000,
//     details:{
//         brand:"lenova",
//         color:"pink"
//     }
// }
// ]

// data.map((ele)=>{
//     // console.log(ele.details);
//     // console.log(ele.details.color);
//     // console.log(ele.details.brand);
//     console.log(ele.price);
// })




let user=[{name:"arya",hobbies:["comming","struggling","going","thinking"],course:"B tech"},
{name:"abhi",hobbies:["working","travelling","overthining","driving"],course:"full stack python"},
{name:"ammu",hobbies:["working proffestional","overthinker","teacher","cooking"],course:"neet"}

]
let result=user.map((ele)=>{
    // console.log(ele.hobbies[3]);
    return ele.hobbies[3]
    
})
console.log(result);

