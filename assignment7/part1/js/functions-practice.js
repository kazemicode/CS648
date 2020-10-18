//STEP 1
// function halfNumber
// @param num : integer
// returns a float : half the input num
function halfNumber(num){
    return num/2;
}

//STEP 2
// function squareNumber
// @param num : integer
// returns an int : num squared
function squareNumber(num) {
    return num * num;
}

//STEP 3
// function percentOf
// @param num1 : integer
// @param num2 : integer
// returns a string : percentage the first number represents of the second number
function percentOf(num1, num2) {
    return (num1 / num2 * 100) + "%";
}


//STEP 4
// function findModulus
// @param num : integer
// @param mod : integer
// returns an int : num modulus mod
function findModulus(num, mod) {
    return num % mod;
}

//STEP 5
// function 
function sumNumbers(...numbers) {
    let result = 0;
    for(number in numbers){
        result += numbers[number];
    } 
    return result;
}

// helper function for STEP 5
// @params
function convertInput(stringList){
    
    for(element in stringList){
        stringList[element] = parseInt(stringList[element]);
    }
    return stringList;
}

let inputNum = 5;
console.log("Half of " + inputNum +  " is: " + halfNumber(inputNum));
console.log("The result of squaring the number " + inputNum +  " is: " + squareNumber(inputNum));
console.log(inputNum +  " is " + percentOf(inputNum, 2) + " of 2");
console.log(inputNum +  " mod 2 is: " + findModulus(inputNum, 2));

// Step 5 test
let regexPattern = /,\s*/
var userResponse = window.prompt("Enter a list of numbers separated by commas you'd like to sum: ").split(regexPattern);
var numsList = convertInput(userResponse);
console.log("The sum of the numbers " + numsList + " is: " + sumNumbers(...numsList));