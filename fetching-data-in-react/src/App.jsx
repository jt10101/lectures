// src/App.jsx
import { useState } from "react";

async function getData() {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=e07a475017f64a7b90d50654252705&q=Singapore&aqi=no";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.current.temp_c;
  } catch (error) {
    // console.error(error.message);
  }
}

// getData();

const App = () => {
  const x = getData();
  console.log(x);
  const [weather, setWeather] = useState("???");
  const handleClick = () => {
    let c = getData();
    setWeather(c);
  };
  return (
    <>
      <h1>Weather temp is {weather}.</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
