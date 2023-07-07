// clock for current day and time
function clock() {
  var date = new Date();
  var ampm = date.getHours() >= 12 ? " PM" : " AM";
  let hours = date.getHours();
  hours = ((hours + 11) % 12) + 1;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDay = days[date.getDay()];
  currentDay = `<b>${currentDay}</b> ${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("weather-date").innerHTML = currentDay;

  // display upcoming days
  var daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var upcomingDays = [];
  currentDayOfWeek = date.getDay();
  for (var i = 1; i <= 5; i++) {
    var upcomingDayIndex = (currentDayOfWeek + i) % 7;
    var upcomingDay = daysOfTheWeek[upcomingDayIndex];
    upcomingDays.push(upcomingDay);
  }
  document.getElementById("day-one").innerHTML = upcomingDays[0];
  document.getElementById("day-two").innerHTML = upcomingDays[1];
  document.getElementById("day-three").innerHTML = upcomingDays[2];
  document.getElementById("day-four").innerHTML = upcomingDays[3];
  document.getElementById("day-five").innerHTML = upcomingDays[4];

  displayClock();
}
// display live-changing clock
function displayClock() {
  var refresh = 1000; // refresh rate in milli seconds
  mytime = setTimeout("clock()", refresh);
}
displayClock();
