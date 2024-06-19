import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WeatherDashboard from "./WeatherDashboard";
import { fetchWeatherData } from "../services/weatherService";

jest.mock("../services/weatherService");

test("renders Weather Dashboard", () => {
  render(<WeatherDashboard />);
  const linkElement = screen.getByText(/Weather Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test("fetches weather data", async () => {
  fetchWeatherData.mockResolvedValue({
    daily: {
      weather_code: [95],
      precipitation_sum: [5.5],
      daylight_duration: [64386.58],
      sunrise: ["2024-06-19T03:28"],
      sunset: ["2024-06-19T21:22"],
      sunshine_duration: [41274.94],
      temperature_2m_max: [29.1],
      temperature_2m_min: [19.3],
      time: ["2024-06-19"],
      wind_speed_10m_max: [21.7],
    },
    daily_units: {
      daylight_duration: "s",
      precipitation_sum: "mm",
      sunrise: "iso8601",
      sunset: "iso8601",
      sunshine_duration: "s",
      temperature_2m_max: "°C",
      temperature_2m_min: "°C",
      time: "iso8601",
      weather_code: "wmo code",
      wind_speed_10m_max: "km/h",
    },
    elevation: 78,
    generationtime_ms: 0.4138946533203125,
    latitude: 57,
    longitude: 54,
    timezone: "Europe/Samara",
    timezone_abbreviation: "+04",
    utc_offset_seconds: 14400,
  });

  render(<WeatherDashboard />);

  fireEvent.change(screen.getByPlaceholderText(/Latitude/i), {
    target: { value: "57" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Longitude/i), {
    target: { value: "54" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Date/i), {
    target: { value: "2022-06-19" },
  });

  fireEvent.click(screen.getByText(/View Weather/i));

  const windSpeed = await screen.findByText(/Wind Speed/i);
  await waitFor(() => expect(windSpeed).toBeInTheDocument());
});
