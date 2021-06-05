//Setting DOM Elements
var buttonEl = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

var randomQuestions, currentQuestionIndex;

buttonEl.addEventListener("click", startQuiz);

//Adding function to startQuiz
function startQuiz() {
  buttonEl.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  //Remove the class hide from it
  questionContainerElement.classList.remove("hide");

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
      button.dataset.correct - answer.correct;
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
  var seletedButton = e.target
  var correct = seletedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBUttonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct) {
    element.classList.add('correct') 
  } else {
    element.classList.add('wrong')
  }
}


function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
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
];
// {
//   question: "Which property does NOT belong in the CSS Box Model?",
//   choices: ["Main", "Margin", "Padding", "Border", "Content"],
//   correctAnswer: [1],
// },
// {
//   question: "What is Moment.js used for?",
//   choices: [
//     "Adding different font to the app",
//     "Dragging and dropping",
//     "Date and time functionality",
//     "Adding color to the app",
//   ],
//   correctAnswer: [3],
// },
// {
//   question: "What command do you use to checkout and create a new branch?",
//   choices: [
//     "git clone",
//     "git rm -fr",
//     "git checkout -b",
//     "git create branch",
//     "git branch",
//   ],
//   correctAnswer: [3],
// },
