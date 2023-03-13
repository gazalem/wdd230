const crd = "";
const API_key = "f9741859385f04f6e56511b6d2553309";
const part = "minutely,hourly,daily,alerts"
const units = "metric"
let lat = "";
let lon = "";


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

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
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
        console.log(data);
        displayWeatherData(data);
    } else {
        console.log("Something get wrong!");
    }
}

const displayWeatherData = (data) => {
    const currentWeatherElement = document.getElementById("current-temp");
    const iconWeatherElement = document.getElementById("weather-icon");
    const weatherDesc = document.querySelector("figcaption");
    currentWeatherElement.textContent = data.main.temp;
    iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log(`iconURL: ${iconURL}`);
    iconWeatherElement.src = iconURL;
    iconWeatherElement.alt = data.weather[0].description;
    weatherDesc.textContent = data.weather[0].description;
}

//navigator.geolocation.getCurrentPosition(success, error, options);