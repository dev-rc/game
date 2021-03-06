var a, b;
var wrong = 0;
var correct = 0;
var userInput;
var answer;
var timer;
var timercount = 10;
var answerString;
var level = false;
alert("Click okay to start your Practise");
generateQuestion();

function clearTextFeild() {
    document.getElementById("answer-id").value = null;
}
var beginner = document.getElementById("bgl");
var inter = document.getElementById("iml");
var advc = document.getElementById("adl");

if (beginner.check == true) {
    beginner.onclick = function () {
        console.log("1");
    }
} else if (inter.check == true) {
    console.log("2");
} else if (advc.check == true) {
    console.log("3");
}

function startTimer() {

    if (timercount != 0) {
        document.getElementById("timer").innerHTML = timercount;
        timercount--;
        timer = setTimeout(startTimer, 1000);
    }
    else {
        document.getElementById("wrong-ans").innerHTML = wrong = wrong + 1;
        clearTimeout(timer);
        document.getElementById("timer").innerHTML = "TIME OUT";
        clearTextFeild();
        setTimeout(generateQuestion, 2000);
    }
}

document.getElementById("bgl").check = true;

function generateQuestion() {

    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * 100) + 1;
    answer = a + b;
    document.getElementById("question-id").innerHTML = "" + a + " + " + b;
    document.getElementById("image-id").src = "mark.png";
    document.getElementById("answer-display").innerText = "Find";
    document.getElementById("answer-id").focus();
    timercount = 10;
    startTimer();
}




function displayForRightAnswer() {
    answerString = "" + userInput + " is the Right Answer";
    document.getElementById("image-id").src = "check.png";
    document.getElementById("correct-ans").innerHTML = correct = correct + 1;
    document.getElementById("answer-display").innerText = answerString;

}
function displayForWrongAnswer() {
    answerString = "" + a + " + " + b + " is not : " + userInput + ", " + userInput + " is wrong anwser, The right answer is : " + answer;
    document.getElementById("image-id").src = "wrong.png";
    document.getElementById("wrong-ans").innerHTML = wrong = wrong + 1;
}
function check() {
    userInput = document.getElementById("answer-id").value;

    if (userInput != 0) {

        if (userInput == answer) {
            displayForRightAnswer();
            clearTimeout(timer);
        }
        else {
            displayForWrongAnswer();
            clearTimeout(timer);
        }
    }
    else {
        document.getElementById("image-id").src = "tenor.gif";
        clearTimeout(timer);

    }
    clearTextFeild();
    setTimeout(generateQuestion, 2000);
}
document.getElementById("btn").onclick = function () {
    check();
}