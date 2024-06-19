import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WeatherForm from "./WeatherForm";
import "@testing-library/jest-dom/extend-expect";

test("renders Weather Form", () => {
  render(<WeatherForm onFetchWeather={() => {}} />);
  const latInput = screen.getByPlaceholderText(/Latitude/i);
  expect(latInput).toBeInTheDocument();
  const lonInput = screen.getByPlaceholderText(/Longitude/i);
  expect(lonInput).toBeInTheDocument();
  const dateInput = screen.getByPlaceholderText(/Date/i);
  expect(dateInput).toBeInTheDocument();
  const fetchButton = screen.getByText(/View Weather/i);
  expect(fetchButton).toBeInTheDocument();
});

test("calls onFetchWeather with input values", () => {
  const mockFetchWeather = jest.fn();
  render(<WeatherForm onFetchWeather={mockFetchWeather} />);

  fireEvent.change(screen.getByPlaceholderText(/Latitude/i), {
    target: { value: "35" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Longitude/i), {
    target: { value: "139" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Date/i), {
    target: { value: "2022-06-18" },
  });

  fireEvent.click(screen.getByText(/View Weather/i));

  expect(mockFetchWeather).toHaveBeenCalledWith(
    { lat: "35", lon: "139" },
    "2022-06-18"
  );
});
