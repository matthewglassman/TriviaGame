var number = 45;
var counter;
var questionNum = 0;
var answerNum = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var gyphyNum = 0;

$("div").css(center);

function startGame(){
//  run();
  renderQuestion();
}

function run () {
  counter = setInterval(decrement, 1000);
	//reset number variable
  number = 45;
}

function renderQuestion() {
	//$("#gyphy").hide();
	//$("#ask-question").empty();
	question = trivia.questionAnswer[questionNum];
   $("#ask-question").html(question.question);
	 $("#selections").empty();
	 $("#starterbutton").hide();
    for (var n=0; n < question.choices.length; n++){
      choice = question.choices[n];
      //var choice = question.choices[n];
    	//console.log(choice);
    	$("#selections").append("<button id='" + choice + "' value='" + choice + "'>" + choice + "</button>")
    					.show()//"<button>"+choice+"</button>")
    	//$("button").val(choice);

    }
//	stop();
//	run();
}

function checkQuestion() {
  //stop();
  $("#selections").empty();
  $("#ask-question").empty();
  var answerChoice = $(this).val(); //("#selections").val();
  console.log(answerChoice);
  correctAnswer = trivia.questionAnswer[questionNum].answer;
  //console.log(correctAnswer);
   if (answerChoice === correctAnswer){
      correct();
    } else {
     incorrect();
   }
 }

function correct(){
  //stop();
  //decrement();
  correctCounter++;
  //set timer delay here before
  // $("#correct").empty();
  // $("#incorrect").empty(); 
  $("#ask-question").hide();
  $("#selections").hide();
  $("#correct").html("<p> That is correct!  " + correctAnswer + " is the right answer.");
  var gif = trivia.questionAnswer[questionNum].gyphy;
  $("#gyphy").html("<img src='" + gif +"' alt='photo'>");
  //$("#gyphy").html(gif.gyphy);
  //gyphyNum++
 // stop();
 setTimeout(nextQuestion, 1000 * 5);
 //nextQuestion();
}

function incorrect(){
  //stop();
 // decrement();
  incorrectCounter++;
  // $("#correct").empty();
  // $("#incorrect").empty();//set timer delay here before 
  $("#ask-question").hide();
  $("#selections").hide();
  $("#incorrect").html("<p> Ooohhh Sorry!  " + correctAnswer + " was the right answer.");
  var gif = trivia.questionAnswer[questionNum].gyphy;
 // console.log(gif);
  $("#gyphy").html("<img src='" + gif +"' alt='photo'>"); //("<img src=" + gif + ">");
  //gyphyNum++
 // console.log(gyphyNum);
  //stop();
setTimeout(nextQuestion, 1000 * 5);
}

function nextQuestion() {
	questionNum++
	$("#ask-question").show();
	$("#gyphy").empty();
	$("#correct").empty();
	$("#incorrect").empty();
	if (questionNum > 5){  // Rememeber to check if you are at the end.
   // console.log(quesitonNum);
    endOfGame();
  } else if (questionNum <= 5){
  //questionNum++;
  console.log(questionNum);
	renderQuestion();
	}
}

function endOfGame (){
  //$(document).empty();
  $("#correct").html("<h3>You got " + correctCounter + " answers right.</h3>");
  $("#incorrect").html("<h3> You got " + incorrectCounter + " answers wrong.</h3>");
  $("#unanswered").html("<h3> And you didn't bother answering " + unansweredCounter + "</h3>");
  $("#gyphy").html("<img src='assets/images/rickroll.gif'>");
  var reset = $("<button>");
  reset.attr("id","restart")
  reset.text("Restart");
};

var trivia = {

  questionAnswer: [
  { //index0
    question: "Known as 'The Boss' his hits of the 1980s included 'Born In The USA', 'Glory Days', and 'Dancing In The Dark'. He is...?",
    choices: ["Bon Jovi", "Bruce Springsteen", "Michael Jackson", "Barry White"],
    // answer2: "Bruce Springsteen",
    // answer3: "Michael Jackson",
    // answer4: "Barry White"
    answer: "Bruce Springsteen",
    gyphy: "assets/images/springsteen.gif"
  }, { //index 1
    question: "Her album 'She's So Unusual' skyrocketed to success and produced multiple hit singles like 'Girls Just Want To Have Fun' and the infamous 'She Bop'. Who was so unusual?", 
    choices: ["Madonna", "Janet Jackson", "Cyndi Lauper", "Tina Turner"],
    // answer2: "Janet Jackson",
    // answer3: "Cyndi Lauper",
    // answer4: "Tina Turner"
    answer: "Cyndi Lauper",
    gyphy: "assets/images/lauper.gif"
 }, { //index 2
    question: "Originally a 4 person punk band from NYC, they whittled down to 3 members before earning their 'License to Ill' and becoming one of the longest-lived hip hop acts until the death of one of their founding members. Which trio that told us to fight for our right to party?",
    choices: ["The Beastie Boys", "Run-DMC", "Naughty By Nature", "A Tribe Called Quest"],
    // answer2: "Run-DMC",
    // answer3: "Naughty By Nature",
    // answer4: "A Tribe Called Quest"
    answer: "The Beastie Boys",
    gyphy:  "assets/images/beasties.gif"
 }, { //index 3
    question: "British pop group with notable members Simon LeBon and Nick Rhodes had hits 'Hungry Like a Wolf' and 'Rio'. Think you can name them?", 
    choices: ["The Police", "Spandau Ballet", "Wham!", "Duran Duran"],
    // answer2: "Spandau Ballet",
    // answer3: "Wham!",
    // answer4: "Duran Duran"
    answer: "Duran Duran",
    gyphy:  "assets/images/duranduran.gif"
 }, { //index 4
    question:  "Pioneers of New Wave music, this quartet, mostly consisting of art school grads, not only created interesting videos, but also one of the best films on concert.  Well known songs include 'Burning Down The House', 'And She War', and 'Wild, Wild Life. Who are they?",
    choices: ["They Might Be Giants", "The Cars", "Talking Heads", "The Cure"],
    // answer2: "The Cars",
    // answer3: "Talking Heads",
    // answer4: "The Cure"
    answer: "Talking Heads",
    gyphy:  "assets/images/talkingheads.gif"
 }, { //index 5
    question:  "The King of Pop, he created a 14 minute long music video that is a hit especialy around Halloween. Who is music royalty?",
    choices: ["Prince", "Michael Jackson", "David Bowie", "Bryan Adams"],
    // answer2: "Michael Jackson",
    // answer3: "David Bowie",
    // answer4: "Bryan Adams"
    answer: "Michael Jackson",
    gyphy:  "assets/images/thriller.gif"
 }
 ]
};


$("#starterbutton").on("click", startGame);
$(document).on("click", "#selections button", checkQuestion);
