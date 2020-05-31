var startButton = document.querySelector("#start-button");
var exitQuizButton = document.querySelector("#go-to-HS");
var returnHomeButton = document.querySelector("#go-back-to-home");

var displayOpeningPage = document.querySelector("#opening-page");
var displayQuestions = document.querySelector("#questions-displayed");
var displayHighScores = document.querySelector("#highscores-displayed");


var linkToHighScores = document.querySelector("#persistant-link-to-HS");

// var questions = [
//     new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
//     new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
//     new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
//     new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
//     new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
// ];


// {question: "What is 10/2?", answers: {1: '3',2: '5',3: '115',
//     },
//     correctAnswer: 'b'
// }

function showQuestions() {
    event.preventDefault();
    displayOpeningPage.style.display = "none";
    displayQuestions.style.display = "block";
    displayHighScores.style.display = "none";
    linkToHighScores.style.visibility = "visible";
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

function processQuestions () {
    for (i = 0; i < questions.length; i++) {

    }
}

function markQuestions () {}



startButton.addEventListener("click", showQuestions);
exitQuizButton.addEventListener("click", showHS);
returnHomeButton.addEventListener("click", showHome);
linkToHighScores.addEventListener("click", showHS);