var number1 = parseInt(window.prompt("Enter an integer"));
var number2 = parseInt(window.prompt("Enter another integer"));
document.write(largestN(number1, number2));



function largestN(n1, n2){
    if(n1 > n2) {
        return n1;
    }
    return n2;
}