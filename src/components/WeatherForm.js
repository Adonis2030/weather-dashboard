import React, { useState } from "react";

const WeatherForm = ({ onFetchWeather }) => {
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchWeather(location, date);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Latitude"
        value={location.lat}
        onChange={(e) => setLocation({ ...location, lat: e.target.value })}
        className="mr-2 p-2 border"
      />
      <input
        type="text"
        placeholder="Longitude"
        value={location.lon}
        onChange={(e) => setLocation({ ...location, lon: e.target.value })}
        className="mr-2 p-2 border"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Fetch Weather
      </button>
    </form>
  );
};

export default WeatherForm;
