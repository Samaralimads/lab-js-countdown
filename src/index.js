const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval(setInterval = timer)

// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");
const startTime = document.querySelector("#time");
// Your code goes here ...
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  showToast("⏰ Final countdown! ⏰");

  // Your code goes here ... intervals of 1s(1000mls) on each interval(remainingTime -1)     when 0 = it should stop + showToeast function should be called
  document.getElementById("start-btn").disabled = true;
  timer = setInterval(() => {
    remainingTime--;
    startTime.textContent = remainingTime;
    console.log(remainingTime);
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("The end! 🚀");
      document.getElementById("start-btn").disabled = false;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  //should remove the class "show" after 3s(3000mls)

  let div = document.querySelector("#toast");
  div.classList.add("show");
  div.querySelector("#toast-message").textContent = message;
  setTimeout(() => {
    div.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
// Your code goes here ...

let closingClick = document.querySelector("#close-toast");
closingClick.addEventListener("click", closing);
function closing(params) {
  let div = document.querySelector("#toast");
  div.classList.remove("show");
}
