const crd = "";
const API_key = "f9741859385f04f6e56511b6d2553309";
const part = "minutely,hourly,daily,alerts"
const units = "metric"
let lat = "";
let lon = "";
let celciusTemp = 0;
let windSpeedAPI = 0;


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    const crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${API_key}`;
    getWeatherData(apiURL);

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


/*
Get Weather Data from API
*/
async function getWeatherData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //display function here
        displayWeatherData(data);
    } else {
        console.log("Something get wrong!");
    }
}

const displayWeatherData = (data) => {
    const tempElement = document.getElementById("temperature");
    const weatherImg = document.getElementById("weatherIcon");
    const weatherDesc = document.querySelector("#weatherStatus");
    const windSpeedElement = document.querySelector("#windSpeed");
    tempElement.textContent = `${(data.main.temp).toFixed(1)}°C`;
    iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherImg.src = iconURL;
    weatherImg.alt = `${String(data.weather[0].description).toUpperCase()}`;
    weatherDesc.textContent = data.weather[0].description;
    windSpeedkmh = ((data.wind.speed) * 3.6).toFixed(1);
    windSpeedElement.textContent = `${windSpeedkmh} km/h`;
};

navigator.geolocation.getCurrentPosition(success, error, options);
