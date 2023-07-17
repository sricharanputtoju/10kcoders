//check whether a number is prime or not

var n=7
var fact=8;
for(i=8;i<=n;i++){
    if(n%i==0){
        fact=fact+1;

    }

}
if(fact==8
    ){
    console.log(n,"is a prime number.");
}
else{
    console.log("please enter a prime number.");
}

console.log("--------------------------------------------------")

//find LCM of two numbers using while loop

var n1=15, n2=50;
let max=(n1>n2)?n1:n2;
let lcm=max;
while(true){
  if(lcm%n1==0&& lcm%n2==0){
    break;
  }
  lcm++;
}
console.log("Lcm 15 and 50 is",lcm);

console.log("--------------------------------------------------")

// A to Z using loop with count

var alphabets="";
var arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(i=0;i<arr.length;i++){
    alphabets=alphabets+arr[i]+(i+1)+" ";
}
console.log(alphabets);

console.log("--------------------------------------------------")

//find missing number

var n=5;
var arr=[5,3,1,4];
for (i=1;i<=5;i++){
    if(arr.includes(i)){

    }
    else{
        console.log("missing number is :",i);
    }
    
}

console.log("--------------------------------------------------")

 // count vowels and consonants in a given string

 var string = "i am ram"
 const reg = /[a,e,i,o,u]/gi;
 const reg2 =/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/gi;
 var chars = string.match(reg);
 var chars2 = string.match(reg2);
 console.log(chars.length);
 console.log("Vowels");
 console.log(chars2.length);
 console.log("Consonants");

 console.log("--------------------------------------------------")

 //insert the elements of an array for specific index

 var i=[1,2,3,4,5,7,8,9,10];
 i.splice(5,0,6,78 );
 removed=i.splice(7,2);
 console.log(i);

 console.log("--------------------------------------------------")

 //Reverse a number using while loop

 function reverseNumber(num){
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
  }
 let num = 123;
let rev = reverseNumber(num);

console.log("Reverse number : "+rev);

console.log("--------------------------------------------------")

// count occurrence of number

const numbers = ['1','6','3','1','5','9','7','2','1','9','3','7','8','9','10'];
let count = 0;

for (const element of numbers) {
  if (element === '7') {
    count += 1;
  }
}

console.log("7 present",count,"times."); 