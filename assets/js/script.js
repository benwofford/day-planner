$(document).ready(function() {

    $(".saveBtn").on("click", function() {

        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr("id");
    
        console.log(value, time);
    
        localStorage.setItem(time, value);
    
    });

}); // Create element to check for time and refresh CSS/colors etc
    //moment.js

$("#hour-9 .description").val(localStorage.getItem('hour-9')); // repeat!