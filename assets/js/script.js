// This sets the date in the Jumbotron
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

var checkHour = [
    'hour-9',
    'hour-10',
    'hour-11',
    'hour-12',
    'hour-13',
    'hour-14',
    'hour-15',
    'hour-16',
    'hour-17',
];

$(document).ready(function() {
    if ($(checkHour)<moment()) {
        $('time-block').css(".past");
    if ($(checkHour)=moment()) {
        $('time-block').css(".present");
    } else ($(checkHour)>moment())
        $('time-block').css(".future");
    };
});
/* These functions check for time and refresh CSS colors --> need fix, close!
$(document).ready(function() {
    if ($(moment()>09 && moment()<09,59)) {
        $("#hour-9").css(".present");
    } else {
        $("hour-9").css(".past");
    }
    console.log(moment());
});

$(document).ready(function() {
    if ($(moment()>10 && moment()<10,59)) {
        $("#hour-10").css(".present");
    } if ($(moment()<10)) {
        $("#hour-10").css(".future");
    }    
    else {
        $("hour-10").css(".past");
    }
});

$(document).ready(function() {
    if ($(moment()>11 && moment()<11,59)) {
        $("#hour-11").css(".present");
    } if ($(moment()<11)) {
        $("#hour-11").css(".future");
    }    
    else {
        $("hour-11").css(".past");
    }
}); */

// This saves the input of the description fields into local storage
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
// console.log('hour-9');
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
// console.log('hour-10');
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
// console.log('hour-11');
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
// console.log('hour-12');
$("#hour-1 .description").val(localStorage.getItem('hour-1'));
// console.log('hour-1');
$("#hour-2 .description").val(localStorage.getItem('hour-2'));
// console.log('hour-2');
$("#hour-3 .description").val(localStorage.getItem('hour-3'));
// console.log('hour-3');
$("#hour-4 .description").val(localStorage.getItem('hour-4'));
// console.log('hour-4');
$("#hour-5 .description").val(localStorage.getItem('hour-5'));
// console.log('hour-5');
