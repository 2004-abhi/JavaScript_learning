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
// let input=document.getElementById("x")
// let form=document.getElementById("myform")
// form.addEventListener("submit",(Event)=>{
//     //it stops browser default behaviour (page reload)
//     event.preventDefault()
//     console.log(input.value);
//     console.log("form submitted");
    
    
// })



////////////////////////////////////////
// create an section , paragraph , spam in the javascript without writting any html code 
// usiing createElement and append()
// let src=document.createElement("section")
// let p=document.createElement("p")
// let x=document.createElement("span")
// // console.log(p);
// p.innerHTML="Testyantra"
// x.innerHTML="Qspiders"

// // src.append(p,x)  // this way also it is possible
// src.append(p)
// src.append(x)
// document.body.append(src);



//////////////////////////////////////////////
// InLine event Handling
// (writing the event directly inside the html element)
// note : we cannot use same event multiple times
// function f1(){
//     console.log("Ticket Booked Successfully !.....");
    
// }
// function f2(){
//     console.log("payment Successful");
    
// }
// only the first f1()  will execte only . we cannot use more function in inline only one funtion 



//////////////////////////////////////////////////////
// Dom event properties
// note : we cannot use same event multiples times, but
// if you try to use , it takes only latest one 
// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     console.log("Added to cart successfully");
    
// }
// btn=onclick=function(){
//     console.log("Item is not available");
    
// }
// btn=onclick=function(){
//     console.log("usiing Dom event properties , it take latest one");
    
// }



////////////////////////////////
// addEventListener
// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     console.log("Course Entrolled Successfully");
    
// })
// btn.addEventListener("click",()=>{
//     console.log("please pay 35000 for course");
    
// })
// btn.addEventListener("Click",()=>{
//     console.log("Tank you for joining in great Testyantra");
    
// })




////////////////////////////////////////////////////////////////////////////////////////////////////
// event object

// let btn=document.getElementById("x")
// btn.addEventListener("click",(event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.target.tagName);
    
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// event propagation
// in javascript is a mechanisum . it defines how and event travels through the Dom .
// we have 3 phases 
// 1. Capturing phase 
// 2. target phase
// 3. Bubling phase
// 



// this is the manin code wriiten are sub

// let parent=document.getElementById("p")
// let child=document.getElementById("c")
// let grandChild=document.getElementById("gc")

// parent.addEventListener("clicked",()=>{
//     console.log("parent clicked");
    
// })

// child.addEventListener("click",()=>{
//     console.log("Child Clicked");
    
// })

// grandChild.addEventListener("Click",()=>{
//     console.log("Grand Child Clicked");
    
// })


////////////////////////////////////////
// parent.addEventListener("clicked",()=>{
//     console.log("parent clicked");
    
// })

// child.addEventListener("click",()=>{
//     console.log("Child Clicked");
    
// })

// grandChild.addEventListener("Click",(event)=>{
//     event.stopPropagation()
//     console.log("Grand Child Clicked");
    
// })

////////////////////////////////////////////////////
// parent.addEventListener("click",()=>{
//     console.log("parent clicked");
    
// })

// child.addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("Child Clicked");
    
// })

// grandChild.addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("Grand Child Clicked");
    
// })
/////////////////////////////////////////////
// if you want to see capturing phase we have to use 3rd argument as true

// parent.addEventListener("click",()=>{
//     console.log("Parent Clicked");
    
// },true)

// child.addEventListener("click",()=>{
//     console.log("Child Clicked");
    
// },true)

// grandChild.addEventListener("click",()=>{
//     console.log("grand child clicked");
    
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////

// dom traveresing
// it is a process of moving
// from one element to another related elements


// let parent=document.getElementById("product")
// console.log(parent);
// console.log(parent.children);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);


// let price=document.getElementById("pp")
// console.log(price);
// // console.log(price.parentElement);
// console.log(price.previousElementSibling);
// console.log(price.nextElementSibling);




////////////////////////////////////////////////////////////////////////////////////////
// event deligation

// without event deligation
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")

btn1.addEventListener("click",()=>{
    let price1=document.getElementById("price1")
    alert(`Add to cart: ${price1.previousElementSibling.innerHtml}`);

})
btn2.addEventListener("click",()=>{
    let price2=document.getElementById("price2")
    alert(`Add to cart: ${price2.previousElementSibling.innerHtml}`)

})
btn3.addEventListener("click",()=>{
    let price3=document.getElementById("price3")
    alert(`Add to cart: ${price3.previousElementSibling.innerHtml}`)

})