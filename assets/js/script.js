var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within___________.",
    answerChoices: ["quotes","parenthesis", "curly brackets","square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store________.",
    answerChoices: ["numbers and strings","other arrays","booleans","all the above"],
    correctAnswer: "all the above",
  },
  {
    question:
      "String values must be enclosed within ______________ when being assigned to variables.",
    answerChoices: ["quotes", "commas", "curly brackets", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to debugger is:",
    answerChoices: ["terminal/bash", "JavaScript", "console log", "for loops"],
    correctAnswer: "console log",
  },
];

var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var highscore = document.getElementById("highscore");
var answerChoices = document.getElementById("answerChoices");
var questionIndex = 0;

//WHat do expect to happen when we click on start button:
//1-Remove game description
//2-Display first question and answer choices
var questionStatus = document.getElementById("questionStatus");
questionStatus.style.visibility = "hidden";

var timer;
var timeLeft = 0;
var score = 20;
var lastQuestionIndex = questions.length - 1;
startButton.onclick = startQuiz;

function startQuiz() {
  // console.log("This is coming from start quiz")
  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  if (timeLeft <= timer) {
    timeLeft.innerHTML = timeLeft;
    timeLeft++;
  } else {
    timeLeft = 0;
    // wrongAnswer();
    if (questionIndex < lastQuestionIndex) {
      questionIndex++;
      displayQuestion();
    } else {
      clearInterval(timer);
      getScore();
    }
  }
  displayQuestion();
}

timer= setInterval(startQuiz,1000);

function showStatusText(status) {
  questionStatus.style.visibility = "visible";
  var elText = questionStatus.querySelector("span");
  elText.innerText = status;
}

function displayQuestion() {
  //get the right question and display to the screen
  var currentQuestion = questions[questionIndex];
  // console.log(currentQuestion)

  var titleElement = document.getElementById("questionTitle");
  titleElement.textContent = currentQuestion.question;

  answerChoices.textContent = "";

  for (var i = 0; i < currentQuestion.answerChoices.length; i++) {
    var choiceElement = document.createElement("button");
    choiceElement.onclick = handleChoiceClick;
    choiceElement.textContent = currentQuestion.answerChoices[i];
    choiceElement.setAttribute("value", currentQuestion.answerChoices[i]);
    answerChoices.appendChild(choiceElement);
  }
}

function handleChoiceClick() {
  // check if the click answer is corret
  // go to the next question - done
  if (this.value === questions[questionIndex].correctAnswer) {
    showStatusText("Correct!");
    // console.log("Correct!")
  } else showStatusText("Incorrect!");
  // console.log("Incorrect!")

  questionIndex++;
  displayQuestion();
}
