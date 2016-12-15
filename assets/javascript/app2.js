//create timer
var number = 45;
var counter;
var questionNum = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var giphyNum = 0

function run () {
  counter = setInterval(decrement, 1000);
	//reset number variable
  number = 45;
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

function startGame(){
  run();
  renderQuestion();
}
//create question and answer object array something er other
var trivia = {

  questionAnswer: [
  { //index0
    question: "Known as 'The Boss' his hits of the 1980s included 'Born In The USA', 'Glory Days', and 'Dancing In The Dark'. He is...?",
    choices: ["Bon Jovi", "Bruce Springsteen", "Michael Jackson", "Barry White"],
    // answer2: "Bruce Springsteen",
    // answer3: "Michael Jackson",
    // answer4: "Barry White"
    answer: "Bruce Springsteen",
    giphy: "../assets/images/springsteen.gif"
  }, { //index 1
    question: "Her album 'She's So Unusual' skyrocketed to success and produced multiple hit singles like 'Girls Just Want To Have Fun' and the infamous 'She Bop'. Who was so unusual?", 
    choices: ["Madonna", "Janet Jackson", "Cyndi Lauper", "Tina Turner"],
    // answer2: "Janet Jackson",
    // answer3: "Cyndi Lauper",
    // answer4: "Tina Turner"
    answer: "Cyndi Lauper",
    giphy: "../assets/images/lauper.gif"
 }, { //index 2
    question: "Originally a 4 person punk band from NYC, they whittled down to 3 members before earning their 'License to Ill' and becoming one of the longest-lived hip hop acts until the death of one of their founding members. Which trio that told us to fight for our right to party?",
    choices: ["The Beastie Boys", "Run-DMC", "Naughty By Nature", "A Tribe Called Quest"],
    // answer2: "Run-DMC",
    // answer3: "Naughty By Nature",
    // answer4: "A Tribe Called Quest"
    answer: "The Beastie Boys",
    giphy:  "../assets/images/beasties.gif"
 }, { //index 3
    question: "British pop group with notable members Simon LeBon and Nick Rhodes had hits 'Hungry Like a Wolf' and 'Rio'. Think you can name them?", 
    choices: ["The Police", "Spandau Ballet", "Wham!", "Duran Duran"],
    // answer2: "Spandau Ballet",
    // answer3: "Wham!",
    // answer4: "Duran Duran"
    answer: "Duran Duran",
    giphy:  "../assets/images/duranduran.gif"
 }, { //index 4
    question:  "Pioneers of New Wave music, this quartet, mostly consisting of art school grads, not only created interesting videos, but also one of the best films on concert.  Well known songs include 'Burning Down The House', 'And She War', and 'Wild, Wild Life. Who are they?",
    choices: ["They Might Be Giants", "The Cars", "Talking Heads", "The Cure"],
    // answer2: "The Cars",
    // answer3: "Talking Heads",
    // answer4: "The Cure"
    answer: "Talking Heads",
    giphy:  "../assets/images/talkingheads.gif"
 }, { //index 5
    question:  "The King of Pop, he created a 14 minute long music video that is a hit especialy around Halloween. Who is music royalty?",
    choices: ["Prince", "Michael Jackson", "David Bowie", "Bryan Adams"],
    // answer2: "Michael Jackson",
    // answer3: "David Bowie",
    // answer4: "Bryan Adams"
    answer: "Michael Jackson",
    giphy:  "../assets/images/thriller.gif"
 }
 ]
};

function renderQuestion() {
	var question = trivia.questionAnswer[questionNum];
   $("#ask-question").html(question.question);
	 $("#selections").empty();
    for (var n=0; n < question.choices.length; n++){
      var choice = question.choices[n];
    	console.log(choice);
    	$("#selections").append("<button>"+choice+"</button>");
    }
	stop();
	run();
};

function correct(){
  stop();
  correctCounter++;
  //set timer delay here before 
  $("#ask-question").empty();
  $("#selections").empty();
  $("body").html("<p> That is correct!  " + choice + "is the right answer.")
  var gif = trivia.questionAnswer[gyphyNum];
  $("#gyphy").html(gyphy.gif);
  nextQuestion();
};

function incorrect(){
  stop();
  incorrectCounter++;
  //set timer delay here before 
  $("#ask-question").empty();
  $("#selections").empty();
  $("body").html("<p> Ooohhh Sorry!  " + choice + "is the right answer.")
  var gif = trivia.questionAnswer[gyphyNum];
  $("#gyphy").html(gyphy.gif);
  nextQuestion();
};


function endOfGame (){
  $(document).empty();
  $("#wins").html(correctCounter);
  $("#incorrect").html(incorrectCounter);
  $("#unanswered").html(unansweredCounter);
  var reset = $("<button>");
  reset.attr("id","restart")
  reset.html("Restart");

};
function checkQuestion() {
  stop();
  var answerChoice = $("#selections").val();
  if (answerChoice === trivia.questionAnswer.answer){
    correct();
  } else {
    incorrect();
  };
	// put your checking code here.
	// if it is right, do the right thing
	// if it is wrong, do the wrong thing
	// put a button for next question
	// follow the instructions
}

function nextQuestion() {
	questionNum++;
	// Rememeber to check if you are at the end.
  if (questionNum > 6){
    endOfGame();
  } else {
	renderQuestion();
}

$(document).on("click", "#selections button", checkQuestion)

$("#just-for-example").on("click",nextQuestion);
  
$("#restart").on("click", startGame);
//Bring timer functionality into the for loop.
//};
renderQuestion();
//run();