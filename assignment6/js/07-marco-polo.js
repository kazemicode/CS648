for(var i = 1; i < 101; i++){
    if(i%3 == 0){
        if(i%5 == 0){
            console.log("Marco! Polo!");
        }
        else {
            console.log("Marco!");
        }
    }
    else if(i%5 ==0){
        console.log("Polo!");
    }
    else {
        console.log(i);
    }
}