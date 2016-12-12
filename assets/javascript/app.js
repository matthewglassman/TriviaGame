//create timer
var number = 45;
var counter;

function run () {
  counter = setInterval(decrement, 1000);
}

function decrement (){
  number--;
  $("#display-timer").html("<h2>Time Remaining: " + number + "</h2>");
  if (number === 0) {  //add addional statement for if answer is clicked
    stop();
  }
}
function stop (){
  clearInterval(counter);
}
run();

//create question and answer object array something er other
var trivia = {
  questionAnswer: [
  {
    question1: "Known as 'The Boss' his hits of the 1980s included 'Born In The USA', 'Glory Days', and 'Dancing In The Dark'. He is...?",
    answer1: "Bon Jovi",
    answer2: "Bruce Springsteen",
    answer3: "Michael Jackson",
    answer4: "Barry White"
  }, {
    question2: "Her album 'She's So Unusual' skyrocketed to success and produced multiple hit singles like 'Girls Just Want To Have Fun' and the infamous 'She Bop'. Who was so unusual?", 
    answer1: "Madonna",
    answer2: "Janet Jackson",
    answer3: "Cyndi Lauper",
    answer4: "Tina Turner"
 }, {
    question3: "Originally a 4 person punk band from NYC, they whittled down to 3 members before earning their 'License to Ill' and becoming one of the longest-lived hip hop acts until the death of one of their founding members. Which trio that told us to fight for our right to party?", 
 }]
}