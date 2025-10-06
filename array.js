let arr = [];

while(true){
    let response = Number(prompt("Enter Operation to be Performed: \n 1 For Add \n 2 For Remove \n 3 For Length Of Array \n 4 For Searching \n 5 For Exit"));
    let num;

    if(response == 1){
        arr = prompt("Enter The Array: ").split(",");
        num = prompt("Enter The Number: ");
        arr = addinginArray(arr,num);
        console.log("Updated Array:", arr);
    }

    else if(response == 2){
        arr = prompt("Enter The Array: ").split(",");
        arr = removingfromArray (arr);
        console.log("Updated Array:", arr);
    }

    else if(response == 3){
        arr = prompt("Enter The Array: ").split(",");
        arr = lengthofArray(arr);
        console.log("Updated Array:", arr);
    }

    else if(response == 4){
        arr = prompt("Enter The Array").split(",");
        num = prompt("Enter The Number To Find");
        if (arr.includes(num)){
            console.log("The Number Is Present | The Position Of Number Is-" , arr.indexOf(num));
        }
        else{
            console.log("Element Not Found");
        }
    }

    else if(response == 5){
        console.log("Exiting the Program...")
        break;
    }

    else{
        console.error("Please Enter The Correct Value");
    }

    function addinginArray (arr, num){
        arr.push(num);
        return arr;
    }

    function removingfromArray (arr){
        arr.pop();
        return arr;
    }

    function lengthofArray (arr){
        let result = arr.length;
        return result;
    }
}