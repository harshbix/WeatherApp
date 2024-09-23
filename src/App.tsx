import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the type for weather data
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const App = () => {
  // Provide a more specific type for weatherData
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Specify type
  const [city, setCity] = useState("London"); // Example city

  // API Key and URL setup
  const apiKey = "8d37a26300e940e7ae385000242309";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(url); // You can also use fetch()
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  // Fetch the weather data when the component mounts
  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>

      {/* Input to change city */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {/* Display weather data */}
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;
