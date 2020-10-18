let choices = ["rock", "paper", "scissors"];

function startGame(){
    var answer = "";
        while(!answer){
        var input = window.prompt("Rock, paper, or scissors?");
        if(input != null && choices.includes(input.toLowerCase().trim()) ){
            answer = input;  
            determineResult(answer); 
        }
        else if(input === null) {
            alert("Goodbye");
            break;
        }
        else {
            alert("Invalid move!");
        }
        
    }
    
    
}

function determineResult(userChoice) {
    let num = Math.floor((Math.random() * 3)); // 0-2
    let compChoice = choices[num];
    var msg = "You chose " + userChoice + " and the computer chose " + compChoice + ": ";
    // tie
    if(userChoice === compChoice){
        alert(msg + "TIE!");
    }
    else {
        // win conditions
        if ( (userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper") ) {
            alert(msg + "YOU WIN!");
        }
        // lose
        else {
            alert(msg + "YOU LOSE!");
        }
    }
}

startGame();