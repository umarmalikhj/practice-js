let result = 0;
let sum = 0;
let a;
let b;
let num1 = 0;
let num2 = 0;

while(true){
    response = Number(prompt("Enter The Operation That Needs To Be Performed: \n 1 For Addition \n 2 For Subtraction \n 3 For Multiplication \n 4 For Division \n 5 For Exit"))
    if (response == 1){
        num1 = Number(prompt("Enter Number 1: "));
        num2 = Number(prompt("Enter Number 2: "));
        result = addition (num1, num2);
        alert(result);
    }
    else if (response == 2){
        num1 = Number(prompt("Enter Number 1: "));
        num2 = Number(prompt("Enter Number 2: "));
        result = subtraction (num1, num2);
        alert(result);
    }
    else if (response == 3){
        num1 = Number(prompt("Enter Number 1: "));
        num2 = Number(prompt("Enter Number 2: "));
        result = multiplication (num1, num2);
        alert(result);
    }
    else if (response == 4){
        num1 = Number(prompt("Enter Number 1: "));
        num2 = Number(prompt("Enter Number 2: "));
        result = division (num1, num2);
        alert(result);
    }
    else if (response == 5){
        console.log("Exiting the Program...")
        break;
    }
    else{
        console.error("Invalid Option");
    }
}

function addition(a,b){
    sum = a + b;
    return sum;
}

function subtraction(a,b){
    sum = a - b;
    return sum;
}

function multiplication(a,b){
    sum = a * b;
    return sum;
}

function division(a,b){
    sum = a / b;
    return sum;
}