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

  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      document.querySelector("#timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
      endQuiz();
      return;
    }
  
    let question = questions[currentQuestionIndex];
    document.querySelector("#question-text").textContent = question.questionText;
    document.querySelector("#category").textContent = `Category: ${question.category}`;
  
    let optionsContainer = document.querySelector("#options-container");
    optionsContainer.innerHTML = "";
  
    question.options.forEach(option => {
      let button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      optionsContainer.appendChild(button);
    });
  }

  function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score += 10;
      document.querySelector("#feedback").textContent = "Correct! 🎉";
    } else {
      timeLeft -= 5;
      document.querySelector("#feedback").textContent = "Wrong! ⛔";
    }
    setTimeout(() => {
      document.querySelector("#feedback").textContent = "";
      currentQuestionIndex++;
      displayQuestion();
    }, 1000);
  }

  function showHint() {
    let hint = questions[currentQuestionIndex].hint;
    document.querySelector("#hint").textContent = `Hint: ${hint}`;
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    document.querySelector("#quiz-container").style.display = "none";
    document.querySelector("#end-screen").style.display = "block";
    document.querySelector("#final-score").textContent = `Your Score: ${score}`;
    saveScore();
  }

  function saveScore() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let initials = prompt("Enter your initials:");
    leaderboard.push({ initials, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }

  function showLeaderboard() {
    document.querySelector("#start-screen").style.display = "none";
    document.querySelector("#leaderboard-container").style.display = "block";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.sort((a, b) => b.score - a.score);
    let leaderboardList = document.querySelector("#leaderboard-list");
    leaderboardList.innerHTML = "";
    leaderboard.forEach(entry => {
      let listItem = document.createElement("li");
      listItem.textContent = `${entry.initials} - ${entry.score}`;
      leaderboardList.appendChild(listItem);
    });
  }

  // Reset Game
function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    document.querySelector("#end-screen").style.display = "none";
    document.querySelector("#start-screen").style.display = "block";
  }
  
  document.querySelector("#restart-button").addEventListener("click", resetGame);