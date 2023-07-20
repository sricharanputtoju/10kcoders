// // Mouse Events
// // Click 

// //Example-1
// const btn=document.querySelector(".btn")
// console.log(btn)
// btn.addEventListener(`click`,function(){
//     alert("button clicked.")
// })

// console.log("--------------------------------------------------")
// Example-2
// const button=document.querySelector(".button")
// console.log(button)
// button.addEventListener(`click`,function(){
//     alert("submitted Successfully.")
// })

// console.log("--------------------------------------------------")
// Example-3

// const upload=document.querySelector(".upload")
// console.log(upload)
// upload.addEventListener(`click`,function(){
//     alert("Uploaded Successfully.")
// })

// console.log("--------------------------------------------------")
// Example-4

// const login=document.querySelector(".login")
// console.log(login)
// login.addEventListener(`click`,function(){
//     alert("Logged in successfully.")
// })

// console.log("--------------------------------------------------")
// Example-5

// const attach=document.querySelector(".attach")
// console.log(attach)
// attach.addEventListener(`click`,function(){
//     alert("Your Docs attached Successfully.")
// })
// console.log("--------------------------------------------------")

// // double click

// console.log("--------------------------------------------------")
// Example-1
// const dblclickbtn=document.querySelector(".btn")
// dblclickbtn.addEventListener("dblclick",function(){
//     alert("button clicked.")
// })

// console.log("--------------------------------------------------")
// Example-2
// const button=document.querySelector(".button")
// button.addEventListener("dblclick",function(){
//     alert("submitted   Successfully.")
// })

// console.log("--------------------------------------------------")
// Example-3
// const upload=document.querySelector(".upload")
// upload.addEventListener("dblclick",function(){
//     alert("uploaded successfully.")
// })
// console.log("--------------------------------------------------")

// Example-4
// const login=document.querySelector(".login")
// login.addEventListener("dblclick",function(){
//     alert("logged in successfully.")
// })
// console.log("--------------------------------------------------")
// Example-5
// const attach=document.querySelector(".attach")
// attach.addEventListener("dblclick",function(){
//     alert("your docs attached successfully.")
// })

// console.log("--------------------------------------------------")
// // MOUSE HOVER
// console.log("--------------------------------------------------")
// Example-1
// const heading=document.querySelector("h1");
// heading.addEventListener("mouseover",function(){
//     heading.style.backgroundColor="green"
// });
// heading.addEventListener("mouseleave",function(){
//     heading.style.backgroundColor="white"
// })

// console.log("--------------------------------------------------")
// Example-2
// const heading=document.querySelector("h2")
// heading.addEventListener("mouseover",function(){
//     heading.style.backgroundColor="blue"
// });
// heading.addEventListener("mouseleave",function(){
//     heading.style.backgroundColor="white"
// });
// console.log("--------------------------------------------------")
// Example-3
// const heading=document.querySelector("h2")
// heading.addEventListener("mouseover",function(){
//     heading.style.backgroundColor="yellow"
// });
// heading.addEventListener("mouseleave",function(){
//     heading.style.backgroundColor="white"
// });
// console.log("--------------------------------------------------")
// Example-4
// const heading=document.querySelector("h2")
// heading.addEventListener("mouseover",function(){
//     heading.style.backgroundColor="orange"
// });
// heading.addEventListener("mouseleave",function(){
//     heading.style.backgroundColor="white"
// });

// console.log("--------------------------------------------------")
// Example-5
// const heading=document.querySelector("h2")
// heading.addEventListener("mouseover",function(){
//     heading.style.backgroundColor="red"
// });
// heading.addEventListener("mouseleave",function(){
//     heading.style.backgroundColor="white"
// });

// console.log("--------------------------------------------------")
// // Form Events
// console.log("--------------------------------------------------")
// // change Event
// console.log("--------------------------------------------------")
// Example-1
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`change`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//     }else{
//         error.innerText="please enter valid name"
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// Example-2
// const lastName=document.getElementById("lastName")
// const error=document.getElementById("error")
// console.log(lastName)
// lastName.addEventListener(`change`,function(){
//     if(lastName.value.length>=3){
//         console.log(lastName.value)
//     }else{
//         error.innerText="please enter valid name"
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// Example-3
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`change`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//     }else{
//         error.innerText="please enter valid village name"
//         error.style.color="red"
//     }
// })
// console.log("--------------------------------------------------")
// console.log("--------------------------------------------------")
// Example-4
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`change`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//     }else{
//         error.innerText="please enter valid district name"
//         error.style.color="red"
//     }
//  })

// console.log("--------------------------------------------------")
// Example-5
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`change`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//     }else{
//         error.innerText="please enter valid pin "
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")

// // input event
// console.log("--------------------------------------------------")
// Example-1
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`input`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//         error.innerText=""
//     }else{
//         error.innerText="please enter valid name"
//         error.style.color="red" 
//     }
// })

// console.log("--------------------------------------------------")
// Example-2
// const lastName=document.getElementById("lastName")
// const error=document.getElementById("error")
// console.log(lastName)
// lastName.addEventListener(`input`,function(){
//     if(lastName.value.length>=3){
//         console.log(lastName.value)
//         error.innerText=""
//     }else{
//         error.innerText="please enter valid name"
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// Example-3
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`input`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//         error.innerText=""
//     }else{
//         error.innerText="please enter valid village name"
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// Example-4
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`input`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//         error.innerText=""
//     }else{
//         error.innerText="please enter valid district name"
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// Example-5
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`input`,function(){
//     if(firstName.value.length>=3){
//         console.log(firstName.value)
//         error.innerText=""
//     }else{
//         error.innerText="please enter valid pin "
//         error.style.color="red"
//     }
// })

// console.log("--------------------------------------------------")
// // Focus Event
// console.log("--------------------------------------------------")
// Example-1
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`focus`,function(){
//     firstName.style.outlineColor="red"
// });
// console.log("--------------------------------------------------")
// Example-2
// const lastName=document.getElementById("lastName")
// const error=document.getElementById("error")
// console.log(lastName)
// lastName.addEventListener(`focus`,function(){
//     lastName.style.outlineColor="red"
// })
// console.log("--------------------------------------------------")
// Example-3
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`focus`,function(){
//     firstName.style.outlineColor="green"
// })
// console.log("--------------------------------------------------")
// Example-4
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`focus`,function(){
//     firstName.style.outlineColor="yellow"
// })
// console.log("--------------------------------------------------")
// Example-5
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`focus`,function(){
// firstName.style.outlineColor="orange"
// })
// console.log("--------------------------------------------------")
// // Blur Event
// console.log("--------------------------------------------------")
// Example-1
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`blur`,function(){
//     firstName.style.border="2px solid red"
// });
// console.log("--------------------------------------------------")
// Example-2
// const lastName=document.getElementById("lastName")
// const error=document.getElementById("error")
// console.log(lastName)
// lastName.addEventListener(`blur`,function(){
//     lastName.style.border="1px solid blue"
// })
// console.log("--------------------------------------------------")
// Example-3
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`blur`,function(){
//     firstName.style.border="1px solid green"
// })
// console.log("--------------------------------------------------")
// Example-4
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`blur`,function(){
//     firstName.style.border="1px solid yellow"
// })
// console.log("--------------------------------------------------")
// Example-5
// const firstName=document.getElementById("firstName")
// const error=document.getElementById("error")
// console.log(firstName)
// firstName.addEventListener(`blur`,function(){
// firstName.style.border="2px solid orange"
// })
//  console.log("--------------------------------------------------")

// // Keyboard Events
// console.log("--------------------------------------------------")

// // keyup
// console.log("--------------------------------------------------")

// Example-1
// document.addEventListener("keyup",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-2
// document.addEventListener("keyup",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-3
// document.addEventListener("keyup",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-4
// document.addEventListener("keyup",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-5
// document.addEventListener("keyup",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// // keydown
// console.log("--------------------------------------------------")

// Example-1
// document.addEventListener("keydown",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-2
// document.addEventListener("keydown",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-3
// document.addEventListener("keydown",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-4
// document.addEventListener("keydown",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// Example-5
// document.addEventListener("keydown",function(event){
//     console.log(event)
// })
// console.log("--------------------------------------------------")

// // Page Events
// console.log("--------------------------------------------------")

// // resize
// console.log("--------------------------------------------------")

// Example-1
// window.addEventListener(`resize`,function(){
//     console.log(window.innerWidth)
//     if(window.innerWidth>768 && window.innerWidth < 1024){
//         document.body.style.backgroundColor="yellow"
//     }else if(window.innerWidth<768){
//         document.body.style.backgroundColor="green"
//     }else{
//         document.body.style.backgroundColor="red"
//     }
// })
// console.log("--------------------------------------------------")
// Example-2
// window.addEventListener(`resize`,function(){
//     console.log(window.innerWidth)
//     if(window.innerWidth>768 && window.innerWidth < 1024){
//         document.body.style.backgroundColor="yellow"
//     }else if(window.innerWidth<=768){
//         document.body.style.backgroundColor="green"
//     }else{
//         document.body.style.backgroundColor="red"
//     }
// })
// console.log("--------------------------------------------------")
// Example-3
// window.addEventListener(`resize`,function(){
//     console.log(window.innerWidth)
//     if(window.innerWidth>768 && window.innerWidth < 1024){
//         document.body.style.backgroundColor="yellow"
//     }else if(window.innerWidth<768){
//         document.body.style.backgroundColor="green"
//     }else{
//         document.body.style.backgroundColor="red"
//     }
// })
// console.log("--------------------------------------------------")
// Example-4
// window.addEventListener(`resize`,function(){
//     console.log(window.innerWidth)
//     if(window.innerWidth>768 && window.innerWidth < 1024){
//         document.body.style.backgroundColor="yellow"
//     }else if(window.innerWidth<768){
//         document.body.style.backgroundColor="green"
//     }else{
//         document.body.style.backgroundColor="red"
//     }
// })
// console.log("--------------------------------------------------")
// Example-5
// window.addEventListener(`resize`,function(){
//     console.log(window.innerWidth)
//     if(window.innerWidth>768 && window.innerWidth < 1024){
//         document.body.style.backgroundColor="yellow"
//     }else if(window.innerWidth<768){
//         document.body.style.backgroundColor="green"
//     }else{
//         document.body.style.backgroundColor="red"
//     }
// })

// console.log("--------------------------------------------------")
// // scroll
// console.log("--------------------------------------------------")
// Example-1
// window.addEventListener(`scroll`,function(){
//     console.log(window.scrollY)
//     if(window.scrollY>500){
//         document.body.style.backgroundColor="orange"
//     }
// })
// console.log("--------------------------------------------------")
// Example-2
// window.addEventListener(`scroll`,function(){
//     console.log(window.scrollY)
//     if(window.scrollY>300){
//         document.body.style.backgroundColor="orange"
//     }
// })
// console.log("--------------------------------------------------")
// Example-3
// window.addEventListener(`scroll`,function(){
//     console.log(window.scrollY)
//     if(window.scrollY>400){
//         document.body.style.backgroundColor="orange"
//     }
// })
// console.log("--------------------------------------------------")
// Example-4
// window.addEventListener(`scroll`,function(){
//     console.log(window.scrollY)
//     if(window.scrollY>800){
//         document.body.style.backgroundColor="orange"
//     }
// })
// console.log("--------------------------------------------------")
// Example-5
// window.addEventListener(`scroll`,function(){
//     console.log(window.scrollY)
//     if(window.scrollY>200){
//         document.body.style.backgroundColor="orange"
//     }
// })
// console.log("--------------------------------------------------")
