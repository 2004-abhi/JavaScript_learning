let promise1=fetch("https://fakestoreapi.com/users")
// console.log(promise1); // promise object
promise1.then((response)=>{
    // console.log(response);   // response object
    let promise2 = response.json()
    // console.log(promise2);  // again promise object
    promise2.then((value)=>{
        // console.log(value);   // actual data [{},{},.... ]
        console.log(value[1]); // giving 2element {}
        console.log(value[1].username);
        console.log(value[1].email);
        console.log(value[1].name); // name object // {}
        console.log(value[1].name.firstname);
    })
})
.catch((reason)=>{
    console.log(reason);
    
})