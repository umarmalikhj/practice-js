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

const marks = Number(prompt("Enter The Marks"));

if(isNaN(marks) || marks < 0 || marks > 100){
    console.log("Invalid Marks");
}

else if (marks >= 85){
    console.log("Distinction");
}

else if(marks >= 60){
    console.log("First Class");
}

else if(marks >= 50){
    console.log("Second Class");
}

else if(marks >= 35){
    console.log("Pass");
}

else {
    console.log("Fail");
}