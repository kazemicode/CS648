$( document ).ready(function() {

    // Use click method to display alert that the first button was clicked
    $("button:first").click(function(){
        alert("The first button was clicked.");
      });

    // Use bind method (depracated) to display alert that the second button was clicked
    $("button:nth-of-type(2").bind("click", function(){
    alert("The second button was clicked.");
    });

    // Use on method to display alert that either of the last two buttons were clicked 
    $("button").slice(2).on("click", function(){ //.slice() uses 0-based indexing
        alert("One of the other buttons were clicked.");
      });

    // Use jQuery to set first div to 400px x 400px 
    $("div:first").height(400).width(400);

    // Attach the click, mouseenter, and mouseleave events using the on method
    // Display an alert indicating which event happened
    // Rewrite so that a span tag with the message is added to the div
    $("div:first").on({
        click: function(){
            //alert("Mouse clicked first div");
            $(this).append("<span>Mouse clicked first div </span>");
        },
        mouseenter: function(){
            //alert("Mouse entered first div");
            $(this).append("<span>Mouse entered first div </span>");
        },
        mouseleave: function(){
            //alert("Mouse left first div");
            $(this).append("<span>Mouse left first div </span>")
        }
    
      });

      // Prevent click event from navigating to the modulemedia link
      // Change the link color to red
      // Display the name of the node that triggered the event in an alert box
      $('a').on("click", function(e) {
        e.preventDefault();
        $(this).css("color", "#ff0000");
        alert("Node that triggered event: " + e.target.nodeName);
      });

      // When window is resized, display width and height of the window within the div
      $( window ).resize(function() {
        $("div:last").html( "Window width: " + $( window ).width() + "<br>Window height: " + $( window ).height() );
      });

      // When first input textfield has focus, change bg color to a light gray
      // When it does not have focus, change bg color back to white
      $( "input[type=text]:first" ).on({
        focus: function() {
        $( this ).css("background-color", "#f0f0f0");
      },
        focusout: function() {
        $( this ).css("background-color", "#ffffff");
      }
    });    
    
    
    // When user submits form, if any of the two fields is empty,
    // display in an alert box that the fields are required
    // Put a red border around the field(s) left empty
    // If both fields have data, make the border
    // around both green
    $( "#myForm" ).submit(function( e ) {
        var myInputs = $( "#myForm input" ).slice(0,2);
         if ( $( "#myForm input:first").val() && $( "#myForm input:nth-child(2)").val()) {
            myInputs.css("border-color", "#00FF00");

        }
        else  {
            if(!$( "#myForm input:first").val()){
                $( "#myForm input:first").css("border-color", "#FF0000");
            }
            else {
                $( "#myForm input:first").css("border-color", "");
            }

            if(!$( "#myForm input:nth-child(2)").val()){
                $( "#myForm input:nth-child(2)").css("border-color", "#FF0000");
            }
            else {
                $( "#myForm input:nth-child(2)").css("border-color", "");
            }
            alert("All fields are required!")
            
        }
        e.preventDefault();
      });
});