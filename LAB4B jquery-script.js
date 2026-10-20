
$(document).ready(function() {

    // (a) Change the text
    $("#myElement").text("Modified Text");

    // (b) Add the CSS class
    $("#myDIV").addClass("myStyle");

    // (c) Handle the button click
    $("#myButton").on("click", function() {
        alert("Button clicked!");
    });

});
