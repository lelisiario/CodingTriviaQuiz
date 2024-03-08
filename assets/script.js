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

    currentQuestion.Answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
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

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add ("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
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
    questionElement.innerHTML.HTML = 'Your Score ${score} out of ${questions.length}|';
    nextButton.innerHRTML = "Play Again";
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
})



startTrivia();



// Create time penalizations for wrong answers (take time away)


// Make a new quesiton come up when the sumbit button is clicked


// 0 out timer when all questions are answered


// Create "Game Over" message


// Create function to save score and initials