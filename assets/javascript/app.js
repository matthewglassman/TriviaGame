//create timer
var number = 45;
var counter;

function run () {
  counter = setInterval(decrement, 1000);
}

function decrement (){
  number--;
  $("#display-timer").html("<h2>Time Remaining: " + number);
  if (number === 0) {  //add addional statement for if answer is clicked
    stop();
  }
}
function stop (){
  clearInterval(counter);
}
run();
