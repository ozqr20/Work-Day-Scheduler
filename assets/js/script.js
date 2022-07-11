

$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

var checkTime = function(){


    for(var i = 9; i <= 17; i++){
        if($.now() < i){
            $("#hour-").addClass(".past");
        }
        if($.now()  === i){
            $("#hour-").addClass(".present");
        }
        if ($.now()  > i) {
            $("hour-").addClass(".future");
        }
    }
}




