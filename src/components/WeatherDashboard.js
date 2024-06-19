import React, { useState } from "react";
import { fetchWeatherData } from "../services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";
import WeatherMain from "./WeatherMain";
import WeatherMap from "../data";
import SvgGroup from "./svgGroup";
import Loading from "./Loading";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = async (location, date) => {
    setLoading(true);

    try {
      const data = await fetchWeatherData(location.lat, location.lon, date);

      if (data && data.daily) {
        setWeatherData(data);
        const weatherCode = data.daily.weather_code;
        weatherChange(weatherCode);
      } else {
        toast.error("Invalid data format received", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: true,
          theme: "dark",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (datetime) => datetime.split("T")[1].slice(0, 5);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const weatherChange = (weatherCode) => {
    const defaultWeather = { status: "Unknown", icon: null };

    const { status, icon } = WeatherMap[weatherCode] || defaultWeather;

    setWeatherStatus(status);
    setWeatherIcon(icon);
  };

  return (
    <div className="container mx-auto lg:px-lg md:px-md sm:px-sm p-sm">
      <h1 className="text-3xl font-bold text-center text-white py-5">
        Weather Dashboard
      </h1>
      <WeatherForm onFetchWeather={handleFetchWeather} />
      {loading && <Loading />}
      <ToastContainer />
      {weatherData && (
        <div className="grid grid-cols-5 gap-4">
          <div className="border rounded-lg grid col-span-5 lg:col-span-2 md:col-span-2 sm:col-span-5 bg-gradient-to-b from-blue-500 to-blue-900 py-5">
            <WeatherMain
              icon={weatherIcon}
              LocationIcon={SvgGroup.Location}
              CalendarIcon={SvgGroup.CalendarIcon}
              weatherStatus={weatherStatus}
              location={weatherData.timezone}
              date={weatherData.daily.time[0].split("T")[0]}
              tempMax={weatherData.daily.temperature_2m_max}
              tempMin={weatherData.daily.temperature_2m_min}
              tempMaxUnit={weatherData.daily_units.temperature_2m_max}
              tempMinUnit={weatherData.daily_units.temperature_2m_min}
            />
          </div>
          <div className="col-span-5 lg:col-span-3 md:col-span-3 sm:col-span-5 grid grid-cols-2 gap-5">
            <WeatherCard
              icon={SvgGroup.WindSpeed}
              title="Wind Speed"
              value={`${weatherData.daily.wind_speed_10m_max} ${weatherData.daily_units.wind_speed_10m_max}`}
            />
            <WeatherCard
              icon={SvgGroup.Precipitation}
              title="Precipitation"
              value={`${weatherData.daily.precipitation_sum} ${weatherData.daily_units.precipitation_sum}`}
            />
            <WeatherCard
              icon={SvgGroup.Sunrise}
              title="Sunrise"
              value={formatTime(weatherData.daily.sunrise[0])}
            />
            <WeatherCard
              icon={SvgGroup.Sunset}
              title="Sunset"
              value={formatTime(weatherData.daily.sunset[0])}
            />
            <WeatherCard
              icon={SvgGroup.Sunshine}
              title="Sunshine"
              value={formatDuration(weatherData.daily.sunshine_duration)}
            />
            <WeatherCard
              icon={SvgGroup.DayLight}
              title="Daylight"
              value={formatDuration(weatherData.daily.daylight_duration)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
