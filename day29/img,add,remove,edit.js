// let h1=document.getElementById("abu")
// console.log(h1);
// console.log(h1.classList.contains("victims"));


// remove element
// let h1=document.getElementById("abu")
// h1.remove()


// let img = document.getElementById("x");
// console.log(img);
// // Get the image source
// console.log(img.getAttribute("src"));

// // Change the alt attribute
// img.setAttribute("alt", "actor");

// // Remove the src attribute
// img.removeAttribute("src");



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// inline Event Handling
// function f1(){
//     alert("Hello Guys....")
// }



// using dom event properties
// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     alert("Qspider Jspider")
// } 

// addEventListener()
// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("Lunch Time , You can get breaks now...")
// })



////////////////////////////////////////////////////////////////////////////

// mouse events (mouseOver , mouseOut)
// let div=document.getElementById("hen")
// div.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="blue";
//     div.innerText="Abhinand Business Plan"
// })

// div.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor="yellow"
//     div.innerText="Abin is the partner ......"
// })



///////////////////////////////////////////////////////////
// input event , change event

// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     console.log(input.value);
    
// })

// change event

// let input=document.getElementById("x")
// input.addEventListener("change",()=>{
//     console.log(input.value);
    
// })


// display in interface 

// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     let p=document.getElementById("p")
//     p.innerText="User Typing : "+input.value;
  
// })



////////////////
let input=document.getElementById("x")
let form=document.getElementById("myform")
form.addEventListener("submit",(Event)=>{
    //it stops browser default behaviour (page reload)
    event.preventDefault()
    console.log(input.value);
    console.log("form submitted");
    
    
})