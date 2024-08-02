export async function searchLocation(query) {
  const apiEndPoint =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const apiKey = "GQZ7K4N4622LBVFM3VRGBFK95";
  
  const url = `${apiEndPoint}/${encodeURIComponent(query)}?key=${apiKey}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    function getWeatherInfo(data) {
      const returnedObj = {
        address: data.address,
        temperature: Math.round(data.currentConditions.temp),
        conditions: data.currentConditions.conditions,
        wind: Math.round(data.currentConditions.windspeed),
        humidity: Math.round(data.currentConditions.humidity),
      };
      return returnedObj;
    }

    const weatherInfo = getWeatherInfo(data);
    return weatherInfo;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// export function sayHello() {
//   return "Hello Jonathan Roy!! Welcome to CodeSlabs";
// }

// export async function fetchWeatherData() {
//   try {
//     const response = await fetch(
//       "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris?key=GQZ7K4N4622LBVFM3VRGBFK95",
//       { mode: "cors" }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();

//     // function to format and return weather data
//     function getWeatherInfo(data) {
//       return {
//         address: data.address,
//         temperature: data.currentConditions.temp,
//         conditions: data.currentConditions.conditions,
//         wind: data.currentConditions.windspeed,
//         humidity: data.currentConditions.humidity,
//       };
//     }

//     const weatherInfo = getWeatherInfo(data);
//     console.log(weatherInfo);

//     return weatherInfo;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
