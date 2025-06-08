// src/services/weatherService.js

const API_KEY =
  "https://api.weatherapi.com/v1/current.json?key=e07a475017f64a7b90d50654252705&q=Singapore&aqi=no";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=e07a475017f64a7b90d50654252705`;

// src/services/weatherService.js

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
