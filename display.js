var a, b;
var wrong = 0;
var correct = 0;
var userInput;
var answer;
var timer;
var timercount = 30;
var answerString;
var levelNameState = "beginner";
var levelDigitValue = 10;

var levelname = document.getElementsByName("level");
var beginner = document.getElementById("bgl");
var intermediate = document.getElementById("inl");
var advance = document.getElementById("adl");
beginner.checked = true;

alert("Click okay to start your Practise");


function clearTextFeild() {
    document.getElementById("answer-id").value = null;
}


beginner.onclick = function (){
   
    if (beginner.checked == true) {
       alert("Beginner Level");
       levelDigitValue = 10;
       clearTimeout(timer);
       setTimeout(generateQuestion, 1000); 
      // generateQuestion();         
    }   
}

intermediate.onclick = function (){
    
   
    
    if (intermediate.checked == true) {       
            alert("Intermediate Level");
            levelDigitValue = 100;
            clearTimeout(timer);
            setTimeout(generateQuestion, 1000);
          //  generateQuestion();
    } 
   
}
advance.onclick = function (){
   
   
    if (advance.checked == true) {
            alert("Advance Level");
            levelDigitValue = 1000;
            clearTimeout(timer);
            setTimeout(generateQuestion, 1000);  
           // generateQuestion();
    }   
}

//GENERATE QUESTION / START GAME

generateQuestion();

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
        setTimeout(generateQuestion, 1000);
    }
}



function generateQuestion() {
    var numberDigits = levelDigitValue;
    a = Math.floor(Math.random() * numberDigits) + 1;
    b = Math.floor(Math.random() * numberDigits) + 1;
    answer = a + b;
    document.getElementById("question-id").innerHTML = "" + a + " + " + b;
    document.getElementById("image-id").src = "mark.png";
    document.getElementById("answer-display").innerText = "Find";
    document.getElementById("answer-id").focus();

    if(beginner.checked == true){

        timercount = 30;
        startTimer();
    }
    if(intermediate.checked == true){

        timercount = 20;
        startTimer();
    }
    if(advance.checked == true){

        timercount = 10
        startTimer();
    }
    
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

    if (userInput != null) {

        if (userInput == answer) {
            displayForRightAnswer();
            clearTimeout(timer);
            setTimeout(generateQuestion, 1000);
            clearTextFeild();
        }
        else {
            displayForWrongAnswer();
            clearTimeout(timer);
            setTimeout(generateQuestion, 1000);
            clearTextFeild();
        }
    }
    else {
        document.getElementById("image-id").src = "tenor.gif";
        clearTimeout(timer);
        setTimeout(generateQuestion, 1000);
        clearTextFeild();
    }
    clearTextFeild();
   
}
document.getElementById("btn").onclick = function () {
    check();
}