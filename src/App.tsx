// src/App.tsx
import React from 'react';
import WeatherCard from './components/WeatherCard';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <WeatherCard
        city="Karachi"
        time="Monday 7:00 AM"
        temperature={22}
        windSpeed={4}
        sunrise="7:00 AM"
        sunset="7:00 PM"
        theme="day" // Switch this to 'night' for the night theme
      />
      <WeatherCard
        city="Karachi"
        time="Monday 7:30 PM"
        temperature={20}
        windSpeed={4}
        sunrise="7:00 AM"
        sunset="7:00 PM"
        theme="night"
      />
    </div>
  );
};

export default App;
