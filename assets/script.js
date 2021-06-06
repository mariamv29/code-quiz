//Setting DOM Elements
var buttonEl = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timeEl = document.getElementById("time");
var timeLeft = 60;
var randomQuestions, currentQuestionIndex;

//quiz buttons
buttonEl.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//Start Time
function countDown() {
  var timerInterval = setInterval(function () {
    timeEl.classList.remove("hide");
  timeEl.innerText = "Time Left:";
    timeEl.textContent = timeLeft;

    if (timeLeft === 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
    }
    timeLeft.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
  
}

//Adding function to startQuiz
function startQuiz() {
  buttonEl.classList.add("hide");
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
    buttonEl.innerText = "Restart";
    buttonEl.classList.remove("hide");
  }
}

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
