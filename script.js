// let a = 10;
// let b = 20;

// console.log("Value Of A (Before Swap) - ", a);
// console.log("Value Of B (Before Swap) - ", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("Value Of A (After Swap) - ", a);
// console.log("Value Of B (After Swap) - ", b);

// let n = Number(prompt("Enter Number: "));

// if (inputNumber % 2 === 0){
//     console.log("The Number Entered Is Even")
// }

// else{
//     console.log("The Number Entered Is Odd")
// }

// let n = Number(prompt("Enter A Number: "));
// let sum = 0;

// for (let i=0; i<=n; i++){
//     sum += i;
// }

// console.log(sum)

// let n = Number(prompt("Enter A Number"));
// let sum = 0;

// for (let i=1; i<=n; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         sum += i;
//     }
// }

// console.log(sum)

// n = 10;

// for (i=n; i>=1; i--){
//     console.log(i)
// }

// let a = 50;
// let b = 10;
// let c = 60;

// if (a > b && a > c){
//     console.log(a)
// }

// else if (b > a && b > c){
//     console.log(b)
// }

// else if (c > a && c > b){
//     console.log(c)
// }

// let n = String(prompt("Enter The Number: "));

// for(let i=[0]; i = length.n; i++){
//     let sum = i + n;
//     console.log(sum)
// }

// let n = Number(prompt("Enter A Number: "));
 
// for (let i=1; i<=n; i++){
//     let sum = n * i;
//     console.log(`${n} x ${i} = ${sum}`);
// }

// let n = Number(prompt("Enter A Number"));
// let sum = 0;

// for (let i=1; i<=n; i++){
//     sum += i; 
// }
// console.log(sum)

// let x = sum/n;
// console.log(x)

// let n = Number(prompt("Enter Number:"));

// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row)
// }

// let n = Number(prompt("Enter The Number: "));
// let limit = Number(prompt("Enter The Limit: "));

// for(let i=1; i<=limit; i++){
//     let sum = n * i;
//     console.log(`${n} x ${i} = ${sum}`)
// }

let x = Number(prompt("Enter The Number: "));
let fact = 1;

for(let i=1; i<=x; i++){
    fact *= i;
}
console.log(fact)