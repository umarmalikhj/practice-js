let a = 10;
let b = 20;

console.log("Value Of A (Before Swap) - ", a);
console.log("Value Of B (Before Swap) - ", b);

let temp = a;
a = b;
b = temp;

console.log("Value Of A (After Swap) - ", a);
console.log("Value Of B (After Swap) - ", b);

// let n = Number(prompt("Enter Number: "));

// if (inputNumber % 2 === 0){
//     console.log("The Number Entered Is Even")
// }

// else{
//     console.log("The Number Entered Is Odd")
// }

let n = Number(prompt("Enter A Number: "));
let sum = 0;

for (let i=0; i<=n; i++){
    sum += i;
}

console.log(sum)