//1. constructor Way

var student = new Array("sricharan","bharath","praveen");

console.log(student)

//literel way

var student =["sricharan","bharath","praveen"];

console.log(student);

//how to access the student value from this array

var student1 = student[0];

console.log(student1);

console.log(student.length)

//array methods

//1. push method
//if you want to add one or more elements in an array
//syntax
//push(element)
//push(value1,value2.......,valuen)

var student = ["sricharan","bharath","praveen"];

student.push("srinu");

console.log(student);

student.push("raju","ganesh","vamshi");

console.log(student)

//unshift method

//if you want add one or more elements in the beginning of array
//syntax
//unshift(value1)
//unshift(value1,value2......,valuen)

var student = ["sricharan","bharath","praveen"];

student.push("srinu");

console.log(student);

student.push("raju","ganesh","vamshi");

console.log(student)

//pop method
//if you want to remove last element from an array
//syntax: pop()

var student = ["sricharan","bharath","praveen"];

student.pop();

console.log(student)


//shift method
//if you want to remove last element from an array
//syntax: shift()
var student = ["sricharan","bharath","praveen"];

student.shift();

console.log(student)

//slice method
//if you want to remove portion of values in an array
//it is not modifing the original array
//syntax
//slice(startingindex);
//slice(startiongindex,endingindex)

var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

var slicedarray = student.slice(1,3);

console.log(student);

console.log(slicedarray)

//splice method
//if you want to remove,deleting,add new elements
//it will modify original array
//syntax
//slice(startingindex);
//slice(startingindex,deletecount);
//slice(startingindex,deletecount,value);

var student = ["sricharan","bharath","praveen","raju","ganesh","vamshi"];

var modifiedarray=student.splice(3,0,"srinu");

console.log(student);

console.log(modifiedarray)

//includes method
//it will check whether the value is present in an array
//the output will be boolean
//syntax
//includes(searchelement)

var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

console.log(student.includes("bharath"));

if(student.includes("praveen")){
   console.log("student is present")
}
else{
    console.log("student is absent")
}

//indexOf method

var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

console.log(student.indexOf("sricharan"))

//is array method

//syntax : Array.isArray(value)

var student = [{
    name : "sricharan",
    age : 23,
    skills : ["html","css","javascript"]
},
{
    name : "praveen",
    age : 26,
    skills : "java" 
}]

for(let i=0;i<student.length;i++){
    if(Array.isArray(student[i].skills)){
        console.log(student[i].skills)
    }
}

//tostring method
//it will convert entire array into string
var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

console.log(student.toString())

//join method

//it will also convert array into string
//syntax:join(seperator);
var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

console.log(student.join())

//sort method

var student = ["sricharan","bharath","praveen","srinu","raju","ganesh","vamshi"];

var num = [15,2,1,2000];

console.log(num.sort())
