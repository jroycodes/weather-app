export function sayHello() {
  return "Hello Jonathan Roy!! Welcome to CodeSlabs";
}

export async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kampala,UG?key=GQZ7K4N4622LBVFM3VRGBFK95",
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // function to format and return weather data
    function getWeatherInfo(data) {
      return {
        address: data.address,
        temperature: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        wind: data.currentConditions.windspeed,
        humidity: data.currentConditions.humidity,
      };
    }

    const weatherInfo = getWeatherInfo(data);
    console.log(weatherInfo);

    return weatherInfo;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
