// Beginning of Code
// Create Questions

const questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        answers: [
            {text: "Strings", correct: false},
            {text: "Booleans", correct: false},
            {text: "Alerts", correct: true},
            {text: "Numbers", correct: false},
        ]
    },
    {
        question: "The condition in an if / else statement is inclosed within _____:", 
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false},
        ]   
    },
    {
        question: "Arrays in JS can be used  to store _____:", 
        answers: [
            {text: "Numbers and Strings", correct: false},
            {text: "Other Arrays", correct: false},
            {text: "Boolenas", correct: false},
            {text: "All of the above", correct: true},
        ]   
    },
    {
        question: "String values muct be enclosed within _____ when being assigned to vatiables:", 
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parentheses", correct: false},
        ]   
    },
        { 
            question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
            answers: [
            {text: "JavaScript", correct: false},
            {text: "Terminal / Bash", correct: false},
            {text: "For Loops", correct: false},
            {text: "console.log", correct: true},
        ]   
    }
];

// Declaring question variables
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


//Calling question variables
function startQuiz() { 
    console.log ("Welcome to the Game!");
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.classList.add("answer-buttons");
    if(answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button)
  });
}

//Tells the webpage which answer is correct or incorrect
function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";


    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }

    // disabling buttons afer making a selection
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

//Resets selection for the next question
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
    };
}

//End of game, shows score and asks to play again
function showScore(){
    resetState();
    questionElement.innerHTML = '';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "Block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion(); 
    }
    else{
            showScore();
            }
        }
//Next button funtionality
nextButton.addEventListener("click", ()=>
{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

//Starts the quiz
startQuiz();

// Declaring Time Variables
let initialTime = 60;
const timePenalty = 5;
let RemainingTime = initialTime;

// Calling the Variable to deduct the time
function deductTime() {
RemainingTime -= timePenalty;
displayTime();
}
//making timePenalty for wrong answers
function selectAnswer(event) {
    const selectBtn = event.target;
    const isCorrect = selectBtn.dataset.correct === 'true';

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
        // Add time penalty
        RemainingTime += timePenalty;
    }
    else {
        selectBtn.classList.add("incorrect");
        // Subtract time penalty
        RemainingTime -= timePenalty;
    }

    // disabling buttons afer making a selection
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Displaying the Time
function displayTime() {
    const timeDisplay = document.getElementById("timeRemaining");
    timeDisplay.textContent = 'timeRemaining: ' + ' ' + RemainingTime + ' seconds';
    // const timerElement = document.getElementById("timer");
    // timerElement.textContent = RemainingTime;
}

//Functionality for the timer
function startTimer() {
   const timerInterval = setInterval(function () {
        RemainingTime--;
        displayTime();
        // timeDisplay.textContent = RemainingTime;
        if (RemainingTime === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

startTimer();

// Create "Game Over" message - browser popup
function endQuiz() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to handle form submission
function saveScore(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const initials = document.getElementById('initials').value;
    const score = document.getElementById('score').value;
    // Save the initials and score to local storage or perform other actions as needed
    console.log('Initials:', initials, 'Score:', score);
    closePopup(); // Close the popup after saving the data
}

// Declaring global variables and functions

document.addEventListener('DOMContentLoaded', function() {
    // Event listener setup
    const scoreForm = document.getElementById('score-form');
    scoreForm.addEventListener('submit', saveScore);

    // Other initialization code
    startQuiz(); // Assuming you have an initialization function like this
    const closeButton = document.getElementById('close-popup');
    closeButton.addEventListener('click', closePopup);
});

// End of game, shows score and asks to play again
function showScore() {
    resetState();
    questionElement.innerHTML = '';
    nextButton.style.display = 'block';
    endQuiz(); // Display the popup form
}

// Next button functionality
nextButton.addEventListener('click', handleNextButton);

// Retrieve scores and initials from local storage
const savedScores = JSON.parse(localStorage.getItem('scores')) || [];

// Select the container element where you want to display scores and initials
const scoresContainer = document.getElementById('scores-container');

// Loop through the saved scores and initials and create HTML elements to display them
savedScores.forEach(score => {
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `Initials: ${score.initials}, Score: ${score.score}`;
    scoresContainer.appendChild(scoreElement);
});