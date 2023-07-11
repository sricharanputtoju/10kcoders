// //for loop

// //for(initialization ; condition ; increment/decrement){}

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 100; i++) {
// if (i% 2 === 1){
//     console.log(i);
// }
// }
// for (let i = 0; i <= 100; i++) {
//     if (i% 2 === 0){
//         console.log(i);
//     }
//     }
//     for (let i = 0; i <= 100; i++) {
//         if (i% 5 == 5){
//             console.log(i);
//         }
//         }

// //while(condition)

// let arr =[1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// //do while loop

// //do{while(condition)

// let i = 1;

// do{
// console.log(i);
// i++
// } while(i<1)


console.log("Example1");
console.log("-----------------------");
let rows=5;
for(let i=1;i<=rows;i++){
        let s=""
        for(let j=10*i-9;j<=10*i;j++){
            if(j%2==0){
                s=s+" "+j;  
            }
        }
        console.log(s) 
}
console.log("-----------------------");


console.log("Example2");
console.log("-----------------------");
let a2=5;
k=0;
for(let i=1;i<=a2-1;i++){
    let s="";
    for(let j=1;j<=i;j++){
        k++
        s=s+" "+k;
    }
    console.log(s)
}

console.log("-----------------------");


console.log("Example3");
console.log("-----------------------");
let rows1=4;
let count=0;
for(let i=1;i<=rows1;i++){
    let space=""
    let add=""
    for(let j=i;j<5;j++){
        space=space+" ";

    }
    for(let k=1;k<=i;k++){
        count++;
        add=add+" "+count;
    }
    console.log(space+add);
}

console.log("-----------------------");

console.log("Example4");
console.log("-----------------------");
let c=0;
for(let i=1;i<=4;i++){
    let s="";
    let s1="";
    for(let j=1;j<=i;j++){
        s1=s1+" ";
    }
    for(let k=4;k>=i;k--){
        c=c+5;
        s=s+" "+c;
    }
    console.log(s1+s)
}