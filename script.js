/*
codingQuiz
when the user loads the page 
then they will see a welcome message,instructions, and start button

when the user clicks the start button
then we want to hide welcome message,instructions, and start button
then display first question
then display first answer buttons
then display timer and start countdown

when the user clicks an answer button
then check if answer is correct
	if the answer is not correct
	then display user feedback
	then check five seconds from the timer

	if the answer is correct
	then load next question and answer buttons

repeat last process until all questions are asked

when user answers last question 
then hide questions and answer buttons
then stop coutdown timer
then display user score (timer)
then display a form input to collect user inicials
then display submit button to save user inicials and score

when the user clicks submit button
then save inicials and score to localStorage


global data
array of questions and answers
current question index number
countdown timer number

*/

var myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 30/3?",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "c",
  },
];

var questions = [myQuestions];
var qi = 0; //questionIndex
var questionText = document.querySelector("#questionText");
var nextQuestion = document.querySelector("#nextBtn");
//display next question after clicking NEXT the button.
nextQuestion.addEventListener("click", () => {
  questionText.innerHTML = questions[qi].question;
  qi++;
  displayOptions();
});

const countdownEL = document.getElementById("countdown");
setInterval(updatedCountdown, 1000);
// is the function called updatedCountdown that takes seconds as argument:
function updatedCountdown() {
  let seconds = time % 60;
  countdownEL.innerHTML = `${seconds}`;
  time--;
  //if statement that executes it  when the counter is less than 0:
  if (time < 0) {
    clearInterval(startingMinutes);
    console.log("Ding! Time is UP");
  }
}

if (secondsLeft === 0) {
  clearInterval(timerInterval);
  sendMessage();
  6000;
}

function displayOptions() {
  answerText.innerHTML = ""; //empty and create new button each time
  var buttonA = document.createElement("button");
  buttonA.textContent = questions[qi].answer.a;
}
