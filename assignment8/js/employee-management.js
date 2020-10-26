/* global variables */

var employee_list = [
    ["Zak Ruvalcaba", "Professor", "48900"],
    ["Sally Smith", "Dean", "48901"],
    ["Fred Franklin", "Secretary", "48902"],
    ["John Smith", "Administrative Assistant", "48903"],
    ["Jane Caruthers", "Researcher", "48904"]
                ];

 var content;
 var delButtons;



/* listeners */
window.addEventListener("load", function () {
    "use strict";
    showEmployees();
  
     });



/* functions */

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};


function showEmployees() {
    // display all employees in a table
    document.getElementById('display-area').innerHTML = "<h5>Showing "+employee_list.length+ " employees:</h5>";
    content = "<table class='table table-striped table-dark'><thead><tr><th>Name</th><th>Title</th><th>Extension</th><th>Delete</th></tr></thead><tbody>";  
    for(var employee in employee_list.sort()){
        content += "<tr><td>"+ employee_list[employee][0]+"</td><td>"+employee_list[employee][1]+"</td><td>"+employee_list[employee][2]+"</td><td><button class='btn btn-dark del' type='submit' value="+employee+">Delete</button></td></tr>";
    }

    content += "<tr><form id='employeeAdd' method='GET' action='#'> <td><input type='text' class='form-control' id='name' placeholder='Enter new employee name'\
        </td><td></label><input type='text' class='form-control' id='position' placeholder='Enter employee position'</td><td><input type='text'\
         class='form-control' id='ext' placeholder='Enter employee extension'</td><td><input type='button' id='add' class='btn btn-dark' value='Add'></td></tr></form>"
    
    content += '</tbody></table>';
    document.getElementById('display-area').innerHTML += content;

    // get array of all delete button elements
    delButtons = document.getElementsByClassName("del");
   
    // create event handler for each delete button
    for (var i = 0; i < delButtons.length; i++) {
        delButtons[i].onclick = function(e) {
            deleteEmployee(this.value);
            console.log(employee_list);
            showEmployees();
        };
    }

    $("add").addEventListener("click", processEntries);
    $("name").focus();
   
}

function deleteEmployee(index) {
    employee_list.splice(index, 1);
}


function clearArea(){
    document.getElementById('display-area').innerHTML = '';
}



function isFormValid() {
    return extIsValid && positionIsValid && nameIsValid;
}

var processEntries = function () {
    "use strict";
    var position, ext, name, valid, msg;
    name = $("name").value;
    position = $("position").value;
    ext = $("ext").value;
    msg = [];
    valid = false;

    console.log('name: ' + name + ' pos: ' + position + ' ext:' + ext );

    if (ext === "") {
        msg.push("Extension");
         }

    if (name === "") {
        msg.push("Name");
       
    }

    if (position === "") {
        msg.push("Position");
      
    }

    valid = !((ext === "") && (name === "") && (position === ""));
    if(valid) {
        // add employee
        employee_list.push([name, position, ext]);
        // update the table
        showEmployees();
        $("employeeAdd").reset();
        $("name").focus();
    }
    else {
        showEmployees();
        for(var item in msg){
            validationError(msg[item]);
        }
    }

};

function validationError(missingField){
    document.getElementById('display-area').innerHTML += "<div class='alert alert-dark alert-dismissible fade show' role='alert'><b>" + missingField + "</b> is required <button type='button' class='close' data-dismiss='alert' aria-label='Close><span aria-hidden='true'>&times;</span></button></div>";
    $("add").addEventListener("click", processEntries);
    $("name").focus();

}