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

// let year = 2028;

// if(isNaN(year) || year < 0){
//     console.log("Invalid Year")
// }

// else if(year % 400 === 0){
//     console.log("Leap Year");
// }

// else if(year % 100 === 0){
//     console.log("Not A Leap Year");
// }

// else if(year % 4 === 0){
//     console.log("Leap Year");
// }

// else{
//     console.log("Not A Leap Year")
// }

// let marks = Number(prompt("Enter Your Marks: "));

// if (isNaN(marks) || marks < 0 || marks > 100){
//     console.log("Invalid Marks");
// }

// else if (marks >= 90){
//     console.log("A");
// }

// else if (marks >= 75){
//     console.log("B");
// }

// else if (marks >= 60){
//     console.log("C");
// }

// else if (marks >= 35){
//     console.log("D");
// }

// else{
//     console.log("Fail");
// }

// const num = Number(prompt("Enter Number: "));

// if (num > 0) {
//     console.log("Positive");
// }

// else if (num < 0) {
//     console.log("Negative");
// }

// else {
//     console.log("Zero");
// }

// if (num % 2 === 0) {
//     console.log("Even");
// }

// else {
//     console.log("Odd");
// }

// if (num % 10 === 0) {
//     console.log("Multiple Of 10");
// }

// for (let i=1; i<=10; i++){
//     if (i >= 5){
//         console.log(i, "Pass");
//     }
//     else{
//         console.log(i, "Fail");
//     }
// }

// const nums = [3, 12, 7, 20, 9, 8, 15];

// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);

// let sum = 0;
// for (let i = 3; i <= 50; i=i+3) {
//     sum += i;
// }
// console.log(sum);

// for (let i=0; i < 20; i++){
//     if (i<15 && i % 4 !==0){
//         console.log(i);
//     }
// }

// const nums = [4, 11, 18, 7, 20, 3, 14];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if(nums[i] > 10 && nums[i] % 2 === 0){
//         count++;
//     }
// }

// console.log(count);

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     if (i > 7) {
//         break;
//     }
//     count++;
// }

// console.log(count);

// const nums = [2, 5, 12, 9, 16, 21, 18, 7];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 10 && nums[i] % 2 === 0 && nums[i] < 20){
//         console.log(nums[i]);
//     }
// }

// const nums = [2, 5, 12, 9, 16, 21, 18, 7];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 10 && nums[i] % 2 !== 0){
//         count++;
//     }
// }

// console.log(count);
// const nums = [4, 10, 12, 25, 18, 30, 22, 55, 6, 40];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 50){
//         break;
//     }

//     else if (numbers[i] % 3 === 0){
//         console.log(numbers[i]);
//     }
// }

// const nums = [12, 45, 67, 22, 39, 50, 41, 8];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] < 50 && nums[i] % 2 !== 0){
//         count++;
//     }
// }

// console.log(count);

// const nums = [5, 10, 14, 20, 3];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 7 === 0) {
//         break;
//     }
//     sum += nums[i];
// }

// console.log(sum);

// const nums = [6, 12, 14, 18, 20, 25, 30];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 6 === 0){
//         continue;
//     }

//     else if (nums[i] > 10 && nums[i] % 2 === 0){
//         console.log(nums[i]);
//     }
// }

// const nums = [12, 45, 7, 89, 34, 22];
// let maxx = nums[0];

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] > maxx){
//         maxx = nums[i];
//     }
// }

// console.log(maxx);

// const nums = [3, 8, 15, 22, 9, 18, 5, 30];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 25){
//         break;
//     }

//     else if (nums[i] % 5 === 0 && nums[i] % 3 === 0){
//         continue;
//     }

//     else if (nums[i] % 3 === 0){
//         console.log(nums[i]);
//     }
// }

// const nums = [3, 10, 15, 8, 22, 7, 14];
// let sum = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//         sum += nums[i];
//     }
// }

// console.log(sum);

// const nums = [19, 4, 27, 6, 13, 2, 21];
// let smallest = nums[0];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] < smallest){
//         smallest = nums[i];
//     }
// }

// console.log("Smallest: ", smallest);

// const nums = [12, 45, 7, 89, 23, 5];
// let largest = nums[0];

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] > largest){
//         largest = nums[i];
//     }
// }

// console.log("Largest = ", largest);

// const nums = [3, 10, 15, 8, 22, 7, 14];
// let oddCount = 0;
// let evenCount = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// }

// console.log("Odd: ", oddCount);
// console.log("Even: ", evenCount);

const nums = [1, 2, 3, 4, 5];
let numsReversed = [];

for (let i = nums.length - 1; i >= 0; i--){
    numsReversed.push(nums[i]);
}

console.log(numsReversed);