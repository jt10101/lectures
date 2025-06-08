import { useState } from "react";

export default function WeatherSearch({ fetchData }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    fetchData(city);
    setCity("");
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a city:]
          <input
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
