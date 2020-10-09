var coinFlip = Math.floor((Math.random() * 100));
let THRESHOLD = 50; // 0-49 is heads, 51-100 is tails
var choice = window.prompt("Heads or tails?");
var flipString = "The flip was ";
var choiceString = "you chose ";

// for debugging
console.log("choice " + choice);
console.log("coin flip: " + coinFlip);

displayWin(determineResult());

// heads
function determineResult(){
    if(coinFlip < THRESHOLD){
        flipString = flipString + "heads ";
        return choice.toLowerCase().trim() === "heads";
    }
    else if(coinFlip > THRESHOLD){
        flipString = flipString + "tails ";
        return choice.toLowerCase().trim() === "tails";
    }
    else {
        alert("WOAH. THE COIN LANDED ON IT'S EDGE. THAT NEVER HAPPENS!"); // happens if coinFlip is 50
        return null;
    }

}


function displayWin(isWinner) {
    if(isWinner != null){
        if(isWinner){
            alert(flipString + "and " + choiceString + choice + "...you win!");
        }
        else{
            alert(flipString + "but " + choiceString + choice + "...you lose!");
        }
    }

}