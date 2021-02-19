//WHat do expect to happen when we click on start button:
//1-Remove game description
//2-Display first question and answer choices
var questionIndex = 0;
var titleEl = document.getElementById("title");
var startButton = document.getElementById("button");
//What do we expect when we click on the answer choice?
//1- Check to see if the answer is correct
//1.1- What do we do if the answer is not correct? Then penalize the user 15 seconds
//1.2- IF the answer is correct console log answer is correct
//2-Display next question
//2.1 Repeat process -check to see if answer is correct line 6

function startQuiz() {
  //1-Remove game description
  // set a class attribute to the description
  //2-Display first question and answer choices
  displayQuestion();
}
// startButton.onclick = startQuiz;

function displayQuestion() {
  //get the right question and display to the screen
  //1- Check to see if the answer is correct
  //1.1- What do we do if the answer is not correct? Then penalize the user 15 seconds
  //1.2- IF the answer is correct console log answer is correct
  var currentQuestion = questions[questionIndex];
  titleEl.textContent = currentQuestion.questionTitle;

  // get the element for the html file
  
}

var questions = [
  {
    questionTitle: "What is 2*3?",
    questionChoices: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    questionTitle: "What is 2*3?",
    questionChoices: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    questionTitle: "What is 2*3?",
    questionChoices: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    questionTitle: "What is 2*3?",
    questionChoices: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    questionTitle: "What is 2*3?",
    questionChoices: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
];

