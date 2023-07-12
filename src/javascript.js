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
  var daysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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

// 5 day forecast
function displayForecast(response) {
  forecastOneDay = response.data.daily[1].temp.day;
  forecastOneNight = response.data.daily[1].temp.night;
  forecastTwoDay = response.data.daily[2].temp.day;
  forecastTwoNight = response.data.daily[2].temp.night;
  forecastThreeDay = response.data.daily[3].temp.day;
  forecastThreeNight = response.data.daily[3].temp.night;
  forecastFourDay = response.data.daily[4].temp.day;
  forecastFourNight = response.data.daily[4].temp.night;
  forecastFiveDay = response.data.daily[5].temp.day;
  forecastFiveNight = response.data.daily[5].temp.night;

  let foreOneDay = document.querySelector("#temp-one-day");
  let foreOneNight = document.querySelector("#temp-one-night");
  let foreTwoDay = document.querySelector("#temp-two-day");
  let foreTwoNight = document.querySelector("#temp-two-night");
  let foreThreeDay = document.querySelector("#temp-three-day");
  let foreThreeNight = document.querySelector("#temp-three-night");
  let foreFourDay = document.querySelector("#temp-four-day");
  let foreFourNight = document.querySelector("#temp-four-night");
  let foreFiveDay = document.querySelector("#temp-five-day");
  let foreFiveNight = document.querySelector("#temp-five-night");

  foreOneDay.innerHTML = `${Math.round(forecastOneDay)}°`;
  foreOneNight.innerHTML = `${Math.round(forecastOneNight)}°`;
  foreTwoDay.innerHTML = `${Math.round(forecastTwoDay)}°`;
  foreTwoNight.innerHTML = `${Math.round(forecastTwoNight)}°`;
  foreThreeDay.innerHTML = `${Math.round(forecastThreeDay)}°`;
  foreThreeNight.innerHTML = `${Math.round(forecastThreeNight)}°`;
  foreFourDay.innerHTML = `${Math.round(forecastFourDay)}°`;
  foreFourNight.innerHTML = `${Math.round(forecastFourNight)}°`;
  foreFiveDay.innerHTML = `${Math.round(forecastFiveDay)}°`;
  foreFiveNight.innerHTML = `${Math.round(forecastFiveNight)}°`;

  // change icon based on weather
  let oneIcon = document.querySelector("#day-one-icon");
  let twoIcon = document.querySelector("#day-two-icon");
  let threeIcon = document.querySelector("#day-three-icon");
  let fourIcon = document.querySelector("#day-four-icon");
  let fiveIcon = document.querySelector("#day-five-icon");

  // clear icon
  if (response.data.daily[1].weather[0].main == "Clear") {
    oneIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (response.data.daily[2].weather[0].main == "Clear") {
    twoIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (response.data.daily[3].weather[0].main == "Clear") {
    threeIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (response.data.daily[4].weather[0].main == "Clear") {
    fourIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (response.data.daily[5].weather[0].main == "Clear") {
    fiveIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }

  // clouds icon
  if (response.data.daily[1].weather[0].main == "Clouds") {
    if (response.data.daily[1].weather[0].description == "few clouds") {
      oneIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      oneIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }
  if (response.data.daily[2].weather[0].main == "Clouds") {
    if (response.data.daily[2].weather[0].description == "few clouds") {
      twoIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      twoIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }
  if (response.data.daily[3].weather[0].main == "Clouds") {
    if (response.data.daily[3].weather[0].description == "few clouds") {
      threeIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      threeIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }
  if (response.data.daily[4].weather[0].main == "Clouds") {
    if (response.data.daily[4].weather[0].description == "few clouds") {
      fourIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      fourIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }
  if (response.data.daily[5].weather[0].main == "Clouds") {
    if (response.data.daily[5].weather[0].description == "few clouds") {
      fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      fiveIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }

  // thunderstorm icon
  if (response.data.daily[1].weather[0].main == "Thunderstorm") {
    oneIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }
  if (response.data.daily[2].weather[0].main == "Thunderstorm") {
    twoIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }
  if (response.data.daily[3].weather[0].main == "Thunderstorm") {
    threeIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }
  if (response.data.daily[4].weather[0].main == "Thunderstorm") {
    fourIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }
  if (response.data.daily[5].weather[0].main == "Thunderstorm") {
    fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }

  // drizzle icon
  if (response.data.daily[1].weather[0].main == "Drizzle") {
    oneIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }
  if (response.data.daily[2].weather[0].main == "Drizzle") {
    twoIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }
  if (response.data.daily[3].weather[0].main == "Drizzle") {
    threeIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }
  if (response.data.daily[4].weather[0].main == "Drizzle") {
    fourIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }
  if (response.data.daily[5].weather[0].main == "Drizzle") {
    fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }

  // snow icon
  if (response.data.daily[1].weather[0].main == "Snow") {
    if (
      response.data.daily[1].weather[0].description == "sleet" ||
      response.data.daily[1].weather[0].description == "light shower sleet" ||
      response.data.daily[1].weather[0].description == "shower sleet"
    ) {
      oneIcon.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      oneIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }
  if (response.data.daily[2].weather[0].main == "Snow") {
    if (
      response.data.daily[2].weather[0].description == "sleet" ||
      response.data.daily[2].weather[0].description == "light shower sleet" ||
      response.data.daily[2].weather[0].description == "shower sleet"
    ) {
      twoIcon.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      twoIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }
  if (response.data.daily[3].weather[0].main == "Snow") {
    if (
      response.data.daily[3].weather[0].description == "sleet" ||
      response.data.daily[3].weather[0].description == "light shower sleet" ||
      response.data.daily[3].weather[0].description == "shower sleet"
    ) {
      threeIcon.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      threeIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }
  if (response.data.daily[4].weather[0].main == "Snow") {
    if (
      response.data.daily[4].weather[0].description == "sleet" ||
      response.data.daily[4].weather[0].description == "light shower sleet" ||
      response.data.daily[4].weather[0].description == "shower sleet"
    ) {
      fourIcon.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      fourIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }
  if (response.data.daily[5].weather[0].main == "Snow") {
    if (
      response.data.daily[5].weather[0].description == "sleet" ||
      response.data.daily[5].weather[0].description == "light shower sleet" ||
      response.data.daily[5].weather[0].description == "shower sleet"
    ) {
      fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      fiveIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }

  // rain icon
  if (response.data.daily[1].weather[0].main == "Rain") {
    if (
      response.data.daily[1].weather[0].description ==
        "light intensity shower rain" ||
      response.data.daily[1].weather[0].description == "shower rain" ||
      response.data.daily[1].weather[0].description ==
        "heavy intensity shower rain" ||
      response.data.daily[1].weather[0].description == "ragged shower rain" ||
      response.data.daily[1].weather[0].description == "freezing rain"
    ) {
      oneIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      oneIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }
  if (response.data.daily[2].weather[0].main == "Rain") {
    if (
      response.data.daily[2].weather[0].description ==
        "light intensity shower rain" ||
      response.data.daily[2].weather[0].description == "shower rain" ||
      response.data.daily[2].weather[0].description ==
        "heavy intensity shower rain" ||
      response.data.daily[2].weather[0].description == "ragged shower rain" ||
      response.data.daily[2].weather[0].description == "freezing rain"
    ) {
      twoIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      twoIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }
  if (response.data.daily[3].weather[0].main == "Rain") {
    if (
      response.data.daily[3].weather[0].description ==
        "light intensity shower rain" ||
      response.data.daily[3].weather[0].description == "shower rain" ||
      response.data.daily[3].weather[0].description ==
        "heavy intensity shower rain" ||
      response.data.daily[3].weather[0].description == "ragged shower rain" ||
      response.data.daily[3].weather[0].description == "freezing rain"
    ) {
      threeIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      threeIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }
  if (response.data.daily[4].weather[0].main == "Rain") {
    if (
      response.data.daily[4].weather[0].description ==
        "light intensity shower rain" ||
      response.data.daily[4].weather[0].description == "shower rain" ||
      response.data.daily[4].weather[0].description ==
        "heavy intensity shower rain" ||
      response.data.daily[4].weather[0].description == "ragged shower rain" ||
      response.data.daily[4].weather[0].description == "freezing rain"
    ) {
      fourIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      fourIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }
  if (response.data.daily[5].weather[0].main == "Rain") {
    if (
      response.data.daily[5].weather[0].description ==
        "light intensity shower rain" ||
      response.data.daily[5].weather[0].description == "shower rain" ||
      response.data.daily[5].weather[0].description ==
        "heavy intensity shower rain" ||
      response.data.daily[5].weather[0].description == "ragged shower rain" ||
      response.data.daily[5].weather[0].description == "freezing rain"
    ) {
      fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      fiveIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }

  // mist icon
  if (
    response.data.daily[1].weather[0].main == "Mist" ||
    response.data.daily[1].weather[0].main == "Smoke" ||
    response.data.daily[1].weather[0].main == "Haze" ||
    response.data.daily[1].weather[0].main == "Dust" ||
    response.data.daily[1].weather[0].main == "Fog" ||
    response.data.daily[1].weather[0].main == "Sand" ||
    response.data.daily[1].weather[0].main == "Squall"
  ) {
    oneIcon.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
  if (
    response.data.daily[2].weather[0].main == "Mist" ||
    response.data.daily[2].weather[0].main == "Smoke" ||
    response.data.daily[2].weather[0].main == "Haze" ||
    response.data.daily[2].weather[0].main == "Dust" ||
    response.data.daily[2].weather[0].main == "Fog" ||
    response.data.daily[2].weather[0].main == "Sand" ||
    response.data.daily[2].weather[0].main == "Squall"
  ) {
    twoIcon.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
  if (
    response.data.daily[3].weather[0].main == "Mist" ||
    response.data.daily[3].weather[0].main == "Smoke" ||
    response.data.daily[3].weather[0].main == "Haze" ||
    response.data.daily[3].weather[0].main == "Dust" ||
    response.data.daily[3].weather[0].main == "Fog" ||
    response.data.daily[3].weather[0].main == "Sand" ||
    response.data.daily[3].weather[0].main == "Squall"
  ) {
    threeIcon.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
  if (
    response.data.daily[4].weather[0].main == "Mist" ||
    response.data.daily[4].weather[0].main == "Smoke" ||
    response.data.daily[4].weather[0].main == "Haze" ||
    response.data.daily[4].weather[0].main == "Dust" ||
    response.data.daily[4].weather[0].main == "Fog" ||
    response.data.daily[4].weather[0].main == "Sand" ||
    response.data.daily[4].weather[0].main == "Squall"
  ) {
    fourIcon.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
  if (
    response.data.daily[5].weather[0].main == "Mist" ||
    response.data.daily[5].weather[0].main == "Smoke" ||
    response.data.daily[5].weather[0].main == "Haze" ||
    response.data.daily[5].weather[0].main == "Dust" ||
    response.data.daily[5].weather[0].main == "Fog" ||
    response.data.daily[5].weather[0].main == "Sand" ||
    response.data.daily[5].weather[0].main == "Squall"
  ) {
    fiveIcon.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }

  // ash icon
  if (response.data.daily[1].weather[0].main == "Ash") {
    oneIcon.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
  if (response.data.daily[2].weather[0].main == "Ash") {
    twoIcon.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
  if (response.data.daily[3].weather[0].main == "Ash") {
    threeIcon.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
  if (response.data.daily[4].weather[0].main == "Ash") {
    fourIcon.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
  if (response.data.daily[5].weather[0].main == "Ash") {
    fiveIcon.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
}
function getForecast(coordinates) {
  let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);
}

// display weather of city
function displayWeather(response) {
  let temperatureElement = document.querySelector("#main-temp");
  let cityElement = document.querySelector("#city");
  let statusElement = document.querySelector("#weather-description");
  let cloudElement = document.querySelector("#cloudiness");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#main-weather-icon");

  fahrenheitTemperature = response.data.main.temp;

  const weatherDescription = response.data.weather[0].description;
  const weatherStatus =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  cityElement.innerHTML = `${response.data.name} <span><i class="fa-solid fa-location-dot"></i></span>`;
  statusElement.innerHTML = weatherStatus;
  cloudElement.innerHTML = `Cloudiness: ${response.data.clouds.all}%`;
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} mph`;

  getForecast(response.data.coord);

  // change icon based on weather
  if (response.data.weather[0].main == "Clear") {
    iconElement.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (response.data.weather[0].main == "Clouds") {
    if (response.data.weather[0].description == "few clouds") {
      iconElement.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    } else {
      iconElement.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
  }
  if (response.data.weather[0].main == "Thunderstorm") {
    iconElement.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
  }
  if (response.data.weather[0].main == "Drizzle") {
    iconElement.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }
  if (response.data.weather[0].main == "Snow") {
    if (
      response.data.weather[0].description == "sleet" ||
      response.data.weather[0].description == "light shower sleet" ||
      response.data.weather[0].description == "shower sleet"
    ) {
      iconElement.innerHTML = `<i class="fa-solid fa-cloud-meatball"></i>`;
    } else {
      iconElement.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }
  }
  if (response.data.weather[0].main == "Rain") {
    if (
      response.data.weather[0].description == "light intensity shower rain" ||
      response.data.weather[0].description == "shower rain" ||
      response.data.weather[0].description == "heavy intensity shower rain" ||
      response.data.weather[0].description == "ragged shower rain" ||
      response.data.weather[0].description == "freezing rain"
    ) {
      iconElement.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    } else {
      iconElement.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
    }
  }
  if (
    response.data.weather[0].main == "Mist" ||
    response.data.weather[0].main == "Smoke" ||
    response.data.weather[0].main == "Haze" ||
    response.data.weather[0].main == "Dust" ||
    response.data.weather[0].main == "Fog" ||
    response.data.weather[0].main == "Sand" ||
    response.data.weather[0].main == "Squall"
  ) {
    iconElement.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
  if (response.data.weather[0].main == "Ash") {
    iconElement.innerHTML = `<i class="fa-solid fa-volcano"></i>`;
  }
  if (response.data.weather[0].main == "Tornado") {
    iconElement.innerHTML = `<i class="fa-solid fa-tornado"></i>`;
  }
}
// api key and url to search
function search(city) {
  let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}
// handle user submission
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  if (cityInputElement.value) {
    search(cityInputElement.value);
  } else {
    document.getElementById("city-input").placeholder = `please input a city`;
    const timeOut = setTimeout(revert, 1000);
    function revert() {
      document.getElementById("city-input").placeholder = `search city`;
    }
  }
}

// current location - api key and url to search
function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(displayWeather);
}
// get current location
function getLocation() {
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// display celsius temperature
function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#main-temp");
  let celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  // convert 5 day forecast to celsius
  let foreOneDay = document.querySelector("#temp-one-day");
  let foreOneNight = document.querySelector("#temp-one-night");
  let foreTwoDay = document.querySelector("#temp-two-day");
  let foreTwoNight = document.querySelector("#temp-two-night");
  let foreThreeDay = document.querySelector("#temp-three-day");
  let foreThreeNight = document.querySelector("#temp-three-night");
  let foreFourDay = document.querySelector("#temp-four-day");
  let foreFourNight = document.querySelector("#temp-four-night");
  let foreFiveDay = document.querySelector("#temp-five-day");
  let foreFiveNight = document.querySelector("#temp-five-night");

  let celOneA = (forecastOneDay - 32) * (5 / 9);
  let celOneB = (forecastOneDay - 32) * (5 / 9);

  let celTwoA = (forecastTwoDay - 32) * (5 / 9);
  let celTwoB = (forecastTwoDay - 32) * (5 / 9);

  let celThreeA = (forecastThreeDay - 32) * (5 / 9);
  let celThreeB = (forecastThreeDay - 32) * (5 / 9);

  let celFourA = (forecastFourDay - 32) * (5 / 9);
  let celFourB = (forecastFourDay - 32) * (5 / 9);

  let celFiveA = (forecastFiveDay - 32) * (5 / 9);
  let celFiveB = (forecastFiveDay - 32) * (5 / 9);

  foreOneDay.innerHTML = `${Math.round(celOneA)}°`;
  foreOneNight.innerHTML = `${Math.round(celOneB)}°`;
  foreTwoDay.innerHTML = `${Math.round(celTwoA)}°`;
  foreTwoNight.innerHTML = `${Math.round(celTwoB)}°`;
  foreThreeDay.innerHTML = `${Math.round(celThreeA)}°`;
  foreThreeNight.innerHTML = `${Math.round(celThreeB)}°`;
  foreFourDay.innerHTML = `${Math.round(celFourA)}°`;
  foreFourNight.innerHTML = `${Math.round(celFourB)}°`;
  foreFiveDay.innerHTML = `${Math.round(celFiveA)}°`;
  foreFiveNight.innerHTML = `${Math.round(celFiveB)}°`;

  fahrenheitLink.style.fontWeight = "normal";
  celsiusLink.style.fontWeight = "bold";
}
// display fahrenheit temperature
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#main-temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

  // convert 6 day forecast to fahrenheit
  let foreOneDay = document.querySelector("#temp-one-day");
  let foreOneNight = document.querySelector("#temp-one-night");
  let foreTwoDay = document.querySelector("#temp-two-day");
  let foreTwoNight = document.querySelector("#temp-two-night");
  let foreThreeDay = document.querySelector("#temp-three-day");
  let foreThreeNight = document.querySelector("#temp-three-night");
  let foreFourDay = document.querySelector("#temp-four-day");
  let foreFourNight = document.querySelector("#temp-four-night");
  let foreFiveDay = document.querySelector("#temp-five-day");
  let foreFiveNight = document.querySelector("#temp-five-night");

  foreOneDay.innerHTML = `${Math.round(forecastOneDay)}°`;
  foreOneNight.innerHTML = `${Math.round(forecastOneNight)}°`;
  foreTwoDay.innerHTML = `${Math.round(forecastTwoDay)}°`;
  foreTwoNight.innerHTML = `${Math.round(forecastTwoNight)}°`;
  foreThreeDay.innerHTML = `${Math.round(forecastThreeDay)}°`;
  foreThreeNight.innerHTML = `${Math.round(forecastThreeNight)}°`;
  foreFourDay.innerHTML = `${Math.round(forecastFourDay)}°`;
  foreFourNight.innerHTML = `${Math.round(forecastFourNight)}°`;
  foreFiveDay.innerHTML = `${Math.round(forecastFiveDay)}°`;
  foreFiveNight.innerHTML = `${Math.round(forecastFiveNight)}°`;

  fahrenheitLink.style.fontWeight = "bold";
  celsiusLink.style.fontWeight = "normal";
}

let fahrenheitTemperature = null;

let forecastOneDay = null;
let forecastOneNight = null;
let forecastTwoDay = null;
let forecastTwoNight = null;
let forecastThreeDay = null;
let forecastThreeNight = null;
let forecastFourDay = null;
let forecastFourNight = null;
let forecastFiveDay = null;
let forecastFiveNight = null;

let form = document.querySelector("#search-bar");
form.addEventListener("submit", handleSubmit);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getLocation);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink.style.fontWeight = "bold";

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Los Angeles");
