// Quiz Questions
const questions = [
    {
      category: "Sports",
      questionText: "What football team won the World Cup in 1966?",
      options: ["Brazil", "England", "France", "Italy"],
      answer: "England",
      hint: "It's a European team."
    },
    {
      category: "Olympics",
      questionText: "How many colored rings are in the Olympic Flag?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "Five",
      hint: "Think of the continents."
    },
    {
      category: "Movies",
      questionText: "In 'The Lion King', what animals trample Mufasa?",
      options: ["Sheep", "Hyenas", "Wildebeests", "Bears"],
      answer: "Wildebeests",
      hint: "They are large herd animals."
    },
    {
      category: "Movies",
      questionText: "Who directed the film 'Pulp Fiction'?",
      options: ["Daniel Day-Lewis", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
      answer: "Quentin Tarantino",
      hint: "Famous for nonlinear storytelling."
    },
  ];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#hint-button").addEventListener("click", showHint);
document.querySelector("#leaderboard-button").addEventListener("click", showLeaderboard);

document.querySelector("#options-container").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      checkAnswer(event.target.textContent);
    }
  });
  
  function startQuiz() {
    document.querySelector("#start-screen").style.display = "none";
    document.querySelector("#quiz-container").style.display = "block";
    displayQuestion();
    startTimer();
  }
  