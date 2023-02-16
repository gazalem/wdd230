function celsiusToFahrenheit(celsiusTemp) {
    return (celsiusTemp * 1.8) + 32;
};

function fahrenheitToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) / 1.8;
};

function kmhToMph(speedKmh) {
    return speedKmh * 0.621371;
};

function windChill(fahrenheitTemp, speedMph) {
    if (fahrenheitTemp <= 50 && speedMph >= 3) {
        return (35.74 + (0.6215 * fahrenheitTemp) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * fahrenheitTemp * Math.pow(speedMph, 0.16)));
    } else {
        return "N/A";
    }
}
