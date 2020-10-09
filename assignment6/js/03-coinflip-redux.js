var coinFlip;
for(var i = 0; i < 10; i++){
    coinFlip = Math.floor((Math.random() * 2));
    //console.log(coinFlip); // for debugging
    if(coinFlip){
        console.log("Tails");
    }
    else {
        console.log("Heads");
    }
}