var randomNumber = Math.floor(Math.random() * 100 +1);
var userInput = document.getElementById('user-input');
var messageInput = document.getElementById('guess-number');
var submitBtn = document.getElementById("submit-btn");

// Sets return message for number guess results
submitBtn.addEventListener('click', function () {
  var number = parseInt(userInput.value);
  document.querySelector('.user-result').innerText = number;
  console.log(userInput.value);
  if(number > randomNumber && number < 100) {
    document.querySelector('.result-text').innerText = "That is too high!";
  } else if(number < randomNumber && number > 0) {
    document.querySelector('.result-text').innerText = "That is too low!";
  } else if(number === randomNumber) {
    document.querySelector('.result-text').innerText = "BOOM!";
  } else {
    document.querySelector('.result-text').innerText = "ERROR: Please enter a value from 1 to 100";
  }
});

// Sets min and max
// userInput = Math.min(100,Math.max(0,userInput));
