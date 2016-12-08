var randomNumber = Math.floor(Math.random() * 100 +1);
var userInput = document.getElementById('user-input');
var messageInput = document.getElementById('guess-number');
var submitBtn = document.getElementById("submit-btn");
var clearInput = document.querySelector(".clear-btn");
var resetBtn = document.querySelector(".reset-btn");
var userResult = document.querySelector('.user-result');
var resultText = document.querySelector('.result-text');
var min = 0;
var max = 100;
var minInput = document.querySelector(".min");
var maxInput = document.querySelector(".max");

// Sets return message for number guess results
submitBtn.addEventListener('click', function () {
  checkWithinRange();
});

function checkWithinRange(){
  var number = parseInt(userInput.value);
  userResult.innerText = number;
  // console.log(userInput.value);
if (number > randomNumber && number < max) {
    resultText.innerText = "That is too high!";
  } else if(number < randomNumber && number > min) {
    resultText.innerText = "That is too low!";
  } else if(number === randomNumber) {
    resultText.innerText = "BOOM!";
    numberValues();
  } else {
    resultText.innerText = "ERROR: Please enter a value from " + min + " to " + max;
  }
}

// function getNum(val) {
//    if (isNaN(val)) {
//      userResult.innerText = '#';
//    }
//    userResult.innerText = val;
// }

function numberValues() {
  min = min - 10;
  max =  max + 10;
  minInput.value = min;
  maxInput.value = max;
  randomNumber = changeRange(min, max);
}

// Clears User Input
clearInput.addEventListener('click', function () {
  userInput.value = "";
})

// Reset Button
resetBtn.addEventListener('click', function () {
  userInput.value = "";
  randomNumber = Math.floor(Math.random() * 100 +1);
  userResult.innerText = "";
  resultText.innerText = "";
  minInput.value = "0";
  maxInput.value = "100";
})

//add event listener
userInput.addEventListener('input', function(event) {
    resetBtn.disabled = false;
    clearInput.disabled = false;
});

//Change Range
minInput.addEventListener('keyup', function (){
  min = parseInt(minInput.value);
  randomNumber = changeRange(min, max);
})

maxInput.addEventListener('keyup', function (){
  max = parseInt(maxInput.value);
  randomNumber = changeRange(min, max);
})

function changeRange (min, max)  {
 return Math.floor(Math.random() * (max - min)) + min;
}
