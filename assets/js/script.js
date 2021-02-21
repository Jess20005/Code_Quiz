var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    questionChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    title:"The condition in an if/else statement is enclosed within___________.",
    questionChoices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    title: "Arrays in JavaScript can be used to store________.",
    questionChoices: ["numbers and strings", "other arrays", "booleans", "all the above"],
    correctAnswer: "all the above",
  },
  {
    title:"String values must be enclosed within ______________ when being assigned to variables.",
    questionChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    title:"A very useful tool used during development and debugging for printing content to debugger is:",
    questionChoices: [ "JavaScript", "terminal/bash","for loops","console log",],
    correctAnswer: "console log",
  },
];

var score = 20;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//1-Start quiz and timer 
function startQuiz() {
 
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

//end game and final display screen
function endGame() {
  clearInterval(timer);
  
  var quizContent = `
  <h2>All done!</h2>
  <h3>Your score is ` + score + ` .</h3>
  Enter initals: <input type="text" id="name" placeholder=""> 
  <button onclick="setScore()">Submit</button>`;
  
  document.getElementById("quizBody").innerHTML = quizContent;
}

//local storage for highscore
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById("name").value);
  getScore();
}

function getScore() {
  var quizContent = `
  <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
  <h1>` + localStorage.getItem("highscore") + `</h1><br> 
  
  <button onclick="clearScore()">Clear score!</button><button onclick="restartQuiz()">Play Again!</button>
  
  `; 
  document.getElementById("quizBody").innerHTML = quizContent;
}

function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");
  
  restartQuiz();
}

function restartQuiz() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;
  
  document.getElementById("timeLeft").innerHTML = timeLeft;
  
}

//deducts 15 seconds from the timer if user chooses an incorrect answer
function incorrect() {
  timeLeft -= 15;
  next();
}

//increases the score by 20points if the user chooses the correct answer
function correct() {
  score += 20;
  next();
}

//loops through the questions
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length-1) {
    
    endGame();
    return;
  }
  var quizContent = questions[currentQuestion].title 

  for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].questionChoices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].questionChoices[buttonLoop]);
    if (questions[currentQuestion].questionChoices[buttonLoop] == questions[currentQuestion].questionAnswer) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
  }
  
  
  document.getElementById("quizBody").innerHTML = quizContent;
}

