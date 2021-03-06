/* DOM References */
const timerDaysEl = document.querySelector(".timer__days")
const timerHoursEl = document.querySelector(".timer__hours")
const timerMinsEl = document.querySelector(".timer__mins")
const timerSecsEl = document.querySelector(".timer__secs")

/* Define a set interval timer that calls getTimeDifference every second and then displays the result */
let timer = setInterval(displayTime, 1000);

function getTimeDifference(startDate, targetDate) {
  let miliseconds = Math.floor(targetDate - startDate);
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  /* Format the result */
  hours = hours - (days * 24); // We want (hours - days) but we need to convert days to hours before calculating
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  return {
    rDays: days,
    rHours: hours,
    rMins: minutes,
    rSecs: seconds
  }
}

function displayTime() {
  /* Create start and target time objects */
  const startDate = new Date();
  const targetDate = new Date("September 11, 2020 00:00:00");
  let rTimeObj = getTimeDifference(startDate, targetDate);
  
  if (rTimeObj.rDays < 10) {
    timerDaysEl.textContent = `0${rTimeObj.rDays}`
  } else {
    timerDaysEl.textContent = rTimeObj.rDays;
  }

  if (rTimeObj.rHours < 10) {
    timerHoursEl.textContent = `0${rTimeObj.rHours}`
  } else {
    timerHoursEl.textContent = rTimeObj.rHours;
  }

  if (rTimeObj.rMins < 10) {
    timeMinsDEl.textContent = `0${rTimeObj.rMins}`
  } else {
    timerMinsEl.textContent = rTimeObj.rMins;
  }

  if (rTimeObj.rSecs < 10) {
    timerSecsEl.textContent = `0${rTimeObj.rSecs}`
  } else {
    timerSecsEl.textContent = rTimeObj.rSecs;
  }
}