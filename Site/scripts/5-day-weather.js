const APPID = "e33262cd6a432b1c3dc5181a736dbc41";
const WEATHER_DETAILS_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${APPID}&lang=ru&q=`;
const AIR_POLLUTIONS_DETAILS = `http://api.openweathermap.org/pollution/v1/co/53,21/current.json?appid=${APPID}`;
const WEATHER_DETAILS_FIVE_DAYS = `http://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${APPID}&lang=ru&q=`;
const defaultCity = "Izhevsk";


const page = {
        init: function () {
            this.getWeatherDetails(defaultCity, this.render, WEATHER_DETAILS_ENDPOINT);
            this.getPollution(defaultCity, this.renderPollution, AIR_POLLUTIONS_DETAILS);
            this.getWeatherDetails(defaultCity, this.renderfiveDays, WEATHER_DETAILS_FIVE_DAYS);
            const searchField = document.getElementById("search-field");
            searchField.addEventListener("change", (event) => {
              const city = event.target.value;
              this.getWeatherDetails(city, this.render, WEATHER_DETAILS_ENDPOINT);
              this.getWeatherDetails(city, this.renderfiveDays, WEATHER_DETAILS_FIVE_DAYS);
              this.getPollution(defaultCity, this.renderPollution, AIR_POLLUTIONS_DETAILS);
            });
        },
  getWeatherDetails(city, callback, WEATHER_DETAILS_ENDPOINT) {
    const url = `${WEATHER_DETAILS_ENDPOINT}${city}`;
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText));
      }
    }

    xhr.open("GET", url, true); //настройка запроса
    xhr.send(); // инициализация соединения; метод открывает соединение и отправляет запрос на сервер.
  },
  getPollution(city, callback, AIR_POLLUTIONS_DETAILS) {
    const url = `${AIR_POLLUTIONS_DETAILS}`;
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
},

render(data) {
    const city = data.name;
    const country = data.sys.country;
    const date = new Date();
    const currWeather = Math.round(data.main.temp);
    const icon = data.weather[0].icon;
    const humidity = Math.round(data.main.humidity);
    const windSpeed = Math.round(data.wind.speed);
    const weatherStatus = data.weather[0].main;
    const lenghtDay = document.getElementById('lenght-day');
    const precipitation = data.clouds.all;
    

    document.getElementsByClassName("weatherIconNumber")[0].innerHTML = `${currWeather}°C`; 
    document.querySelector("#region_info_weather").innerHTML = `${city}, ${country}`;   
    document.querySelector("#local").innerHTML = `${city}, ${country}`;   
    document.querySelector("#day").innerHTML = `${date.toLocaleString("ru-RU", {weekday: "long"}) }`;
    document.querySelector("#weather").innerHTML = `${weatherStatus.toLocaleString("ru-RU", {weatherStatus})}`;
    document.querySelector("#temp").innerHTML = `${currWeather}°C`;
    document.getElementById('humidity').innerHTML = ` Влажность: ${humidity}%`;
    document.querySelector("#windspeed").innerHTML = `Ветер: ${windSpeed} м/с`;
    document.getElementById('precipitation').innerHTML = `Вероятность осадков: ${precipitation}%`;
    document.querySelector("#currWeatherImg").src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector("#currWeatherImg2").src = `http://openweathermap.org/img/w/${icon}.png`;
   
},
renderPollution(data) {
    const airPollution = Math.random(data.value) * 10 + 'e-8';
    document.getElementById('polutionInfo').innerHTML = `${airPollution}`;
  },
  

};
page.init();

