
$(document).ready(function(){
    $("#currentDay").html(moment().format("dddd, MMMM Do"));
});


// once the user log into the website the document will run 

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("id");
        var txt = $(this).siblings(".description").val();

        localStorage.setItem(hour,txt);
    });

    function checkTime(){

        var now = moment().hour();
        console.log(now);

        
        $(".time-block").each(function(){
            // point to the attribute id then separate hours with the id "hour" by explicit spliting it and change the string into an integer
            var timeFrame = parseInt($(this).attr("id").split('hour')[1]);
            console.log("timeFrame check" + timeFrame);

            //depending on the time the color will be change/remove 

            if(timeFrame < now){
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if(timeFrame === now) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    }; // end checkTime

    // adding the id and the user input into the local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    checkTime();

}); // end of document 


