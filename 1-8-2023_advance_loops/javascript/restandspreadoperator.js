//rest(...)
//spread(...)



let myfunc = function(firstname,lastname,...rest){
    console.log(firstname);
    console.log(lastname);
    console.log(rest)
}

myfunc("sricharan","puttoju","23","mahabubnagar")

const employeedetails=["sricharan","puttoju","23","mahabubnagar"]

let myfunc1 = function(firstname,lastname,...rest){
    console.log(firstname);
    console.log(lastname);
    console.log(rest)
}

myfunc1(...employeedetails)

const employeedetails1=["sricharan","puttoju","23","mahabubnagar"]

let myfunc2 = function(firstname,lastname,age,...rest){
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(rest)
}

myfunc2(...employeedetails1)

let arr1=[1,2,3,4,5];

let arr2=[6,7,8,9];

let arr3=[...arr1,...arr2]
console.log(arr3)