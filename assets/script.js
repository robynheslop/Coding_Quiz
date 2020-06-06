// Large buttons
// create variables to start quiz button
var startButton = document.querySelector("#start-button");
// create variable to EXIT QUIZ button and move to highscores
var exitQuizButton = document.querySelector("#go-to-HS");
// create variable for button on HS screen to return home
var returnHomeButton = document.querySelector("#go-back-to-home")
// create variable linking to button to clear high scores
var clearHighScoresButton = document.querySelector("#clear-high-scores");

// top row elements
// create variable to persistant HS button outside contianer
var linkToHighScoresButton = document.querySelector("#persistant-link-to-HS");
// variable representing timer displayed in top rh corner
var quizTimer = document.querySelector("#quiz-timer");

// Display blocks 
// link to "wrong/correct" display div"
var borderAboveLastResult = document.querySelector("#previous-result");
// link to home page div
var displayOpeningPage = document.querySelector("#opening-page");
// link to question display div
var displayQuestions = document.querySelector("#questions-displayed");
// link to high score list div
var displayHighScores = document.querySelector("#highscores-displayed");
// link to high score submission div
var enterHS = document.querySelector("#enter-HS-displayed");

// other links in HTML
// access to time value displayed for countdown
var currentTime = document.querySelector("#current-time");
// create link to "answer options" - div encompassing all buttons to click + answer q's
var answerButtonTargets = document.querySelector("#answer-buttons");
// link to access text content of "questions" heading2 and buttons
var displayedQuestion = document.querySelector("#currentQuestion");
var displayedOption1 = document.querySelector("#option1");
var displayedOption2 = document.querySelector("#option2");
var displayedOption3 = document.querySelector("#option3");
var displayedOption4 = document.querySelector("#option4");
// create variable to access the display for "previous result" (correct or wrong text)
var previousResultText = document.querySelector("#lastResult");
// link to submiting data button 
var submitDataButton = document.querySelector("#submitInitials");
// create variable linking to submitted initials
var submittedInitials = document.querySelector("#initials");
// link to ORDERED list high scores 
var highScoreList = document.querySelector("#high-scores-list");

// New variables
// empty variable to loop through in question display
var j = 0;
// empty variable to hold the current correct answer
var correctAnswer = "";
// high scores var start off empty
var highscores = [];
// create var display time - initially empty
var displayTime = "";
// empty variable to record time when timer stops
var finalTime = "";
// array of objects that hold the questions, answers and correct answer
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        A1: "Strings",
        A2: "Booleans",
        A3: "Alerts",
        A4: "Numbers",
        correct_answer: "Alerts",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        A1: "numbers and strings.",
        A2: "other arrays.",
        A3: "booleans.",
        A4: "all of the above",
        correct_answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        A1: "commas",
        A2: "curly brackets",
        A3: "quotes",
        A4: "parentheses",
        correct_answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        A1: "JavaScript",
        A2: "terminal/bash",
        A3: "for loops",
        A4: "console.log",
        correct_answer: "console.log",
    },
    {
        question: "The condition in an if/else statement is enclosed withing ____.",
        A1: "parentheses",
        A2: "curly brackets",
        A3: "quotes",
        A4: "square brackets",
        correct_answer: "parentheses",
    }
];


// FUNCTIONS 

// function to display question span
function showQuestions() {
    event.preventDefault();
    // no display
    displayOpeningPage.style.display = "none";
    displayHighScores.style.display = "none";
    // block display
    displayQuestions.style.display = "block";
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
    renderInfo();
    // no display
    enterHS.style.display = "none";
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    linkToHighScoresButton.style.display = "none";
    quizTimer.style.display = "none";
    // block display
    displayHighScores.style.display = "block";
    // ensure no timer is running (i)
    clearInterval(interval);
    // empty variables from last quiz (accessed if user click exit quiz or view HS)
    endOfQuiz()
}

// function to display homepage span
function showHome() {
    event.preventDefault();
    // no display
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    // block display
    displayOpeningPage.style.display = "block";
    linkToHighScoresButton.style.display = "block";
    quizTimer.style.display = "block";
    // reset timer to 0 seconds
    clearTime()
}

// function to display score submission
function showScoreSubmission() {
    // no display
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "none";
    displayHighScores.style.display = "none";
    // block display
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
    displayTime = 75;
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
    interval = setInterval(function () {
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
            // empty variables from last quiz
            endOfQuiz()
        }
    }, 1000);
}



    
// function to pass through the questions 
function populateQuestions() {
    // variable j used to loop through objects within array
    if (j < questions.length) {
        // define function "shuffle array"
        function shuffleArray() {
            // array of positions available for answers
            
            // variable as long as array length
            var counter = array.length;
        
            // While there are elements in the array
            while (counter > 0) {
                // create var index and assign a math random value (within counter var limits)
                index = Math.floor(Math.random() * counter);
                // reduce counter by 1
                counter--;
                // FIND OUT WHAT THIS DOES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                var temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
        
            return array;
        }
        // define array as the possible answers for current question (j)""
        var array = [questions[j].A1, questions[j].A2, questions[j].A3, questions[j].A4]
        // shuffle the array 
        shuffleArray(array);
        // update display to show current question
        displayedQuestion.textContent = questions[j].question;
        // update text content of each button to reflected the elements of SHUFFLED array
        displayedOption1.textContent = array[0]
        displayedOption2.textContent = array[1]
        displayedOption3.textContent = array[2]
        displayedOption4.textContent = array[3]

        correctAnswer = questions[j].correct_answer;
    } else {
        // once all questions are answered - stop timer 
        clearInterval(interval);
        // bring the time displayed as final question answered to variable "final time"
        finalTime = displayTime;
        showScoreSubmission()
        // empty variables from last quiz
        endOfQuiz()

    }
}

// function executed when user clicks on an answer button
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
        previousResultText.textContent = "Wrong!";
        // run wrong answer function
        wrongAnswer();
    } else {
        borderAboveLastResult.style.visibility = "visible";
        previousResultText.textContent = "Correct!";
    }
}

// function if clicked answer is not correct answer 
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
        // stop timer 
        clearInterval(interval);
        // bring the time displayed as final question answered to variable "final time"
        finalTime = displayTime;
        showScoreSubmission();
        // empty variables from last quiz
        endOfQuiz()
    }
}

// function to clear stored data relating to any previous responses
function endOfQuiz() {
    // empty j so future quizzes start with 1st question
    j = 0;
    // reset display of "wrong/correct" about previous result
    previousResultText.textContent = "";
}

// function to store submitted initials and scores in local storage
function storeInfo() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// function to render information from local storage and pin in to high score list
function renderInfo() {
    // clear list each time (to reflect any higher scores) 
    highScoreList.innerHTML = "";
    // accessing string stored in local storage, turning it back into array
    var storedHighScore = JSON.parse(localStorage.getItem("highscores"));
    // sort array by the scores (high score becomes obj 0, 2nd highests obj 1)
    storedHighScore.sort(function (a, b) {
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
answerButtonTargets.addEventListener("click", clickQuestions);
// add event listener to submit button for highscore form
submitDataButton.addEventListener("click", function (event) {
    event.preventDefault();
    // create variable for submitted initials 
    var HSText = submittedInitials.value.trim();
    // create variable for score from final time
    var score = finalTime;
    var q = 0
    // if no initials entered, stop
    if (HSText === "") {
        return;
    }
    // create object to store name and score
    var highscoresObject = {};
    highscoresObject.name = HSText;
    highscoresObject.score = score;
    // push the object onto array called highscores
    highscores.push(highscoresObject);
    storeInfo();
    // empty initials + score for any future submissions
    submittedInitials.value = "";
    showHS();
});
// add event listener to clear high score button
clearHighScoresButton.addEventListener("click", emptyHS);