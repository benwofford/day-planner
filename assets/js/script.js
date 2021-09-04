let now = moment();

$(document).add(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'))
 });

$(document).ready(function() {

    $(".saveBtn").on("click", function() {

        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr("id");
    
        console.log(value, time);
    
        localStorage.setItem(time, value);
    });

}); 

// Create element to check for time and refresh CSS/colors etc

//if (now() <= ('9:59:59 am').css("#hour-9", '.present')) X 1.0 BAD X

/* $(document).ready(function() {
    if ($(now()).is(<= "9:59:59 AM"))
        $("#hour-9").css(".present")
    else $("hour-9").css(".past")
}); 2.0 WIP */

/* $(document).ready(function() {
    if ($(now()>09 && now()<09.59)) {
        $("#hour-9").css(".present");
    else
        $("hour-9").css(".past");
    }
}); -- 3.0 WIP, broke, need fix :(  */

$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-1 .description").val(localStorage.getItem('hour-1'));
$("#hour-2 .description").val(localStorage.getItem('hour-2'));
$("#hour-3 .description").val(localStorage.getItem('hour-3'));
$("#hour-4 .description").val(localStorage.getItem('hour-4'));
$("#hour-5 .description").val(localStorage.getItem('hour-5'));
