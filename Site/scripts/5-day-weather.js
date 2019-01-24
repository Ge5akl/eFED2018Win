const APP_ID = 'e33262cd6a432b1c3dc5181a736dbc41';
const WEATHER_DETAILS_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${ APP_ID }&q=`;
const AIR_POLLUTION = `http://api.openweathermap.org/pollution/v1/co/0.0,10.0/current.json?appid=${ APP_ID }`;
const defaultCity = 'izhevsk';
const page = {
    init() {
        this.getWeatherDetails(defaultCity, this.render);

        const searchField = document.querySelector("#search-field");
        document.querySelector("#search-field").addEventListener("submit", (event) => {
          event.preventDefault();
      });

      searchField.addEventListener("change", (event) => {
          const city = event.target.value;
          this.getWeatherDetails(city, this.render);
          
      });
  },
    getWeatherDetails(city, callback) {
        const url = `${ WEATHER_DETAILS_ENDPOINT }${ city }`;
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(JSON.parse(xhr.responseText));
                callback(JSON.parse(xhr.responseText));
            }
        }
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
    document.getElementsByClassName("weatherIconNumber")[0].innerHTML = `${currWeather}°C`; 
    document.querySelector("#region_info_weather").innerHTML = `${city}, ${country}`;   
    document.querySelector("#local").innerHTML = `${city}, ${country}`;   
    document.querySelector("#day").innerHTML = `${date.toLocaleString("ru-RU", {weekday: "long"}) }`;
    document.querySelector("#weather").innerHTML = `${weatherStatus.toLocaleString("ru-RU", {weatherStatus})}`;
    document.querySelector("#temp").innerHTML = `${currWeather}°C`;
    document.querySelector("#windspeed").innerHTML = `Ветер: ${windSpeed} м/с`;
    document.querySelector("#currWeatherImg").src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector("#currWeatherImg2").src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector("#currWeatherImg3").src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector("#humidity").innerHTML = `Влажность: ${humidity}%`;
},
};
page.init();

