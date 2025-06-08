import { useState } from "react";
import WeatherDetails from ".//WeatherDetails";
import WeatherSearch from "./WeatherSearch";
import * as weatherService from "./services/weatherService";

const createSmallWeather = (data) => {
  // if (!data.location) {
  //   throw new Error("no location");
  // }
  return {
    location: data?.location.name,
    temperature: data?.current.temp_c,
    condition: data?.current.condition.text,
    // location: "SG",
    // temperature: "hot",
    // condition: "dying",
  };
};

//     location: {
//       name: "Singapore",
//       region: "",
//       country: "Singapore",
//       lat: 1.293,
//       lon: 103.856,
//       tz_id: "Asia/Singapore",
//       localtime_epoch: 1748411038,
//       localtime: "2025-05-28 13:43",
//     },
//     current: {
//       last_updated_epoch: 1748410200,
//       last_updated: "2025-05-28 13:30",
//       temp_c: 32.3,
//       temp_f: 90.1,
//       is_day: 1,
//       condition: {
//         text: "Partly cloudy",
//         icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         code: 1003,
//       },
//       wind_mph: 5.1,
//       wind_kph: 8.3,
//       wind_degree: 198,
//       wind_dir: "SSW",
//       pressure_mb: 1008.0,
//       pressure_in: 29.77,
//       precip_mm: 0.0,
//       precip_in: 0.0,
//       humidity: 67,
//       cloud: 75,
//       feelslike_c: 39.8,
//       feelslike_f: 103.6,
//       windchill_c: 30.2,
//       windchill_f: 86.4,
//       heatindex_c: 34.7,
//       heatindex_f: 94.5,
//       dewpoint_c: 23.2,
//       dewpoint_f: 73.8,
//       vis_km: 10.0,
//       vis_miles: 6.0,
//       uv: 10.1,
//       gust_mph: 6.5,
//       gust_kph: 10.4,
//     },
//   })
// );

const App = () => {
  const [weather, setWeather] = useState({});
  // const [city, setCity] = useState("");

  const fetchData = async (city) => {
    // console.log(weatherService);
    const data = await weatherService.show(city);
    // console.log("Data:", data);
    setWeather(data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={() => fetchData("Singapore")}>Fetch Weather Data</button>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
