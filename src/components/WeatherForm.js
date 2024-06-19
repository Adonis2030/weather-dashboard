import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherForm = ({ onFetchWeather }) => {
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.lat || !location.lon || !date) {
      toast.error("All fields are required.", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: true,
        theme: "dark",
      });
    } else {
      onFetchWeather(location, date);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mb-5 py-5 flex-wrap flex-important justify-center gap-5"
      >
        <input
          type="number"
          placeholder="Latitude"
          value={location.lat}
          onChange={(e) => setLocation({ ...location, lat: e.target.value })}
          className="py-2 px-5 border block rounded-2xl sm:w-45 md:w-45 lg:w-auto w-full"
        />
        <input
          type="number"
          placeholder="Longitude"
          value={location.lon}
          onChange={(e) => setLocation({ ...location, lon: e.target.value })}
          className="py-2 px-5 border block rounded-2xl sm:w-45 md:w-45 lg:w-auto w-full"
        />
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          className="py-2 px-5 border block rounded-2xl sm:w-45 md:w-45 lg:w-auto w-full"
        />
        <button
          type="submit"
          className="py-2 px-5 border block rounded-2xl bg-blue-900 text-white sm:w-45 md:w-45 lg:w-auto w-full"
        >
          View Weather
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default WeatherForm;
