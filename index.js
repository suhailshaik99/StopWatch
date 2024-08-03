// Getting all the buttons.
const startButton = document.getElementsByClassName("buttons")[0];
const stopButton = document.getElementsByClassName("buttons")[1];
const resetButton = document.getElementsByClassName("buttons")[2];

//  Getting the timer elements.
const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");
const msElement = document.getElementById("milliseconds");

// Declaring variables to store ms, secs and minutes.
let milliSeconds = 0,
  seconds = 0,
  minutes = 0;
let intervalId;

// Function to display all the values.
function updateValues() {
  msElement.textContent = String(milliSeconds / 10).padStart(2, "0");
  secElement.textContent = String(seconds).padStart(2, "0");
  minElement.textContent = String(minutes).padStart(2, "0");
}

function start() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      milliSeconds += 10;
      if (milliSeconds >= 1000) {
        seconds++;
        milliSeconds = 0;
      }
      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }
      updateValues();
    }, 10);
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  msElement.textContent = String(milliSeconds).padStart(2, "0");
  secElement.textContent = String(seconds).padStart(2, "0");
  minElement.textContent = String(minutes).padStart(2, "0");
}

// Adding the event listeners to the respective buttons.
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
