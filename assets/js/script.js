// This sets the date in the Jumbotron
$(document).add(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
});

// This sets the save button's function to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log(value, time);

    localStorage.setItem(time, value);
  });
});

function checkHour() {
  var currentHour = moment().hours();
  console.log("current hour:", currentHour);

  // This function checks the current hour against the above function and sets the CSS styling accordingly.
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    console.log("iterating hour:", hour);

    if (currentHour > hour) {
      $(this).addClass("past");
    } else if (currentHour === hour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

checkHour();

setInterval(checkHour, 15000);

// These save the input of the description fields into local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
