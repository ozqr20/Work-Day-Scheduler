var tasks = {};

$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

var checkTime = function(timeEl){

    var date = new Date.now()
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = "AM";
    total = hour + minutes + seconds;

    if(date > total) {
        console.log(date);
        alert("it has passed");
    }
    else if(date === total){
        console.log(date);
        alert("its current")
    } else{
        console.log(date);
        alert("its future")
    }
}
checkTime(10);




