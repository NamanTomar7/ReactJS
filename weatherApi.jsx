import { useState, useEffect } from "react";
import "./EmailPassStyle.css"; // Adjust the path if needed

export default function WeatherApp() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "b9797df66c624004a6341942252207";

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.city.value.trim();
    if (input) {
      setCity(input);
    }
    e.target.reset();
  };

  return (
    <div className="container">
      <h1>🌦️ Weather App (WeatherAPI)</h1>
      <form onSubmit={handleSearch}>
        <input name="city" placeholder="Enter city..." />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.location.name}, {weather.location.region} ({weather.location.country})</h2>
          <p>📅 Date and time: {weather.location.localtime}</p>
          <p>🌡️ Temperature: {weather.current.temp_c}°C</p>
          <p>🌥️ Condition: {weather.current.condition.text}</p>
          <p>💨 Wind Direction: {weather.current.wind_dir}</p>
          <img src={weather.current.condition.icon} alt="icon" />
        </div>
      )}

      {weather?.current?.air_quality && (
        <div className="air-quality">
          <h3>Air Quality:</h3>
          <p>CO: {weather.current.air_quality.co}</p>
          <p>O₃: {weather.current.air_quality.o3}</p>
          <p>US EPA Index: {weather.current.air_quality["us-epa-index"]}</p>
        </div>
      )}
    </div>
  );
}
