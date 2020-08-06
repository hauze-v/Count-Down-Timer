// DOM references to each paragraph element in the countdown timer
const timerDayEl = document.querySelector(".timer__day")
const timerHourEl = document.querySelector(".timer__hour")
const timerMinEl = document.querySelector(".timer__min")
const timerSecEl = document.querySelector(".timer__sec")

/* Create target date. */
const targetDate = new Date(`September 11, 2020 0:00:00`); // target date

/* Define setInterval variable that calls displayRTime every 1 second */
let timer = setInterval(displayRTime, 1000);


/* Calculates the remaining time between now and target date and returns as an object */
function getRTime(start, target) {
  let miliseconds = Math.floor(target - start); /* The difference in miliseconds */
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  /* Formatting */
  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  /* Return as an object */
  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes
    rSeconds: seconds
  }
}

// Displays remaining time
function displayRTime() {
  const startDate = new Date(); /* Define fresh start time */
  let rTime = getRTime(startDate, targetDate); /* Get the remaining time */
  
  /* Display the remaining time */
  timerDayEl.innerHTML = rTime.rDays;
  timerHourEl.innerHTML = rTime.rHours;
  timerMinEl.innerHTML = rTime.rMinutes;
  timerSecEl.innerHTML = rTime.rSeconds;
}