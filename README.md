# 🏆 JavaScript General Knowledge Quiz Game

A dynamic and interactive quiz game built using **JavaScript, HTML, and CSS**. This game challenges users with a series of general knowledge questions while keeping track of time and scores. Players can test their knowledge, compete for the highest score, and store their results in a local leaderboard.

## 🎯 Features

- 🕹️ **Interactive Gameplay** – Players answer multiple-choice questions within a countdown timer.  
- ⏳ **Timer-Based Challenge** – Each question reduces available time, and incorrect answers impose a penalty.  
- 🏆 **Score Tracking** – The remaining time at the quiz's end becomes the player's final score.  
- 📜 **Persistent Leaderboard** – Stores high scores locally using `localStorage`, allowing players to track their best attempts.  
- 🔄 **Reset & Replay** – Players can clear the leaderboard or restart the quiz anytime.

## 🛠️ Technologies Used

- **JavaScript** – Manages game logic, timing, and leaderboard storage.  
- **HTML** – Provides the structure for the quiz interface.  
- **CSS** – Enhances the design and user experience.  
- **LocalStorage API** – Saves player scores for leaderboard persistence.

## 📜 How to Play

1. Click **Start Quiz** to begin.  
2. Answer each multiple-choice question within the allotted time.  
3. Correct answers move to the next question, while incorrect answers reduce the timer.  
4. The game ends when all questions are answered or time runs out.  
5. Enter your initials to save your score on the **Leaderboard**.  
6. View high scores and replay as many times as you like!

### Manual Testing Steps
| Testcase                          | Expected Result                                                       | Test Result |
|-----------------------------------|-----------------------------------------------------------------------|-------------|
| Open the Quiz                     | The Quiz loads with the correct template and data                     | ✅ PASS          |
| Start Quiz                        | Start Quiz button is successful, quiz appears for user                | ✅ PASS          |
| User clicks question              | Correct answer is chose and incorrect answer time will be penlized    | ✅ PASS          |
| Timer                             | Timer runs down from 60seconds and if answer is incorrect, time effect| ✅ PASS          |
| Enter user initials               | Pop up message will appear if user doesnt enter details               | ✅ PASS          |
| View Highscores                   | View Highscores link in top left of page takes you to leaderboard     | ✅ PASS          |
|Go Back                            | Go back button takes you back to start of quiz                        | ✅ PASS          |
|Clear Highscores                   | Clear high scores will clear away all high scores on the page         | ✅ PASS          |
| Email Link                        | Click the link and it takes you to mail options                        | ✅ PASS          |
|                              
| **Testing**                       |                                                                       |             |
| HTML                              | HTML Validator Testing Passed                                         | ✅ PASS          |
| CSS                               | CSS Validator Testing Passed                                          | ✅ PASS          |
| Javascript                        | Javascript Validator Testing Passed                                   | ✅ PASS          |


## 🚀 Installation & Usage

1. **Clone the repository**  
   ```sh
   git clone https://github.com/olutobi1996/JSQuiz.git