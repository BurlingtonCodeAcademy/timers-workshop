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

  //disabling the start button to prevent multiple timers occurring

  //alerting the user that the time out has begun


  /*reassigning global variable to start the time out,
    function executes after 5 seconds*/

  //disabling the stop button

  //enabling the start button

  //alerting the user that the time out is complete

});

//adding a click event listener to our stop time out button; the callback function is what occurs on click
stopTimeOutButton.addEventListener('click', () => {
  //disabling the stop button

  //enabling the start button

  //alerting the user that the time out has been stopped

  //stop the time out with the start variable as its argument

});

//adding a click event listener to the interval button; the callback function is what occurs on click
intervalButton.addEventListener('click', () => {
  //the number we are starting to count from

  //disabling the interval button upon click


  /*
    variable to hold  the start of our interval, function executes every second
    */

  //decrement the number displayed to the user to indicated the interval

  //what happens when the interval reaches zero

  //enable the interval button

  //stop the interval timer with the stop variable as its argument


});
