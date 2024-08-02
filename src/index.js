import "./styles/main.scss";
import { searchLocation } from "./utils";

const searchBar = document.getElementById("search-bar");
const submitButton = document.getElementById("submit");

const container = document.getElementById("contentDisplay");
const location = document.createElement("p");
const temperature = document.createElement("h1");
const feelsLike = document.createElement("p");
const winds = document.createElement("p");
const humidty = document.createElement("p");

async function queryInput() {
  const query = searchBar.value.trim();
  if (query) {
    const weatherInfo = await searchLocation(query);

    location.textContent = `✈  ${weatherInfo.address}`;
    temperature.textContent = `${weatherInfo.temperature}°C`;
    feelsLike.textContent = `${weatherInfo.conditions}`;
    winds.textContent = `${weatherInfo.wind}`;
    humidty.textContent = `${weatherInfo.humidity}`;

    container.appendChild(location);
    container.appendChild(temperature);
    container.appendChild(feelsLike);
    container.appendChild(winds);
    container.appendChild(humidty);
  }
}

submitButton.addEventListener("click", queryInput);
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        queryInput();
    }
});
