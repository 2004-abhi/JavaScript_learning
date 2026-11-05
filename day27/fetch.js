// let promise1=fetch("https://fakestoreapi.com/users")
// // console.log(promise1); // promise object
// promise1.then((response)=>{
//     // console.log(response);   // response object
//     let promise2 = response.json()
//     // console.log(promise2);  // again promise object
//     promise2.then((value)=>{
//         // console.log(value);   // actual data [{},{},.... ]
//         console.log(value[1]); // giving 2element {}
//         console.log(value[1].username);
//         console.log(value[1].email);
//         console.log(value[1].name); // name object // {}
//         console.log(value[1].name.firstname);
//     })
// })
// .catch((reason)=>{
//     console.log(reason);
    
// })




// let promise1=fetch("https://fakestoreapi.com/products")
// promise1.then((response)=>{
//     let promise2 = response.json()
//     promise2.then((value)=>{
//         // console.log(value);  // giving full 20 object array

//         value.forEach((ele)=>{
//             console.log(ele);   //giving 20 objects
//             console.log("product id:",ele.id);
//             console.log("category :",ele.category);
//             console.log("price :",ele.price);
//             console.log(ele.rating);  // rating object{}
//             console.log("Rating :",ele.rating.rate); 
//         })
     
//     })
// })

// .catch((reason)=>{
//     console.log(reason);
    

// })


// let promise1 = fetch("https://fakestoreapi.com/carts")
// promise1.then((response)=>{
//     let promise2 = response.json()
//     promise2.then((value)=>{
//         // console.log(value);
//         value.forEach((ele)=>{
//             console.log(ele);
//             console.log("USER id :",ele.userId);
//             ele.products.forEach((products)=>{
//                 console.log("product id :",ele.productID);
//                 console.log("quantity : ",ele.products.quantity);

//             })
          
            
            
//         })
//     })
// })
// .catch((reason)=>{
//     console.log(reason)})



//     let promise1 = fetch("https://fakestoreapi.com/carts");

// promise1.then((response) => {

//     let promise2 = response.json();

//     promise2.then((value) => {

//         value.forEach((ele) => {

//             console.log("USER ID:", ele.userId);

//             ele.products.forEach((products) => {

//                 console.log("PRODUCT ID:", products.productId);

//                 console.log("QUANTITY:", products.quantity);

//             });

//             console.log("----------------------");

//         });

//     });

// }).catch((reason) => {
//     console.log(reason);
// });



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// how to send data to the server


// sending new data
// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify({
//         name : "Abhinand H",
//         course : "React"
//     })
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
        
//     })
// })
// .catch((error)=>{
//     console.log(error);
    
// })



//updating the existing data
// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"PUT",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify({
//         title : "KOchi Students",
//         body : "Javascript is going to end"
//     })
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
        
//     })
// })
// .catch((error)=>{
//     console.log(error);
    
// })



//deleting existing data
// let promise1=fetch("https://jsonplaceholder.typicode.com/posts/5",{
//     method:"DELETE", 
// })

// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
        
//     })
// })
// .catch((error)=>{
//     console.log(error);
    
// })


//get the data
// let promise1=fetch("https://api.tvmaze.com/singlesearch/shows?q=girls")
// promise1.then((response)=>{
//     let promise2 = response.json()
//     promise2.then((value)=>{
//         // console.log(value);  // giving full 20 object array

//         value.forEach((ele)=>{
//             console.log(ele);   //giving 20 objects
             
//         })
     
//     })
// })

// .catch((reason)=>{
//     console.log(reason);



    // Get data from server
let promise1 = fetch("https://api.tvmaze.com/singlesearch/shows?q=girls");

promise1.then((response) => {
    let promise2 = response.json();
    promise2.then((value) => {

        console.log(value);

        console.log("Show Name:", value.type);
        console.log("time:", value.schedule.time);
        console.log("Status:", value.status);
        console.log("days:", value.schedule.days);

    });

})
.catch((reason) => {
    console.log(reason);
});