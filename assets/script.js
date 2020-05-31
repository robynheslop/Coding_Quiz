// create variables to 3 buttons 
var startButton = document.querySelector("#start-button");
var exitQuizButton = document.querySelector("#go-to-HS");
var returnHomeButton = document.querySelector("#go-back-to-home");
// create variables to control display of spans 
var displayOpeningPage = document.querySelector("#opening-page");
var displayQuestions = document.querySelector("#questions-displayed");
var displayHighScores = document.querySelector("#highscores-displayed");
var enterHS = document.querySelector("#enter-HS-displayed");
// create variable to persistant HS button outside contianer
var linkToHighScores = document.querySelector("#persistant-link-to-HS");

// access text content of "questions" span
var displayedQuestion = document.querySelector("#currentQuestion");
var displayedOption1 = document.querySelector("#option1");
var displayedOption2 = document.querySelector("#option2");
var displayedOption3 = document.querySelector("#option3");
var displayedOption4 = document.querySelector("#option4");

var answer = document.querySelector("answerOptions");
var j = 0;


var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Alerts",
        answer4: "Numbers",
        correct_answer: "Alerts",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<script></script>",
        answer2: "<javascript></javascript>",
        answer3: "<scripting></scripting>",
        answer4: "<js></js>",
        correct_answer: "<script></script>",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answer1: "alertBox('Hello World')",
        answer2: "alert('Hello World')",
        answer3: "msgBox('Hello World')",
        answer4: "msg('Hello World')",
        correct_answer: "<script></script>",
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer1: "if i <> 5",
        answer2: "if (i !=5)",
        answer3: "if (i <> 5)",
        answer4: "if i =! 5 then",
        correct_answer: "if (i !=5)",
    },
    {
        question: "Arrays in Javascript can be used to store...",
        answer1: "numbers and strings.",
        answer2: "others arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct_answer: "all of the above",
    }
];


function showQuestions() {
    event.preventDefault();
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "block";
    displayHighScores.style.display = "none";
    linkToHighScores.style.visibility = "visible";
    populateQuestions()
}

function showHS() {
    event.preventDefault();
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "block";
    linkToHighScores.style.visibility = "hidden";
}

function showHome() {
    event.preventDefault();
    displayOpeningPage.style.display = "block";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    linkToHighScores.style.visibility = "visible";
}

function populateQuestions() {
    
    for (i = 0; i < questions.length; i++) {
        if (j < questions.length) {
            displayedQuestion.textContent = questions[j].question;
            displayedOption1.textContent = questions[j].answer1;
            displayedOption2.textContent = questions[j].answer2;
            displayedOption3.textContent = questions[j].answer3;
            displayedOption4.textContent = questions[j].answer4;
        } else {
            displayOpeningPage.style.display = "none";
            displayQuestions.style.display = "none";
            displayHighScores.style.display = "none";
            enterHS.style.display = "block";
            linkToHighScores.style.visibility = "hidden";
        }
        
       
    }    
}

function clickQuestions() {
    if (event.target.matches("button")) {
        j = j + 1;
        console.log(j);
        markQuestions();
        populateQuestions();
    }
}

function markQuestions() { 

}


startButton.addEventListener("click", showQuestions);
exitQuizButton.addEventListener("click", showHS);
returnHomeButton.addEventListener("click", showHome);
linkToHighScores.addEventListener("click", showHS);
displayQuestions.addEventListener("click", clickQuestions);