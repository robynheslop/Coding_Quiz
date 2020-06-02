// create variables to start quiz button
var startButton = document.querySelector("#start-button");
// create variable to EXIT QUIZ button and move to highscores
var exitQuizButton = document.querySelector("#go-to-HS");
// create variable for button on HS screen to return home
var returnHomeButton = document.querySelector("#go-back-to-home");
// variable representing timer displayed in top rh corner
var quizTimer = document.querySelector("#quiz-timer");
// create variables to control display of spans 
var displayOpeningPage = document.querySelector("#opening-page");
var displayQuestions = document.querySelector("#questions-displayed");
// link to score board 
var displayHighScores = document.querySelector("#highscores-displayed");
// link to high score submission
var enterHS = document.querySelector("#enter-HS-displayed");
// create variable to persistant HS button outside contianer
var linkToHighScoresButton = document.querySelector("#persistant-link-to-HS");
// create variable linking to button to clear high scores
var clearHighScoresButton = document.querySelector("#clear-high-scores");
// 
var submitDataButton = document.querySelector("#submitInitials");


var currentTime = document.querySelector("#current-time");

//create variable for submiting data button 
var submittedInitials = document.querySelector("#initials");
//link to submiting data button 
var highScoreList = document.querySelector("#high-scores-list");
// access text content of "questions" span
var displayedQuestion = document.querySelector("#currentQuestion");
var displayedOption1 = document.querySelector("#option1");
var displayedOption2 = document.querySelector("#option2");
var displayedOption3 = document.querySelector("#option3");
var displayedOption4 = document.querySelector("#option4");

var answer = document.querySelector("answerOptions");
// empty variable to loop through in question display
var j = 0;

var correctAnswer = "";

var highscores = [];

var displayTime = "";

var startTime = 75;

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


// FUNCTIONS 

// function to display question span
function showQuestions() {
    event.preventDefault();
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "block";
    displayHighScores.style.display = "none";
    linkToHighScoresButton.style.visibility = "visible";
    quizTimer.style.visibility = "visible";
    setTime();
    startTimer();
    populateQuestions();
}

// function to display highscore board span
function showHS() {
    event.preventDefault();
    enterHS.style.display = "none";
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "block";
    linkToHighScoresButton.style.visibility = "hidden";
    quizTimer.style.visibility = "hidden";
}

// function to display homepage span
function showHome() {
    event.preventDefault();
    displayOpeningPage.style.display = "block";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    linkToHighScoresButton.style.visibility = "visible";
    quizTimer.style.visibility = "visible";
    clearTime()
}

// function to display score submission
function showScoreSubmission() {
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    enterHS.style.display = "block";
    linkToHighScoresButton.style.visibility = "visible";
    quizTimer.style.visibility = "visible";
}

function renderTime() {
    currentTime.textContent = displayTime;
}

// display 75 seconds (utilised when quiz starts)
function setTime() {
    displayTime = startTime;
    renderTime();
}

// display 0 seconds in timer
function clearTime() {
    displayTime = 0;
    renderTime();
}

// function to countdown timer each second and update display 
function startTimer() {
    // create function to count down 
    interval = setInterval(function() {
        // new variable to remove 1 from the current time displayed
    var now = currentTime.textContent - 1;
    // update current time display
    displayTime = now;
    renderTime();
    // if timer reaches 0 stop countdown 
    if (now == 0) {
        clearInterval(interval);
        renderTime();
    }
    }, 1000);
    
    
}

// function to pass through the questions 
function populateQuestions() {

    for (i = 0; i < questions.length; i++) {
        if (j < questions.length) {
            displayedQuestion.textContent = questions[j].question;
            displayedOption1.textContent = questions[j].answer1;
            displayedOption2.textContent = questions[j].answer2;
            displayedOption3.textContent = questions[j].answer3;
            displayedOption4.textContent = questions[j].answer4;
            correctAnswer = questions[j].correct_answer;
        } else {
            // once all questions are answered - stop timer 
            clearInterval(interval);
            // update display to submitting score
            showScoreSubmission()
            j = 0;
            i = 0;
        }
    }
}

// function executed when user clicks on an answer button ** MUST UPDATE AS IT INCLUDES ANOTHER BUTTON RIGHT NOW
function clickQuestions() {
    if (event.target.matches("button")) {
        j = j + 1;
        console.log(j);
        markQuestions();
        populateQuestions();
    }
}

// compare if buttton click matches the right answer 
function markQuestions() {

    if (event.target.textContent != correctAnswer) {
        wrongAnswer()
    }
    console.log(event.target.textContent);
    console.log(correctAnswer);
}

function wrongAnswer() {
    var newScore = currentTime.textContent - 15;
    console.log(newScore);
    displayTime = newScore;
    renderTime();
}

// function to store submitted initials and scores in local storage
function storeInfo() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// function to render information from local storage and pin in to high score list
function renderInfo() {
    x = 0;
    highScoreList.innerHTML = "";

    for (k = 0; k < highscores.length; k++) {
        // accessing string stored in local storage, turning it back into array
        var storedHighScore = JSON.parse(localStorage.getItem("highscores"));
        // create list new element 
        li = document.createElement("li");
        // set the text element of list to match the appropriate item from the array
        li.textContent = storedHighScore[k];
        // set an attribute to the list item equal to current k value
        li.setAttribute("data-index", k);
        // append li item to ordered list of highscores 
        highScoreList.appendChild(li);
    }
    showHS();
}


// function to clear local storage, clear high score array and render to clear list of high scores 
function emptyHS() {
    localStorage.clear();
    highscores = [];
    renderInfo();
} 


startButton.addEventListener("click", showQuestions);
exitQuizButton.addEventListener("click", showHS);
returnHomeButton.addEventListener("click", showHome);
linkToHighScoresButton.addEventListener("click", showHS);
displayQuestions.addEventListener("click", clickQuestions);
submitDataButton.addEventListener("click", function(event) {
    event.preventDefault();
    var HSText = submittedInitials.value.trim();
    if (HSText === "") {
        return;
    }
    
    highscores.push(HSText);
    HSText.value = "";
    console.log(highscores)
    storeInfo();
    renderInfo();
});
clearHighScoresButton.addEventListener("click", emptyHS);