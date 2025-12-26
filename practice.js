// console.log("Hello World :)");

// let name = 'Umar';
// let age = 22;

// console.log(age, name);

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// console.log("Hello World");

// let age = 21;
// const name = "H";
// const goal = "Become A Serious Developer";
// let future;

// age = 22;

// console.log(age + "\n" + name + "\n" + goal + "\n" + future);

// let a = 10;
// let b = 3;

// console.log("Arithmetic Operations");

// console.log(a + b); //Addition
// console.log(a - b); //Subtraction
// console.log(a * b); //Multiplication
// console.log(a / b); //Division
// console.log(a % b); //Modulos

// let score = 10;
// score /= 2;
// console.log(score);

// console.log(5 !== "5");

// isTrue = true;
// isFalse = false;

// console.log(isTrue && isFalse);
// console.log(isTrue || isFalse);
// console.log(isTrue && !isFalse);

// let age = 17;

// if(age >= 18){
//     console.log("Adult");
// }

// else{
//     console.log("Minor");
// }

// const marks = Number(prompt("Enter The Marks"));

// if(isNaN(marks) || marks < 0 || marks > 100){
//     console.log("Invalid Marks");
// }

// else if (marks >= 85){
//     console.log("Distinction");
// }

// else if(marks >= 60){
//     console.log("First Class");
// }

// else if(marks >= 50){
//     console.log("Second Class");
// }

// else if(marks >= 35){
//     console.log("Pass");
// }

// else {
//     console.log("Fail");
// }

// let count = 5;

// while (count >= 1){
//     console.log("...")
//     count--;
// }

// Age Gate 

// let age = Number(prompt("Enter Age: "));

// if(isNaN(age) || age < 0 || age > 100){
//     console.log("Invalid Age");
// }

// else if(age < 13){
//     console.log("Child");
// }

// else if(age <= 19){
//     console.log("Teen");
// }

// else{
//     console.log("Adult");
// }

// let num = Number(prompt("Enter The Number: "));

// if(isNaN(num)){
//     console.log("Invalid Number");
// }

// else if(num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz");
// }

// else if(num % 3 === 0){
//     console.log("Fizz");
// }

// else if(num % 5 === 0){
//     console.log("Buzz");
// }

// else{
//     console.log("None");
// }

// let username = "admin";
// let password = "1234";
// let isBlocked = false;

// if(isBlocked){
//     console.log("Account Blocked");
// }

// else if(username === "admin" && password === "1234"){
//     console.log("Welcome Admin!");
// }

// else{
//     console.log("Invalid Credentials");
// }

let year = 2028;

if(isNaN(year) || year < 0){
    console.log("Invalid Year")
}

else if(year % 400 === 0){
    console.log("Leap Year");
}

else if(year % 100 === 0){
    console.log("Not A Leap Year");
}

else if(year % 4 === 0){
    console.log("Leap Year");
}

else{
    console.log("Not A Leap Year")
}