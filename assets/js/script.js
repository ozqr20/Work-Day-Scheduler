
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});


$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("id");
        var txt = $(this).siblings(".description").val();
    });
});

// Not working it needs implementation 


var checkTime = function(){

    var dt = new Date();
    var currentHr = dt.getHours();

    console.log(currentHr);

    if(currentHr < 9){
        $("#hour-").addClass("past");
    }
    else if (currentHr === 9){
        $("#hour-").addClass("present");
    }
    else if (currentHr > 9) {
        $("#hour-").addClass("future");
    }

  };

  var time = $(this).parent().id("hour-9")
  alert(time);
  

const date = new Date($.now());
console.log($('text').val(date.getHours()));

console.log(date);

checkTime = (hours) => {
    const date = new Date($.now());
    if (hours < date.getHours()) {
        $('timeContainer').addClass('past');
    } else if (hours == date.getHours()) {
        $('timeContainer').addClass('present');
    } else {
        $('timeContainer').addClass('future');
    }
};

$(document).ready(function(){
    const time = $("#hour-").val(date.getHours());
    checkTime(time);
});

checkTime();


