//getting all of our DOM elements
const stopTimeOutButton = document.getElementById('stop-timeout');
const startTimeOutButton = document.getElementById('start-timeout');
const timeOutDisplay = document.getElementById('timeout-display');
const intervalDisplay = document.getElementById('interval-display');
const intervalButton = document.getElementById('interval');

//creating a global variable for the time out so we can both start and stop it
let timeOutTimer;
//having the stop button initially disabled
stopTimeOutButton.style.pointerEvents = 'none';

//adding a click event listener to our start  time out button; the callback function is what occurs on click
startTimeOutButton.addEventListener('click', () => {
  //enabling the stop button
  stopTimeOutButton.style.pointerEvents = 'auto';
  //disabling the start button to prevent multiple timers occurring
  startTimeOutButton.style.pointerEvents = 'none';
  //alerting the user that the time out has begun
  timeOutDisplay.textContent = 'I am timing out...';

  /*reassigning global variable to start the time out,
    function executes after 5 seconds*/
  timeOutTimer = setTimeout(() => {
    //disabling the stop button
    stopTimeOutButton.style.pointerEvents = 'none';
    //enabling the start button
    startTimeOutButton.style.pointerEvents = 'auto';
    //alerting the user that the time out is complete
    timeOutDisplay.textContent = 'I timed out at 5 seconds!';
  }, 5000);
});

//adding a click event listener to our stop time out button; the callback function is what occurs on click
stopTimeOutButton.addEventListener('click', () => {
  //disabling the stop button
  stopTimeOutButton.style.pointerEvents = 'none';
  //enabling the start button
  startTimeOutButton.style.pointerEvents = 'auto';
  //alerting the user that the time out has been stopped
  timeOutDisplay.textContent = 'I am no longer timing out!';
  //stop the time out with the start variable as its argument
  clearTimeout(timeOutTimer);
});

//adding a click event listener to the interval button; the callback function is what occurs on click
intervalButton.addEventListener('click', () => {
  //the number we are starting to count from
  let count = 5;
  //disabling the interval button upon click
  intervalButton.style.pointerEvents = 'none';

  /*
    variable to hold  the start of our interval, function executes every second
    */
  let countDown = setInterval(() => {
    //decrement the number displayed to the user to indicated the interval
    intervalDisplay.textContent = count--;
    //what happens when the interval reaches zero
    if (count < 0) {
      //enable the interval button
      intervalButton.style.pointerEvents = 'auto';
      //stop the interval timer with the stop variable as its argument
      clearInterval(countDown);
    }
  }, 1000);
});
