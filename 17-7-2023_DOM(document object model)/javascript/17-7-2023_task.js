//sum of two numbers

const n1 = 18; n2=7;

const sum = n1 + n2;

console.log('The sum of ' + n1 + ' and ' + n2 + ' is: ' + sum);

console.log("--------------------------------------------------")

//minutes converts to secends

function convert(minutes) {
    return (minutes * 60 )
}

console.log(convert(1));

console.log("--------------------------------------------------")

//converts an object into an array

let myObject =  { 
    Name: 'sricharan puttoju',
    age: 23 , 
    Place: 'kalwakurthy'};
var keys = Object.keys(myObject).map((key) => [key, myObject[key]]);
console.log(keys);

console.log("--------------------------------------------------")

// A function takes two numbers as arguments and returns an array of multiples

const arrayOfMultiples = (a,b) => {
var Array = []; n=1;

for (var i = 1; i <= b; i++) {
    Array.push(a*n);
    n++;
}
return Array
}
  console.log(arrayOfMultiples(7, 5));
  console.log(arrayOfMultiples(12, 10));
  console.log(arrayOfMultiples(17, 6)); 

  console.log("--------------------------------------------------")

//A function that converts dash/underscore delimited into camel casing

function camelize(str) {
    return str.replace(/\W+(.)/g, function(index, word)
     {
          return word.toUpperCase();
      });
  }
    console.log(camelize("sricharan puttoju"));
    console.log(camelize('15-02-2-0-0-0'));
    console.log(camelize("A.B C/D"));