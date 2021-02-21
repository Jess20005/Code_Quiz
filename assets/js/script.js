var questions = [
  {
    questionTitle: "Commonly used data types DO NOT include:",
    questionChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    questionTitle:
      "The condition in an if/else statement is enclosed within___________.",
    questionChoices: [
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets",
    ],
    correctAnswer: "parenthesis",
  },
  {
    questionTitle: "Arrays in JavaScript can be used to store________.",
    questionChoices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all the above",
    ],
    correctAnswer: "all the above",
  },
  {
    questionTitle:
      "String values must be enclosed within ______________ when being assigned to variables.",
    questionChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    questionTitle:
      "A very useful tool used during development and debugging for printing content to debugger is:",
    questionChoices: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console log",
    ],
    correctAnswer: "console log",
  },
];

var score = 0;
var currentQuestion = 0;
var timeLeft = 0;
var timer;
var totalQuestions=questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");


//Load question and choices for user to select.
function loadQuestion (questionIndex){
  document.getElementById("#start");
  var q = questions[questionIndex];
  questionEl.textContent =((questionIndex + 1) + "." + questions);
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};
//Go through all questions, take user option and check if that is the correct answer. If answer is correct add to score, if user is wrong go to next question. If there are not more questions stop clock and display score.
function loadNextQuestion(){
  var userChoice = document.querySelector('input[type=radio]:checked');
  if(!userChoice){
      alert("Please select answer.");
      return;
  }
  var answer = userChoice.value;
  if(questions[currentQuestion].answer === answer){
      score += 1;
  }
  userChoice.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions){
      startBtn.style.visibility='hidden';
      nextBtn.style.visibility='hidden';
      quizContainer.style.display="none";
      result.style.display="";
      result.textContent = score;
      return;
  }
  loadQuestion(currentQuestion);
}

function startQuiz() {
  document.getElementById("#start");
    loadQuestion(currentQuestion);

  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
      return;
    }
  }, 1000);

  next();
}
