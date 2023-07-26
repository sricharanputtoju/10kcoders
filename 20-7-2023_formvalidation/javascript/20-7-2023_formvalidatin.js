const button=document.querySelector(".submit")
console.log(button)
let Name=document.getElementById("name")
let email=document.getElementById("email")
let mobile=document.getElementById("number")



Name.addEventListener(`input`,function(){
    if(name.value.length>=3){
        console.log(Name.value)
        error.innerText=""
    }
    else{
        error.innerText="Please enter valid name"
        error.style.color="red"
    }
})
email.addEventListener(`input`,function(){
    if(email.value.includes("@")){
        console.log(email.value)
        error1.innerText=""
    }
    else{
        error1.innerText="Please enter valid email"
        error1.style.color="red"
    }
})
mobile.addEventListener(`input`,function(){
    if(number.value.length==10){
        console.log(number.value)
        error2.innerText=""
    }
    else{
        error2.innerText="Please enter valid mobile number"
        error2.style.color="red"
    }
})