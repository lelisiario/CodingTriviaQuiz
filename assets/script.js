// Beginning of Code
// Create Questions

const questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        Answers: [
            {text: "Strings", correct: False},
            {text: "Booleans", correct: False},
            {text: "Alerts", correct: True},
            {text: "Numbers", correct: False},
        ]
    },
    {
        question: "The condition in an if / else statement is inclosed within _____:", 
        Answers: [
            {text: "quotes", correct: False},
            {text: "curly brackets", correct: False},
            {text: "parentheses", correct: True},
            {text: "square brackets", correct: False},
        ]   
    },
    {
        question: "Arrays in JS can be used  to store _____:", 
        Answers: [
            {text: "Numbers and Strings", correct: False},
            {text: "Other Arrays", correct: False},
            {text: "Boolenas", correct: False},
            {text: "All of the above", correct: true},
        ]   
    },
    {
        question: "String values muct be enclosed within _____ when being assigned to vatiables:", 
        Answers: [
            {text: "commas", correct: False},
            {text: "curly brackets", correct: False},
            {text: "quotes", correct: True},
            {text: "parentheses", correct: False},
        ]   
    },
        { 
            question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
            Answers: [
            {text: "JavaScript", correct: False},
            {text: "Terminal / Bash", correct: False},
            {text: "For Loops", correct: False},
            {text: "console.log", correct: True},
        ]   
    }
];

// Create Submit Buttons
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("answer-buttons");






// Create time penalizations for wrong answers (take time away)


// Make a new quesiton come up when the sumbit button is clicked


// 0 out timer when all questions are answered


// Create "Game Over" message


// Create function to save score and initials