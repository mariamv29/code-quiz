//Setting DOM Elements
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var submitScoreBtn = document.getElementById("submit-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var scoreContainerElement = document.getElementById("scoreContainer");
var highscoreDiv = document.getElementById("highscore-div");
var highscoreInputName = document.getElementById("highscore-initials");
var scoreDisplay = document.getElementById("score");
var timeEl = document.getElementById("time");
var questionContainerElement = document.getElementById("question-container");

//Global variables
var timeLeft = 60;
var score = 0;
var timerInvertal;
var randomQuestions, currentQuestionIndex;
var correct;
var saveTask;
var highScores = JSON.parse(localStorage.getItem("high-scroes") || "{}");
console.log("    LOADED: ", highScores);

//quiz buttons event listener
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//Start Time
function countDown() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = timeLeft;

    if (timeLeft === 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);

      // game over or restart logic
    }
    timeLeft.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

//Adding function to startQuiz
function startQuiz() {
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  //Remove the class hide from it
  questionContainerElement.classList.remove("hide");

  countDown();
  setNextQuestion();
}

///Function Selecting the next questions
function setNextQuestion() {
  resetContainer();
  showQuestion(randomQuestions[currentQuestionIndex]);
}

//Iterate questions array
function showQuestion(question) {
  questionElement.innerText = question.question;
  //looping through different answers choices
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// //Resetting choice container
function resetContainer() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// function selectchoice ()
function selectAnswer(e) {
  var seletedButton = e.target;
  var correct = seletedButton.dataset.correct;
  // setStatusClass(document.classList, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.classList.add("hide");
    scoreContainerElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    console.log("questionContainerElement", questionContainerElement);
  }
}

//checking answer status
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

var saveHighScores = function () {
  var initials = highscoreInputName.value;
  console.log(initials);

  if (initials !== "") {
    highScores[initials] = timeLeft;

    localStorage.setItem("high-scroes", JSON.stringify(highScores));
    console.log("    SAVED: ", highScores);
    alert("We have saved your highscore");
  } else {
    alert("please add the initials");
  }
};

// var endGame = function () {
//   window.alert("the quiz has now ended. Let's see how you did!");
//   console.log(endGame);
// };

// Questions array

var questions = [
  {
    question: "What command do you use to 'push' your code to GitHub?",
    answers: [
      { text: "git init", correct: false },
      { text: "git origin push main", correct: true },
      { text: "git remote -v", correct: false },
      { text: "git pull", correct: false },
    ],
  },

  {
    question: "Which property does NOT belong in the CSS Box Model?",
    answers: [
      { text: "Main", correct: true },
      { text: "Margin", correct: false },
      { text: "Padding", correct: false },
      { text: "Content", correct: false },
    ],
  },
  {
    question: "What is Moment.js used for?",
    answers: [
      { text: "Adding different font to the app", correct: false },
      { text: "Dragging and dropping", correct: false },
      { text: "Date and time functionality", correct: true },
      { text: "Adding color to the app", correct: false },
    ],
  },
  {
    question: "What command do you use to checkout and create a new branch?",
    answers: [
      { text: "git clone", correct: false },
      { text: "git rm -fr", correct: false },
      { text: "git checkout -b", correct: true },
      { text: "git create branch", correct: false },
    ],
  },
];
