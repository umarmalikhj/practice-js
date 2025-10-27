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

// let x = Number(prompt("Enter The Number: "));
// let fact = 1;

// for(let i=1; i<=x; i++){
//     fact *= i;
// }
// console.log(fact)

// let x = Number(prompt("Enter The Number: "));

// for(let i=1; i<=x; i++){
//     if(x % i === 0){
//         console.log(i)
//     }
// }

// let x = Number(prompt("Enter A Number: "));
// let isPrime = true;

// for(let i=2; i<x; i++){
//     if(x % i === 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("This Is Prime Number")
// }
// else{
//     console.log("This is Not Prime Number")
// }

// let x = Number(prompt("Enter A Number: "))
// let limit = Number(prompt("Enter A limit: "));

// for(let i=1; i<=limit; i++){
//     if(i % x === 0){
//         console.log(i)
//     }
// }

// let x = Number(prompt("Enter The Number"));
// let sum = 1;

// for(let i=1; i<=x; i++){
//     sum *= i;
// }

// console.log(sum);

// let x =Number(prompt("Enter The Number"));
// let sum=0;

// for(let i=1; i<=x; i++){
//     sum += i;
// }

// console.log(sum)

// let x = Number(prompt("Enter The Number: "));

// for (let i=1; i<=x; i++){
//     console.log(i)
// }

// let x = Number(prompt("Enter The Number: "));
// let sum = 0;

// for(let i=1; i<=x; i++){
//     sum += i;
// }

// console.log(sum);

// let x = Number(prompt("Enter The Number: "));

// for(let i=1; i<=x; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

// let n = Number(prompt("Enter the Number: "));

// for(let i=1; i<=n; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// let n = Number(prompt("Enter The Number: "));
// let limit = Number(prompt("Enter Limit: "));

// while(n <= limit){
//     console.log(n);
//     n++;
// }

// let n = Number (prompt("Enter The Number:"));
// let i = 2;

// while(i<=n){
//     console.log(i);
//     i+=2;
// }

// let n = Number(prompt("Enter The Number: "));
// let i = 1;

// while(i <= n){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }

// let x = reverseNumber(10);
// console.log(x);

// let n = Number(prompt("Enter Number: "));

// while(n >= 1){
//     console.log(n);
//     n--;
// }

// function reverseNumber(n){
//     let result = [];
//     while(n >= 1){
//         result.push(n);
//         n--;
//     }
//     return result;
// }

// result = reverseNumber(n);
// console.log(result)

// while(i <= n){
//     console.log(i);
//     i++;
// }

// function printingArray(x){
//     let result = [];
//     let i = 2;
//     while(i <= x){
//         result.push(i);
//         i += 2;
//     }
//     return result;
// }

// let result = printingArray(n);
// console.log(result);

// let result = 1;
// let i = 1;
// while(i <= n){
//     result *= i;
//     i++;
// }

// console.log(result);

// function factorial(x){
//     let result = 1;
//     let i = 1;
//     while(i <= x){
//         result *= i;
//         i++;
//     }
//     return result;
// }

// let res = factorial(n);
// console.log(res)


// let x = Number(prompt("Enter The Number: "));
// let i = 1;

// while(i<=n){
//     console.log(n);
//     n--;
// }

// function countDown(n){
//     let result = [];
//     while(n > 0){
//         result.push(n);
//         n--;
//     }
//     return result;
// }

// let res = countDown(x);
// console.log(res);

// let p = Number(prompt("Enter The Number"));

// function sumOfNumber(n){
//     let x = 0;
//     let sum = 0;
//     while(n > 0){
//         x = n % 10;
//         sum = sum + x;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }

// let result = sumOfNumber(p);
// console.log(result);

// let p = Number(prompt("Enter Number 1: "));
// let q = Number(prompt("Enter Number 2: "));

// function swapNumbers (a,b){
//     let temp = a;
//     a = b;
//     b = temp;
//     return [a,b];
// }

// let result = [];
// result = swapNumbers (p , q);
// console.log(result)

// let numbers = [1, 2, 3, 4];
// let x = 5;

// function addNumber(arr, num){
//     arr.push(num);
//     return arr;
// }

// let result = addNumber(numbers, x);
// console.log(result);

// console.log("Objects");

// let student = {
//     name : "HJ",
//     age : 22,
//     course : "Web Development",
//     grade : 8.8,
//     college : "BNU"
// }
// console.log(student);
// console.log(".");
// console.log("Before Updation: ", student.name);
// console.log("Before Updation: ", student.course);

// student.name = "H";
// student.course = "Full Stack Development";

// console.log("After Updation: ", student.name);
// console.log("After Updation: ", student.course);

// console.log(student);

// student.isEnrolled = true;
// student.skills = "HTML, CSS, JS";
// delete student.college;
// delete student.grade;

// console.log(student);

// for(let key in student){
//     console.log(key + ":", student[key])
// }

// let car = {
//     brand : "Tesla",
//     model : "Model 3",
//     year : 2023,
//     color : "red"
// }

// for(let key in car){
//     console.log(key + ":", car[key]);
// }

// let scores = {
//     H : 80,
//     Sara : 90,
//     Ali : 92
// }

// for (let key in scores){
//     scores[key] += 5;
//     console.log(key + ":", scores[key])
// }

// let students = [
//     {name : "H", age : 22},
//     {name : "Ali", age : 21},
//     {name : "Sara", age : 23}
// ]

// students.obj ["Course"] = "Web Dev"; 

// for (let key in students){
//     console.log(key + ":" , students[key]);
// }

// const student = {
//     name : "Hj",
//     class : 12,
//     age : 20,
//     address: {
//         city : "Bangalore",
//         pin : 560045
//     }
// }

// const mobile = {
//     brand : "Apple iPhone ",
//     model : "17 Pro Max",
//     price : 100000,
//     features : [
//         "Power Camera", "Long Lasting Battery", "Sleek Design"
//     ],
//     showDetails(){
//         console.log("New Release Of The Week Is: \n" + mobile.brand + mobile.model + 
//             "\n Its Been Trending All Week, Because Of Its Features - " + mobile.features + " And Its Available At Our Store At Just " + mobile.price);
//     }
// }

// mobile.showDetails();

// let students = [];

// while(true){
//     let student = {
//         name : prompt("Enter Your Name: "),
//         age : Number(prompt("Enter Your Age: ")),
//     }

//     students.push(student);

//     let choice = prompt("Add Another? (yes/no):");
//     if (choice.toLowerCase() !== "yes"){
//         break;
//     }
// }

// function showDetails(student){
//     console.log("Name: " + student.name + " | Age: " + student.age);
// }

// for (let i = 0; i < students.length; i++){
//     showDetails(students[i]);
// }

// Employee Database Program

// let employees = [
//     { "id": 101, "name": "Ayaan Khan", "age": 28, "department": "HR", "salary": 52000, "city": "Bangalore" },
//     { "id": 102, "name": "Zoya Shaikh", "age": 26, "department": "IT", "salary": 68000, "city": "Mumbai" },
//     { "id": 103, "name": "Arjun Patel", "age": 32, "department": "Finance", "salary": 75000, "city": "Delhi" },
//     { "id": 104, "name": "Fatima Noor", "age": 29, "department": "IT", "salary": 72000, "city": "Hyderabad" },
//     { "id": 105, "name": "Kabir Ali", "age": 35, "department": "Sales", "salary": 61000, "city": "Pune" },
//     { "id": 106, "name": "Meera Joseph", "age": 27, "department": "HR", "salary": 54000, "city": "Chennai" },
//     { "id": 107, "name": "Ravi Kumar", "age": 31, "department": "IT", "salary": 80000, "city": "Bangalore" },
//     { "id": 108, "name": "Sana Sheikh", "age": 30, "department": "Finance", "salary": 70000, "city": "Delhi" },
//     { "id": 109, "name": "Ishaan Verma", "age": 25, "department": "Sales", "salary": 56000, "city": "Mumbai" },
//     { "id": 110, "name": "Aarav Nair", "age": 33, "department": "Operations", "salary": 65000, "city": "Kolkata" }
// ]

// while(true){
//     let employee = {
//         name : prompt("Enter Name: "),
//         position : prompt("Enter Position: "),
//         salary : Number(prompt("Enter Salary: "))
//     }

//     employees.push(employee);

//     let choice = prompt("Add Another? (yes/no)");
//     if (choice.toLowerCase() !== "yes"){
//         break;
//     }
// }

// function showDetails(employee){
//     console.log("Name : " + employee.name + 
//                 "\nAge: " + employee.age + 
//                 "\nDepartment: " + employee.department +
//                 "\nSalary : " + employee.salary +
//                 "\nCity: " + employee.city
//             ) 
// }

// for (let i = 0; i < employees.length; i++){
//     showDetails(employees[i])
// }

// let salary = [];

// for ( let  i = 0; i < employees.length; i++){
//     let x = employees[i].salary;
//     salary.push(x);
// }

// salary.sort();

// console.log("Highest Salary: " + salary[salary.length-1])
// console.log("Lowest Salary: " + salary[0]);

// const age = Number(prompt("Enter Age: "));

// if (age >= 18){
//     console.log("You Are Eligible For DL");
// }

// else{
//     console.log("Go Home and Sleep Kid!");
// }

// const x = Number(prompt("Enter Number: "));

// if (x % 2 === 0){
//     console.log("Even Number");
// }

// else{
//     console.log("Odd Number");
// }

// const marks = Number(prompt("Enter Your Marks: "));

// if (marks >= 90){
//     console.log("A");
// }

// else if (marks >= 75){
//     console.log("B");
// }

// else if (marks >= 50){
//     console.log("C");
// }

// else{
//     console.log("Fail");
// }

// const day = Number(prompt("Enter A Day (1 - 7)"));

// switch (day){
//     case 1 :
//         console.log("Monday");
//         break;

//     case 2 :
//         console.log("Tuesday");
//         break;

//     case 3 : 
//         console.log("Wednesday");
//         break;

//     case 4 : 
//         console.log("Thursday");
//         break;

//     case 5 : 
//         console.log("Friday");
//         break;

//     case 6 : 
//         console.log("Saturday");
//         break;

//     case 7 :
//         console.log("Sunday");
//         break;

//     default : 
//         console.log("You've Entered Wrong One!")
// }

// for (let i = 2; i <= 20; i+=2){
//     console.log(i);
// }

// let n = Number(prompt("Enter A Number: "));

// while(n >= 1){
//     console.log(n);
//     n--;
// }

// let num = [];
// let n;

// do {
//     n = Number(prompt("Enter A Number: "));
//     num.push(n);
// }

// while(n > 0)

// console.log(num)

// let a = Number(prompt("Enter Number 1 : "));
// let b = Number(prompt("Enter Number 2 : "));

// function averageNumber (x,y){
//     let sum = (x + y)/2;
//     return sum;
// }

// let num = averageNumber (a,b);
// console.log(num);

// let a = Number(prompt("Enter Number 1: "));
// let b = Number(prompt("Enter Number 2: "));
// let operator = prompt("Enter Operation to be Performed: \n + For Addition \n - For Subtraction \n * For Multiplication \n /  For Division");

// function calculate(x, y, opr){
//     let sum;
//     if(opr === "+"){
//         sum = addition(x, y);
//         return sum;
//     }

//     else if(opr === "-"){
//         sum = subtraction(x, y);
//         return sum;
//     }

//     else if(opr === "*"){
//         sum = multiplication(x, y);
//         return sum;
//     }

//     else if(opr === "/"){
//         sum = division(x, y);
//         return sum;
//     }
// }

// let calc = calculate(a, b, operator);
// alert(calc);


// function addition(x, y){
//     let sum = x + y;
//     return sum;
// }

// function subtraction(x, y){
//     let sum = x - y;
//     return sum;
// }

// function multiplication(x,y){
//     let sum = x * y;
//     return sum;
// }

// function division(x, y){
//     if (y === 0){
//         return undefined;
//     }
//     else {
//         let sum = x / y;
//         return sum
//     }
// }

// const heading = document.getElementById("myHeading");
// const paragraph = document.querySelector(".para");
// const button = document.getElementById("myBtn");

// console.log(heading);
// console.log(paragraph);
// console.log(button);

//  button.addEventListener("click", function() {
//         heading.style.color = "blue";
//         paragraph.style.color = "green";
//     });

// console.log("DOM CONNECTED");

// let heading = document.getElementById("myHeading");
// let paragraph = document.querySelector(".para");
// let button = document.getElementById("myBtn");

// console.log(heading);

// heading.innerText = "Hello!!!";
// heading.style.color = "crimson";
// heading.style.paddingTop = "20px";
// button.style.backgroundColor = "black";
// button.style.color = "White";
// button.style.border = "none";
// button.style.padding = "10px 20px";

// button.addEventListener("click", function(){
//     heading.innerText = "Umar Malik HJ";
//     paragraph.style.color = "blue";
//     button.innerText = "Clicked";
//     document.body.style.backgroundColor = "lightblue";
// })

// button.addEventListener("click", function(){
//     console.log("Button Clicked");
//     alert("Button Clicked");
// });

// heading.addEventListener("mouseover", function(){
//     heading.style.backgroundColor = "Crimson";
//     heading.style.color = "White";
//     heading.style.transition = "0.5s"
// });

// heading.addEventListener("mouseout", function(){
//     heading.style.backgroundColor = "white";
//     heading.style.color = "black";
// });

// paragraph.addEventListener("mouseover", function(){
//     paragraph.style.backgroundColor = "Blue";
//     paragraph.style.color = "White";
//     paragraph.style.transition = "0.5s"
// });

console.log("DOM Connected");

// const moods = {
//     Happy : {
//         text : "Happy",
//         color : "Yellow"
//     },
//     Sad : {
//         text : "Sad",
//         color : "Grey"
//     },
//     Angry : {
//         text : "Angry",
//         color : "Red"
//     }
// };

// function updateMood(type){
//     const selectedMood = moods[type];
//     mood.innerText = selectedMood.text;
//     document.body.style.backgroundColor = selectedMood.color;
//     mood.style.transition = "0.75s";
//     document.body.style.transition = "0.75s";
// }

// happy.addEventListener("click", function(){
//     updateMood("Happy");
// });

// sad.addEventListener("click", function(){
//     updateMood("Sad");
// });

// angry.addEventListener("click", function(){
//     updateMood("Angry");
// });

// happy.addEventListener("click", function(){
//     mood.innerText = "Happy";
//     mood.style.transition = "0.8s";
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.transition = "0.8s";
// });

// sad.addEventListener("click", function(){
//     mood.innerText = "Sad";
//     mood.style.transition = "0.8s";
//     document.body.style.backgroundColor = "grey";
//     document.body.style.transition = "0.8s";
// });

// angry.addEventListener("click", function(){
//     mood.innerText = "Angry";
//     mood.style.transition = "0.8s";
//     document.body.style.backgroundColor = "red";
//     document.body.style.transition = "0.8s";
// });

// let cyan = document.getElementById("cyan");
// let purple = document.getElementById("purple");
// let lime = document.getElementById("lime");
// let olive = document.getElementById("olive");
// let fuchsia = document.getElementById("fuchsia");
// let heading = document.getElementById("heading");

// cyan.addEventListener("click", function(){
//     colorPicker(this , "cyan");
// });

// purple.addEventListener("click", function(){
//     colorPicker(this, "purple");
// });

// lime.addEventListener("click", function(){
//     colorPicker(this, "lime");
// });

// olive.addEventListener("click", function(){
//     colorPicker(this, "olive");
// });

// fuchsia.addEventListener("click", function(){
//     colorPicker(this, "fuchsia");
// });

// function colorPicker(button, type){
//     document.querySelectorAll(".colorBtn button").forEach(btn => {
//         btn.style.border = "2px solid white";
//         btn.style.color = "white";
//         btn.style.transition = "0.75s";
//     });

//     const selectedColor = type;
//     heading.style.color = selectedColor;
//     heading.style.transition = "0.75s";
//     button.style.color = selectedColor;
//     button.style.transition = "0.75s";
//     button.style.border = `2px solid ${selectedColor}`;
// };

// let small = document.getElementById("small");
// let medium = document.getElementById("medium");
// let large = document.getElementById("large");
// let huge = document.getElementById("huge");
// let heading = document.getElementById("font1");

// small.addEventListener("click", function(){
//     heading.style.fontSize = "10px";
// });

// medium.addEventListener("click", function(){
//     heading.style.fontSize = "20px";
// });

// large.addEventListener("click", function(){
//     heading.style.fontSize = "30px";
// });

// huge.addEventListener("click", function(){
//     heading.style.fontSize = "75px";
// });

const fruits = ["apple", "mango", "banana"];

fruits.forEach((fruit, i) => {
    console.log(i, fruit)
});