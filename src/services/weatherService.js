import axios from "axios";

const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const fetchWeatherData = async (latitude, longitude, date) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        latitude,
        longitude,
        start_date: date,
        end_date: date,
        daily:
          "weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_probability_max",
        timezone: "auto",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
};
