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

// const nums = [1, 2, 3, 4, 5];
// let numsReversed = [];

// for (let i = nums.length - 1; i >= 0; i--){
//     numsReversed.push(nums[i]);
// }

// console.log(numsReversed);

// const nums = [2, 3, 5, 6, 10, 12, 15, 18, 20, 25, 30, 101, 50];
// let count = 0;
// let sum = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 100){
//         break;
//     }

//     else if (nums[i] % 5 === 0){
//         continue;
//     }

//     else if (nums[i] % 2 === 0 || nums[i] % 3 === 0){
//         console.log(nums[i]);
//         count++;
//         sum += nums[i];
//     }
// }

// console.log("Count: ", count);
// console.log("Sum: ", sum);

// const nums = [2, 3, 4, 5, 6, 7, 8, 11, 13, 16, 17, 19, 23, 29, 51, 31];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 50){
//         break;
//     }

//     else if (nums[i] % 4 === 0){
//         continue;
//     }

//     else if (isPrime(nums[i])){
//         console.log(nums[i]);
//         count++;
//     }
// }

// console.log("Count: ", count);
// let row = "";

// for (let i = 1; i <= 5; i++){
//     row = "";
//     for (let j = 1 ; j <= i; j++){
//         row += i;
//     }
//     console.log(row);
// }

// const nums = [3, 6, 9, 10, 12, 15, 18, 20, 21];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 18){
//         break;
//     }

//     else if (nums[i] % 6 !== 0 && nums[i] % 3 === 0){
//         count++;
//     }
// }

// console.log("Count: " + count);

// const nums = [2, 4, 5, 6, 7, 8, 10];
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//         sum += nums[i];
//     }
//     else{
//         continue;
//     }
// }

// console.log(sum);

// const nums = [2, 3, 5, 1, 2, 3, 4, 0, 10];
// let current = 0;
// let maxx = 0;

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] < nums[i-1]){
//         current = 0;
//     }
//     else{
//         current++;
//         maxx++;
//     }
// }

// console.log(maxx);

// const nums = [50, 89, 89, 46, 45, 89, 23, 5, 41, 8];

// let largest = nums[0];
// let secondLargest = nums[0];

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] > secondLargest && nums[i] < largest){
//         secondLargest = nums[i];
//     }

//     else if (nums[i] > largest){
//         secondLargest = largest;
//         largest = nums[i];
//     }
// }

// console.log(largest);
// console.log(secondLargest);

// let row = "";
// let num = 1;

// for (let i = 1; i <= 5; i++){
//     row = "";
//     for (let j = 1; j <= i; j++){
//         row += num + "";
//         num++
//     }
//     console.log(row);
// }

// let row = "";

// for (let i = 1; i <=5; i++){
//     row = "";
//     for (let j = 1; j <= i; j++){
//         row += i + j - 1 + " ";
//     }
//     console.log(row);
// }

// let row = "";
// let num = 1;

// for (let i = 1; i <= 4; i++){
//     row = "";
//     for (let j = 1; j <= i; j++){
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }

// // const workMinutes = [45, 50, 0, 30, 60, 70, 0, 20, 25, 90];
// const workMinutes = [20, 30, 40, 0, 50, 60];

// let currentStreak = 0;
// let maxStreak = 0;
// let row = "";
// let totalMinutes = 0;

// for (let i = 0; i < workMinutes.length; i++) {
//     totalMinutes += workMinutes[i];
//     if (workMinutes[i] > 0){
//         row += workMinutes[i] + " ";
//         currentStreak++;
//         if (currentStreak > maxStreak){
//             maxStreak = currentStreak;
//         }
//     }

//     else if (workMinutes[i] === 0) {
//         console.log(row);
//         row = "";
//         currentStreak = 0;
//     }

//     // if (row !== ""){
//     //     console.log(row);
//     // }
// }

// console.log("Longest Streak: " + maxStreak);
// console.log("Total Minutes: " + totalMinutes);

// const workMinutes = [25, 40, 0, 50, 30, 20, 0, 60, 45];
// let totalSessions = 0;
// let maxxStreak = 0;
// let currentStreak = 0;
// let average = 0;
// let sum = 0;
// let count = 0;

// for (let i = 0; i < workMinutes.length; i++){
//     if (workMinutes[i] > 0){
//         totalSessions++;
//         sum += workMinutes[i];
//         currentStreak++;
//         if (currentStreak > maxxStreak){
//             maxxStreak = currentStreak;
//         }
//     }

//     else{
//         currentStreak = 0;
//     }
// }

// average = sum / totalSessions;
// console.log("Total Sessions: " + totalSessions);
// console.log("Longest Streak: " + maxxStreak);
// console.log("Average Minutes: " + average);

// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// const workMinutes = [30, 0, 45, 50, 0, 60, 20, 0, 90];
// let totalSessions = 0;
// let totalMinutes = 0;
// let maxxStreak = 0;
// let currentStreak = 0;
// let average = 0;

// for (let i = 0; i < workMinutes.length; i++){
//     if (workMinutes[i] !== 0){
//         totalSessions++;
//         totalMinutes += workMinutes[i];
//         currentStreak++;
//         if (currentStreak > maxxStreak){
//             maxxStreak = currentStreak;
//         }
//     }

//     else{
//         currentStreak = 0;
//     }
// }

// average = totalMinutes/totalSessions;

// console.log("Total Productive Sessions: " + totalSessions);
// console.log("Longest Streak: " + maxxStreak);
// console.log("Average Minutes: " + average);

// const workMinutes = [30, 40, 0, 50, 10, 20, 0, 60];
// let maxStreak = 0;
// let currentStreak = 0;

// for (let i = 0; i < workMinutes.length; i++){
//     if (workMinutes[i] !== 0){
//         currentStreak += workMinutes[i];
//         if (currentStreak > maxStreak){
//             maxStreak = currentStreak;
//         }
//     }

//     else{
//         currentStreak = 0;
//     }
// }

// console.log(maxStreak);

// const arr = [5, 8, 3, 6, 9, 2];
// let count = 0;

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > arr[i - 1]){
//         count++;
//     }
// }

// console.log(count);

// const arr = [1, 3, 2, 4, 1, 5, 3];
// let count = 0;

// for (let i = 1; i < arr.length - 1; i++){
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
//         count++;
//     }
// }

// console.log(count);

// const data = [3, 0, -2, 7, -5, 10, -1];
// let positiveCount = 0;
// let negativeCount = 0;
// let zerosCount = 0;

// for (let i = 0; i < data.length; i++){
//     if (data[i] === 0){
//         zerosCount++;
//     }

//     else if (data[i] < 0){
//         negativeCount++;
//     }

//     else if (data[i] > 0){
//         positiveCount++;
//     }
// }

// console.log("Positive Numbers: " + positiveCount);
// console.log("Negative Numbers: " + negativeCount);
// console.log("Zero's: " + zerosCount);

// console.log("Counting");
// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }

// console.log("Reversed");

// for (let i = 20; i >= 1; i--){
//     console.log(i);
// }

// console.log("Step Jump");

// for (let i = 0; i <= 50; i += 5){
//     console.log(i);
// }

// console.log("Even Numbers");

// for (let i = 2; i <= 50; i += 2){
//     console.log(i);
// }

// console.log("Sum Of Numbers");
// let sum = 0;

// for (let i = 1; i <= 100; i++){
//     sum += i;
// }

// console.log(sum);

// let arr = [4, 9, 16, 25, 36];
// let count = 0;

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if (arr[i] % 2 === 0){
//         count++;
//     }
//     if (arr[i] > 20){
//         console.log(arr[i]);
//     }
// }

// console.log(count);

// for (let i = 1; i <= 30; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }

//     else if (i % 3 === 0){
//         console.log("Fizz");
//     }

//     else if (i % 5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// let row = "";

// for (let i = 1; i <= 5; i++){
//     row = "";
//     for( let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// Arrays

// let fruits = ["apple", "banana", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// console.log("First Element: " + fruits[0]);
// console.log("Last Element: " + fruits[fruits.length - 1]);
// console.log("Second Element: " + fruits[1]);

// fruits[1] = "grapes";
// fruits.push("pinapple");
// fruits[0] = "kiwi";

// console.log(fruits);

// let warmup = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < warmup.length; i++){
//     sum += warmup[i];
//     if (warmup[i] % 2 !== 0){
//         console.log("Odd Number: " + warmup[i]);
//     }
// }

// console.log("Total Sum: " + sum);

// console.log("Reverse Order")
// for (let j = warmup.length - 1; j >= 0; j--){
//     console.log[j];
// }

// let numbers = [100, 1, 50, 2]
// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++){
//     if (numbers[i] > largest){
//         largest = numbers[i];
//     }
//     if (numbers[i] < smallest){
//             smallest = numbers[i];
//     }
// }

// console.log("Largest: " + largest);
// console.log("Smallest: " + smallest);

// let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let appleCount = 0;
// let bananaCount = 0;
// let orangeCount = 0;

// for (let i = 0; i < items.length; i++){
//     if (items[i] === "apple"){
//         appleCount++;
//     }

//     else if (items[i] === "banana"){
//         bananaCount++;
//     }

//     else if (items[i] === "orange"){
//         orangeCount++;
//     }
// }

// console.log("Apple: " + appleCount);
// console.log("Banana: " + bananaCount);
// console.log("Orange: " + orangeCount);

// let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let count = {};

// for (let i = 0; i < items.length; i++){
//     let item = items[i];
//     if (count[item]){
//         count[item]++;
//     }

//     else{
//         count[item] = 1;
//     }
// }

// console.log(count);

// let arr = [10, 20, 30, 40, 50];
// let newArr = [];

// for (let i = arr.length - 1; i >= 0; i--){
    //     newArr.push(arr[i]);
    // }
    
    // let nums = [1, 2, 3, 2, 4, 1, 5];
    // let newNums = [];
    
    // for (let i = 0; i < nums.length; i++){
    //     if (nums[i])
    // }
    
    // console.log(nums);
// console.log(newArr);

// let arr = [0,1,2,4,5];
// console.log(arr);
// arr[3] = 3;
// arr.push(3);
// console.log(arr)
// arr.pop();
// console.log(arr);

// let nums = [2, 4, 6, 8];

// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// let nums = [2, 4, 6, 8];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//         console.log(nums[i]);
//     }
// }

// let nums = [2, 4, 6, 8];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//         count++;
//     }
// }

// console.log(count);

// let nums = [2, 4, 6, 8];
// let sum = 0;

// for (let i = 0; i < nums.length; i++){
//     sum += nums[i];
// }

// console.log(sum);

// let nums = [7, 3, 9, 2, 6];
// let largest = nums[0];

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] > largest){
//         largest = nums[i];
//     }
// }

// console.log(largest);

// let nums = [7, 3, 9, 2, 6];
// let smallest = nums[0];

// for (let i = 1; i < nums.length; i++){
//     if (nums[i] < smallest){
//         smallest = nums[i];
//     }
// }

// console.log("Smallest: " + smallest);

// let nums = [1, 2, 3, 4, 5];
// let newNums = [];

// for (let i = nums.length - 1; i >= 0 ; i--){
//     newNums.push(nums[i]);
// }

// console.log(newNums);

// let nums = [2, 8, 4, 10, 3, 7];
// let newNums = [];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 5){
//         newNums.push(nums[i]);
//     }
// }

// console.log(newNums);

// let nums = [1, 2, 1, 3, 2, 1];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] === 1){
//         count++;
//     }
// }

// console.log("Count of 1: " + count);

// let nums = [1, 2, 1, 3, 2, 1];
// let count = 0;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] === 2){
//         count++;
//     }
// }

// console.log("Count of 2: " + count);

// let nums = [1, 2, 3, 4, 5, 6];
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

// console.log("Even Numbers: " + evenCount);
// console.log("Odd Numbers: " + oddCount);

// let nums = [1, 3, 5, 2, 8, 4];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 4){
//         console.log("First > 4: " + nums[i]);
//         break;
//     }
// }

// let nums = [2, 4, 6, 8, 10];
// let exist = false;

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] === 7){
//         exist = true;
//         break;
//     }
// }

// if (exist){
//     console.log("It Exists");
// }

// else{
//     console.log("It Doesn't Exists");
// }

// let nums = [1, 2, 3, 4, 5];

// for (let i = 0; i < nums.length; i++){
//     let temp = nums[0];
//     nums[0] = nums[nums.length - 1];
//     nums[nums.length - 1] = temp;
//     temp = nums[1];
//     nums[1] = nums[nums.length - 2];
//     nums[nums.length - 2] = temp;
// }

// console.log(nums);

// let nums = [1, 2, 3, 4, 5];
// let start = 0;
// let end = nums.length - 1;

// while (start < end){
//     let temp = start;
//     start = end;
//     end = temp;

//     start++;
//     end--;
// }

// console.log(nums);

let nums = [3, 6, 1, 9, 2];
let sum = 0;
let largest = nums[0];

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
    if (nums[i] > largest){
        largest = nums[i];
    }
}

console.log("Sum: " + sum);
console.log("Largest: " + largest);