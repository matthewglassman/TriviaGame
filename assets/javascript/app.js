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
  { //index0
    question: "Known as 'The Boss' his hits of the 1980s included 'Born In The USA', 'Glory Days', and 'Dancing In The Dark'. He is...?",
    choices: ["Bon Jovi", "Bruce Springsteen", "Michael Jackson", "Barry White"],
    // answer2: "Bruce Springsteen",
    // answer3: "Michael Jackson",
    // answer4: "Barry White"
    answer: "Bruce Springsteen"
  }, { //index 1
    question: "Her album 'She's So Unusual' skyrocketed to success and produced multiple hit singles like 'Girls Just Want To Have Fun' and the infamous 'She Bop'. Who was so unusual?", 
    choices: ["Madonna", "Janet Jackson", "Cyndi Lauper", "Tina Turner"],
    // answer2: "Janet Jackson",
    // answer3: "Cyndi Lauper",
    // answer4: "Tina Turner"
    answer: "Cyndi Lauper" 
 }, { //index 2
    question: "Originally a 4 person punk band from NYC, they whittled down to 3 members before earning their 'License to Ill' and becoming one of the longest-lived hip hop acts until the death of one of their founding members. Which trio that told us to fight for our right to party?",
    choices: ["The Beastie Boys", "Run-DMC", "Naughty By Nature", "A Tribe Called Quest"],
    // answer2: "Run-DMC",
    // answer3: "Naughty By Nature",
    // answer4: "A Tribe Called Quest"
    answer: "The Beastie Boys"
 }, { //index 3
    question: "British pop group with notable members Simon LeBon and Nick Rhodes had hits 'Hungry Like a Wolf' and 'Rio'. Think you can name them?", 
    choices: ["The Police", "Spandau Ballet", "Wham!", "Duran Duran"],
    // answer2: "Spandau Ballet",
    // answer3: "Wham!",
    // answer4: "Duran Duran"
    answer: "Duran Duran"
 }, { //index 4
    question:  "Pioneers of New Wave music, this quartet, mostly consisting of art school grads, not only created interesting videos, but also one of the best films on concert.  Well known songs include 'Burning Down The House', 'And She War', and 'Wild, Wild Life. Who are they?",
    choices: ["They Might Be Giants", "The Cars", "Talking Heads", "The Cure"],
    // answer2: "The Cars",
    // answer3: "Talking Heads",
    // answer4: "The Cure"
    answer: "Talking Heads"
 }, { //index 5
    question:  "The King of Pop, he created a 14 minute long music video that is a hit especialy around Halloween. Who is music royalty?",
    choices: ["Prince", "Michael Jackson", "David Bowie", "Bryan Adams"],
    // answer2: "Michael Jackson",
    // answer3: "David Bowie",
    // answer4: "Bryan Adams"
    answer: "Michael Jackson"
 }
 ]
};
for (var i=0; i < trivia.questionAnswer.length; i++){
  var question = trivia.questionAnswer[i];
  console.log(question);
    $("#ask-question").html(question.question);
    for (var n=0; n < question.choices.length; n++){
      var choice = question.choices[n];
    console.log(choice);
    $("#selections").append(choice);

    }
}
  
  
//Bring timer functionality into the for loop.
//};