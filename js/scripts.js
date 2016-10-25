var i = 0;
var countTo;
var countBy;

var counter = function() {
  if (countTo === countTo && countBy === countBy && Math.abs(countTo)>Math.abs(countBy)) {
    if (Math.abs(countTo + countBy) > Math.abs(countTo) && Math.abs(countTo + countBy) > Math.abs(countBy)) {
      for(i=0; Math.abs(i)<=Math.abs(countTo); i+=countBy){
        alert(i);
      }
    }
    else {
      alert("Please enter two positive numbers or two negative numbers.");
    }
  }
  else {
    alert("Please enter two valid numbers.");
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    countTo = parseFloat($("input#countTo").val());
    countBy = parseFloat($("input#countBy").val());

    counter();
  })

})
