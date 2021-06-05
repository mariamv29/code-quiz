//Setting DOM Elements
var buttonEl = document.getElementById("start-btn");
var questionsContainerElement = document.getElementById("question-container");
var randomQuestions, currentQuestionsIndex;
var questionsElement = document.getElementById("questions");
var answerButtonsElements = document.getElementById("answer-buttons");

buttonEl.addEventListener("click", startQuiz);

//Adding function to startQuiz
function startQuiz() {
  console.log("Started");
  buttonEl.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  //Remove the class hide from it
  questionsContainerElement.classList.remove("hide");
  currentQuestionsIndex = 0;
}

///Function Selecting answer

// Questions array
var questions = [
  {
    question: "What command do you use to 'push' your code to GitHub?",
    choices: ["git init", "git origin push main", "git remote -v", "git pull"],
    correctAnswer: [2],
  },
  {
    question: "Which property does NOT belong in the CSS Box Model?",
    choices: ["Main", "Margin", "Padding", "Border", "Content"],
    correctAnswer: [1],
  },
  {
    question: "What is Moment.js used for?",
    choices: [
      "Adding different font to the app",
      "Dragging and dropping",
      "Date and time functionality",
      "Adding color to the app",
    ],
    correctAnswer: [3],
  },
  {
    question: "What command do you use to checkout and create a new branch?",
    choices: [
      "git clone",
      "git rm -fr",
      "git checkout -b",
      "git create branch",
      "git branch",
    ],
    correctAnswer: [3],
  },
];
