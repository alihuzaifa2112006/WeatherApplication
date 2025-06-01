import React, { useState } from 'react';
import './Application.css';
import axios from 'axios';

const Application = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    current: {
      temp_c: 0,
      humidity: 0,
      condition: { icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" }
    },
    location: {
      name: "City Name"
    }
  });
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=683a627da1e44a86bf542145251501&q=${city}`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City is not found');
    }
  };

  return (
    <div className="container">
      <div className="AppBox">
        <h2>WeatherX</h2>
        <p>Enter Your City Name To Get Updated With Your Area Weather.</p>

        <div className="Submisiion">
          <input
            type="text"
            placeholder="Enter Your City Name"
            onChange={(e) => {
              setCity(e.target.value);
              setError('');
            }}
            value={city}
          />
          <a onClick={getWeather} href="#">Enter</a>

          {error && alert("City Not FOund")}
        </div>

        {weather && !error && (
          <>
            <img
              src={`http:${weather.current.condition.icon}`}
              alt="icon"
              className="w-40"
            />
            <h2>{weather.current.temp_c}°C</h2>
            <div className="boxes flex">
              <div className="left">
                <h3>Humidity: {weather.current.humidity}%</h3>
              </div>
              <div className="right">
                {weather.location.name}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Application;
