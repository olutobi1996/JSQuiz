// Stores quiz questions, categories, answer choices, correct answers, and hints.
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
    {
        category: "Science",
        questionText: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au",
        hint: "It comes from the Latin word 'Aurum'."
      },
      {
        category: "Geography",
        questionText: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
        hint: "It covers more than 60 million square miles."
      },
      {
        category: "History",
        questionText: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington",
        hint: "He appears on the US one-dollar bill."
      },
      {
        category: "Technology",
        questionText: "What does 'CPU' stand for in computing?",
        options: ["Central Processing Unit", "Computer Power Unit", "Central Peripheral Unit", "Core Processing Utility"],
        answer: "Central Processing Unit",
        hint: "It's often called the 'brain' of the computer."
      }
    ];

// Game Variables 
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

// Game event listners 
document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#hint-button").addEventListener("click", showHint);
document.querySelector("#leaderboard-button").addEventListener("click", showLeaderboard);
document.querySelector("#leaderboard-button").style.cursor = "pointer";

document.querySelector("#options-container").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      checkAnswer(event.target.textContent);
    }
  });
  
// Hides the start screen, displays the quiz container.
  function startQuiz() {
    document.querySelector("#start-screen").style.display = "none";
    document.querySelector("#quiz-container").style.display = "block";
    displayQuestion();
    startTimer();
  }

  // Counts down from 60 seconds
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      document.querySelector("#timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  // Fetches the current question. 
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

  // Checks if the selected answer matches the correct one, if correct add 10s, if not -5s
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

  // 
  function showHint() {
    let hint = questions[currentQuestionIndex].hint;
    document.querySelector("#hint").textContent = `Hint: ${hint}`;
  }

  // Stops the timer. Displays the final score. 
  function endQuiz() {
    clearInterval(timerInterval);
    document.querySelector("#quiz-container").style.display = "none";
    document.querySelector("#end-screen").style.display = "block";
    document.querySelector("#final-score").textContent = `Your Score: ${score}`;
    saveScore();
  }

  // Saves player initials and score to localStorage.
  function saveScore() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let initials;
    do {
      initials = prompt("Enter your initials:");
      if (!initials) {
        alert("Please enter your initials to save your score.");
      }
    } while (!initials);
    
    leaderboard.push({ initials, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }

  // Fetches and displays the leaderboard, sorts scores
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

// Reset Game and Return to Start Screen
function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    clearInterval(timerInterval);
    
    // Hide all screens
    document.querySelector("#end-screen").style.display = "none";
    document.querySelector("#leaderboard-container").style.display = "none";
    
    // Show start screen
    document.querySelector("#start-screen").style.display = "block";
  }
  
  // Ensure both restart buttons work correctly
  document.querySelector("#restart-button").addEventListener("click", resetGame);
  document.querySelector("#back-to-start-button").addEventListener("click", resetGame);
  