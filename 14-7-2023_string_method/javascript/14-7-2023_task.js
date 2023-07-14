//find the greatest of three numbers(useing the ternery operator)

var n1 = 4, n2 = 8, n3 = 2, max;
 
var max = (n1 > n2) ?(n1 > n3 ? n1 : n3):(n2 > n3 ? n2 : n3);

console.log( "Largest number is :",  max + "." );

console.log("--------------------------------------------------")

//factorial of number

var n=5
var fact=1;
for(i=1;i<=n;i++){
    fact=fact*i;
}
console.log("factorial of a given number:",fact);

console.log("--------------------------------------------------")

//arrange numbers in ascending order

let num=[2,3,1,5,4];
    for(let i=0;i<num.length;i++){
        for(let j=0;j<num.length;j++){
            temp=num[j]
            if(num[j]>num[j+1]){
                num[j]=num[j+1]
                num[j+1]=temp;   
            }
    }
}
console.log("sorted order is :",num)

console.log("--------------------------------------------------")

//print patter using loop

for (i=1;i<=5;i++){
    let space="";
    let add="";
    for(j=1;j<=i;j++)
    {
        add=add+j+" ";
    }
    console.log(space+add);
}

console.log("--------------------------------------------------")

var n1=5 ; n2=3;

 var value

for (i=1;i<=n2;i++){
   value=n1**n2;
}

console.log(n1,"power of",n2,"is:",value)