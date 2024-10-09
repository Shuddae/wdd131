
const today = new Date();
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

function calculateHumidity(temp, humidity) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(humidity, 0.16) + 0.3965 * temp * Math.pow(humidity   , 0.16));
}

const temp = 25;
const wind = 23;
const humid = 24;
let humidity;

if (temp <= 10 && humidity > 4.8) {
    humidity = calculateHumidity(temp, humidity);
} else {
    humid;
}

document.querySelector(".weather dl").innerHTML += `
    <dt>Temperature:</dt>
    <dd>${temp}°C</dd>
    <dt>Wind:</dt>
    <dd>${wind} km/h</dd>
    <dt>Precipitation:</dt>
    <dd>${precicipitation}</dd>
    <dt>Humidity:</dt>
    <dd>${humid}</dd>
`;