var coinFlip;


do {
    coinFlip = Math.floor((Math.random() * 2));
    //console.log(coinFlip); // for debugging
    if(coinFlip){
        console.log("Tails");
    }
    else {
        console.log("Heads");
    }
}
while(!coinFlip);

