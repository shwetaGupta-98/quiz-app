const quizData = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS"],
    correct: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    choices: ["Python Script", "React", "Angular"],
    correct: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    choices: ["//", "<!--", "#"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  resetState();
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  
  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(index));
    choicesEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  resultEl.textContent = "";
  choicesEl.innerHTML = "";
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const buttons = choicesEl.querySelectorAll("button");

  buttons.forEach((btn, idx) => {
    if (idx === q.correct) {
      btn.style.backgroundColor = "#c8e6c9"; // green
    } else if (idx === index) {
      btn.style.backgroundColor = "#ffcdd2"; // red
    }
    btn.disabled = true;
  });

  if (index === q.correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
}

loadQuestion();
