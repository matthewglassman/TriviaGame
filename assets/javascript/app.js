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
    question1: "Known as 'The Boss' his hits of the 1980s included 'Born In The USA', 'Glory Days', and 'Dancing In The Dark'. He is...?",
    answer1: "Bon Jovi",
    answer2: "Bruce Springsteen",
    answer3: "Michael Jackson",
    answer4: "Barry White"
  }, { //index 1
    question2: "Her album 'She's So Unusual' skyrocketed to success and produced multiple hit singles like 'Girls Just Want To Have Fun' and the infamous 'She Bop'. Who was so unusual?", 
    answer1: "Madonna",
    answer2: "Janet Jackson",
    answer3: "Cyndi Lauper",
    answer4: "Tina Turner"
 }, { //index 2
    question3: "Originally a 4 person punk band from NYC, they whittled down to 3 members before earning their 'License to Ill' and becoming one of the longest-lived hip hop acts until the death of one of their founding members. Which trio that told us to fight for our right to party?",
    answer1: "Beastie Boys",
    answer2: "Run-DMC",
    answer3: "Naughty By Nature",
    answer4: "A Tribe Called Quest"
 }, { //index 3
    question4: "British pop group with notable members Simon LeBon and Nick Rhodes had hits 'Hungry Like a Wolf' and 'Rio'. Think you can name them?", 
    answer1: "The Police",
    answer2: "Spandau Ballet",
    answer3: "Wham!",
    answer4: "Duran Duran"
 }, { //index 4
    question5:  "Pioneers of New Wave music, this quartet, mostly consisting of art school grads, not only created interesting videos, but also one of the best films on concert.  Well known songs include 'Burning Down The House', 'And She War', and 'Wild, Wild Life. Who are they?",
    answer1: "They Might Be Giants",
    answer2: "The Cars",
    answer3: "Talking Heads",
    answer4: "The Cure"
 }, { //index 5
    question6:  "The King of Pop, he created a 14 minute long music video that is a hit especialy around Halloween?",
    answer1: "Prince",
    answer2: "Michael Jackson",
    answer3: "David Bowie",
    answer4: "Bryan Adams"
 }
 ]
};
// console.log(trivia.questionAnswer[2].answer1) = Beastie Boys