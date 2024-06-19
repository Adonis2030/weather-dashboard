# Weather Dashboard

## Description

The Weather Dashboard is a React application that allows users to fetch and display weather data for a specific location and date using the Open Meteo API. The dashboard includes features such as input fields for latitude, longitude, and date, and displays weather information like temperature, precipitation, wind speed, sunrise, sunset, and more in a user-friendly format.

## Features

- Fetch and display weather data for a given location (latitude and longitude) and date.
- Input fields for latitude, longitude, and date.
- Display weather information including:
  - Max Temperature
  - Min Temperature
  - Precipitation
  - Max Wind Speed
  - Sunrise
  - Sunset
  - Daylight Duration
  - Sunshine Duration
  - Weather Code
- Responsive design using Tailwind CSS.
- Error handling and loading states.
- Unit tests with Jest and React Testing Library.

## Technologies Used

- React
- Tailwind CSS
- Toastify Notification Library
- Axios
- Open Meteo API
- Jest
- React Testing Library

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

- The application will run at `http://localhost:3000`.

## Usage

1. Enter the latitude and longitude of the desired location
2. Select the date for which you want to fetch the weather data.
3. Click the "View Weather" button to retrieve and display the weather information.

![image](https://github.com/Adonis2030/weather-dashboard/assets/133148501/e0cad2c6-d658-496d-8a5c-44107a4f5921)
![image](https://github.com/Adonis2030/weather-dashboard/assets/133148501/9d13b2c4-e1b2-4b7d-a7bc-04bcc517134e)
![image](https://github.com/Adonis2030/weather-dashboard/assets/133148501/354a79ca-0e82-49f4-84dd-ae81879c8681)

## Testing

To run the test, use the following command:

    ```
    npm test
    ```

The test use Jest and React Testing Library to verify that the application renders correctly and handles user interactions properly.

- App.test.js
- WeatherDashboard.test.js
- WeatherForm.test.js

## API Reference

- This application uses the **Open Meteo API** to fetch weather data.
