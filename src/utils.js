export async function searchLocation(query) {
  const apiEndPoint =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const apiKey = "GQZ7K4N4622LBVFM3VRGBFK95";

  const clock = document.getElementById("contentDisplay");
  
  const url = `${apiEndPoint}/${encodeURIComponent(query)}?key=${apiKey}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log("Success!!");
      clock.style.backgroundColor = "yellowGreen";
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