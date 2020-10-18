function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update an existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view(inventory){
    for (index in inventory) {
        console.log(inventory[index][0] + "\t\t" + inventory[index][1] + " (" +inventory[index][2]+ ")\t\t" + inventory[index][3] + " Rupees");
    }
}

function update(inventory) {
    "use strict";
    var sku = window.prompt("Enter the product sku: ");
    var currentQty;
    var newQty = -1;
    var row;

    for(var item in inventory) {
        if(inventory[item][0] == sku){
            // sku found
            row = item;
            currentQty = inventory[item][2];
            break;
        }
    }
    if (currentQty != null){
        while (newQty < 0)
            {
                var userInput = window.prompt("Current quantity: " + currentQty + ". Enter new quantity: ");
                if(userInput > -1) {
                    newQty = userInput;
                    inventory[row][2] = newQty;
                    window.console.log(sku + " inventory updated to: " +newQty);
                    window.console.log("");
                }
                else {
                    alert("Invalid quantity!");
                }
            }
        }
    else{
        // sku does not exist
        alert("No product found with that sku");
        }
    }



function main() {
    "use strict";
    var employee_list, command;
    
    displayMenu();
    
    var inventory = [
        [1115, "Magical Shield", 1, 160.00],
        [1111, "Small Key", 1, 100.00],
        [1112, "Blue Candle", 1, 60.00],
        [1113, "Bomb", 4, 20.00],
        [1114, "Arrows", 999, 80]
    ];
    // sort by sku (0th column)
    inventory.sort(function(prev, next) {
        return prev[0] - next[0];
    });
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            command = command.toLowerCase().trim();
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
          
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
