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

// Create Submit Buttons
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startTrivia() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add ("correct");
        score++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-buttons");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    };
}

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = '';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "Block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length) {
        showQuestion(); 
    }
    else{
            showScore();
            }
        }

nextButton.addEventListener("click", ()=>
{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startTrivia();
    }
});

// Create time penalizations for wrong answers (take time away)


// Make a new quesiton come up when the sumbit button is clicked


// 0 out timer when all questions are answered


// Create "Game Over" message


// Create function to save score and initials