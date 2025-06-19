import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Getweather.css";

const Getweather = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8088/weather/api/${city}`);
      navigate("/weather", { state: { weatherData: response.data } });
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit} className="weather-form">
        <h2 className="weather-heading">🌤️ Weather Finder</h2>
        <label htmlFor="city" className="weather-label">Enter City</label>
        <input
          type="text"
          id="city"
          placeholder="e.g., London"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="weather-button">Get Weather</button>
      </form>
    </div>
  );
};

export default Getweather;
