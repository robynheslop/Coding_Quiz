// create variables to start quiz button
var startButton = document.querySelector("#start-button");
// create variable to EXIT QUIZ button and move to highscores
var exitQuizButton = document.querySelector("#go-to-HS");
// create variable for button on HS screen to return home
var returnHomeButton = document.querySelector("#go-back-to-home");
// variable representing timer displayed in top rh corner
var quizTimer = document.querySelector("#quiz-timer");
// access to parent div for displaying "correct" or "wrong" after answers
var borderAboveLastResult = document.querySelector("#previous-result");
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
// create variable to access the display for "previous result" (correct or wrong)
var previousResult = document.querySelector("#lastResult");
// access to value displayed for countdown
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

// empty variable to loop through in question display
var j = 0;
// 
var correctAnswer = "";
// hgih scores start off empty
var highscores = [];
// create var display time - initially empty
var displayTime = "";
// starting time for quiz gives user 75 seconds
var startTime = 75;
// empty variable to record time when timer stops
var finalTime = "";
// array of objects that hold the questions, answers and correct answer
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
        correct_answer: "alert('Hello World')",
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
    borderAboveLastResult.style.display = "block";
    linkToHighScoresButton.style.display = "block";
    quizTimer.style.display = "block";
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
    linkToHighScoresButton.style.display = "none";
    quizTimer.style.display = "none";
}

// function to display homepage span
function showHome() {
    event.preventDefault();
    displayOpeningPage.style.display = "block";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    linkToHighScoresButton.style.display = "block";
    quizTimer.style.display = "block";
    clearTime()
}

// function to display score submission
function showScoreSubmission() {
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    enterHS.style.display = "block";
    linkToHighScoresButton.style.display = "block";
    quizTimer.style.display = "block";
}

// function to update display of time
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
    // create function to count down (runs every 1000 milliseconds)
    interval = setInterval(function() {
        // new variable to remove 1 from the current time displayed
    var now = currentTime.textContent - 1;
    // update current time display
    displayTime = now;
    renderTime();
    // if timer reaches 0 stop countdown 
    if (now == 0) {
        // stop timer
        clearInterval(interval);
        // bring the time displayed as final question answered to variable "final time"
        finalTime = displayTime;
        // stop displaying questions and display scoreboard submission form
        showScoreSubmission()
    }
    }, 1000);
    
    
}

// function to pass through the questions 
function populateQuestions() {
    // variable j used to loop through objects within array
    if (j < questions.length) {
        // update display on buttons - reflect the contents of objects in questions array
        displayedQuestion.textContent = questions[j].question;
        displayedOption1.textContent = questions[j].answer1;
        displayedOption2.textContent = questions[j].answer2;
        displayedOption3.textContent = questions[j].answer3;
        displayedOption4.textContent = questions[j].answer4;
        correctAnswer = questions[j].correct_answer;
    } else {
        // once all questions are answered - stop timer 
        clearInterval(interval); 
        // bring the time displayed as final question answered to variable "final time"
        finalTime = displayTime;
        showScoreSubmission()
        // reset variable used to loop (cleared for any future quizzes)
        j = 0;
    }
}

// function executed when user clicks on an answer button ** MUST UPDATE AS IT INCLUDES ANOTHER BUTTON RIGHT NOW *exit quiz button*
function clickQuestions() {
    // if they click on an answer button
    if (event.target.matches("button")) {
        // increase variable j, used to loop through the question objects in array
        j = j + 1;
        // run funtion to check if question correct
        markQuestions();
        // function populateQ will move to next question object in array 
        populateQuestions();
    }
    // if they click anywhere else nothing happens 
}

// compare if buttton click matches the right answer 
function markQuestions() {
    // if the correct answer is not clicked
    if (event.target.textContent != correctAnswer) {
        // 
        borderAboveLastResult.style.visibility = "visible";
        previousResult.textContent = "Wrong!";
        // run wrong answer function
        wrongAnswer();
    } else {
        borderAboveLastResult.style.visibility = "visible";
        previousResult.textContent = "Correct!";
    }
        
    // if correct answer is clicked, continue - no change to timer
}

function wrongAnswer() {
    // if user has more than 15 seconds remaining 
    if (currentTime.textContent > 15) {
        // create new variable defined by currented displayed time less 15 seconds
        var newScore = currentTime.textContent - 15;
        // update display time to reflect new score
        displayTime = newScore;
        // update display 
        renderTime();
    } else {
        // if they have 15 seconds or less left, set display time to 0
        displayTime = 0
        // update display
        renderTime();
    }
    
    
}

// function to store submitted initials and scores in local storage
function storeInfo() {
    localStorage.setItem("highscores", JSON.stringify(highscores));

}

// function to render information from local storage and pin in to high score list
function renderInfo() {
    x = 0;
    highScoreList.innerHTML = "";

    // accessing string stored in local storage, turning it back into array
    var storedHighScore = JSON.parse(localStorage.getItem("highscores"));
    // sort array by the scores (high score becomes obj 0, 2nd highests obj 1)
    storedHighScore.sort(function(a, b) {
        return b.score - a.score;
    });
    // create for loop the length of high score array
    for (k = 0; k < highscores.length; k++) {
        // create list new element 
        li = document.createElement("li");
        // access appropriate objects in variable and constuct display text to show data
        var publishName = storedHighScore[k].name;
        var publishScore = storedHighScore[k].score;
        var publishingTExt = (publishName + " - -  " + publishScore);
        // set the text element of list to publishing text var
        li.textContent = publishingTExt;
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

// event listened to start button
startButton.addEventListener("click", showQuestions);
// event listener to exit quiz button 
exitQuizButton.addEventListener("click", showHS);
// event listener to return home button
returnHomeButton.addEventListener("click", showHome);
// event listener to the persistent highscore button
linkToHighScoresButton.addEventListener("click", showHS);
// add event listener to any clicks on displayed questions
displayQuestions.addEventListener("click", clickQuestions);
// add event listener to submit button for highscore form
submitDataButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create variable for submitted initials 
    var HSText = submittedInitials.value.trim();
    // create variable for score from final time
    var score = finalTime;

    var q = 0
    // if no initials entered, ________________________________
    if (HSText === "") {
        return;
    } 
    

    // create object to store name and score
    var highscoresObject = {};
    highscoresObject.name = HSText;
    highscoresObject.score = score;

    console.log(highscoresObject)

    // push the object onto array called highscores
    highscores.push(highscoresObject);

    // empty initials for any future submissions
    HSText.value = "";
    submittedInitials.value= "";
    // empty form after data saved
    
    storeInfo();
    renderInfo();
});
// add event listener to clear high score button
clearHighScoresButton.addEventListener("click", emptyHS);