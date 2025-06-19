import React from "react";
import { useLocation } from "react-router-dom";
import "./Weather.css";

const Weather = () => {
  const location = useLocation();
  const data = location.state?.weatherData;

  if (!data || !data.main || !data.weather) {
    return <p className="no-data">No weather data available.</p>;
  }

  return (
    <div className="weather-card">
      <h2>🌤️ Weather in {data.name}</h2>
      <p><strong>Temperature:</strong> {data.main.temp} °C</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Description:</strong> {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
