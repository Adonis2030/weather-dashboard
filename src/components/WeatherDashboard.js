import React, { useState } from "react";
import { fetchWeatherData } from "../services/weatherService";
import WeatherForm from "./WeatherForm";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchWeather = async (location, date) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeatherData(location.lat, location.lon, date);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <WeatherForm onFetchWeather={handleFetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Weather Data</h2>
          {/* Display weather data here */}
          <p>Max Temperature: {weatherData.daily.temperature_2m_max[0]}</p>
          <p>
            Precipitation: {weatherData.daily.precipitation_probability_max[0]}
          </p>
          <p>Max Wind Speed: {weatherData.daily.wind_speed_10m_max[0]}</p>
          {/* Add more data fields as necessary */}
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
