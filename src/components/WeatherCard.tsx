// src/components/WeatherCard.tsx
import React from 'react';

interface WeatherCardProps {
  city: string;
  time: string;
  temperature: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
  theme: 'day' | 'night'; // To switch between day and night
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  time,
  temperature,
  windSpeed,
  sunrise,
  sunset,
  theme,
}) => {
  return (
    <div className={`weather-card ${theme}`}>
      <div className="weather-header">
        <h2>{city}</h2>
        <p>{time}</p>
      </div>
      <div className="weather-info">
        <h1>{temperature}°C</h1>
        <p>{theme === 'day' ? 'Good Morning' : 'Good Night'}</p>
      </div>
      <div className="weather-details">
        <div className="detail">
          <p>Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div className="detail">
          <p>Wind</p>
          <p>{windSpeed} m/s</p>
        </div>
        <div className="detail">
          <p>Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
