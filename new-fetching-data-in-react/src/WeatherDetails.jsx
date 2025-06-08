// src/components/WeatherDetails/WeatherDetails.jsx

const WeatherDetails = ({ weather }) => {
  // const { location, temperature, condition } = weather;
  if (!weather.location) {
    return null;
  }

  return (
    <section>
      <h2>Weather Details</h2>
      <p>Location : {weather.location.name} </p>
      <p>Temperature: {weather.current.temp_c}</p>
      <p>Condition: {weather.current.condition.text} </p>
    </section>
  );
};

export default WeatherDetails;
