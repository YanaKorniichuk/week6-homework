let time = new Date();
let h3 = document.querySelector("h3");
let hours = time.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = time.getMinutes();
if (minutes < 10) {
  hours = `0${minutes}`;
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
let day = days[time.getDay()];
h3.innerHTML = `${day} ${hours} : ${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  searchCity(cityInput.value);
}
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", search);

function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;

  let apiKey = "d1a86552de255334f6117b348c4519bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let p = document.querySelector("p");
  p.innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let Tem = document.querySelector("#Tem");
  Tem.innerHTML = `${temperature}`;
}

function searchCity(city) {
  let apiKey = "d1a86552de255334f6117b348c4519bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

// Requires adding a Current Location Button
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}