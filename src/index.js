import { sayHello } from "./utils";
import { fetchWeatherData } from "./utils";
import "./styles/main.scss";

fetchWeatherData();
console.log(sayHello());