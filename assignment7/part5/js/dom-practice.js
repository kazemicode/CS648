
//STEP 1
function beenClicked(){
    alert("I've been clicked!");
}

//STEP 2
var myButton = document.getElementById("myButton");
myButton.onclick =  function () {
    "use strict";
    window.alert("I've been clicked!");
};


//STEP 3
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
$("anotherButton").addEventListener("click", beenClicked);

//STEP 4

$("anotherButton").addEventListener("click", function () {
    "use strict";
    window.alert("I've been clicked!");
});

//STEP 5


// wait for page to load to use DOM to get element by id
window.addEventListener("load", function () {
    "use strict";
    $("anotherButton").addEventListener("click", beenClicked);
});

