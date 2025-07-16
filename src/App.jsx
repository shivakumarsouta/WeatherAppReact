import React, { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found!");
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(city);
  };

  const formattedDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      default:
        return "/default.png";
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>

        {weatherData ? (
          <div className="weather_data">
            <h2 className="container_city">{weatherData.name}</h2>
            <img
              className="container_img"
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alt="Weather Icon"
            />
            <h2 className="container_degree">{weatherData.main.temp}°C</h2>
            <h2 className="country_per">{weatherData.weather[0].main}</h2>
          </div>
        ) : (
          <h2 className="container_degree">No data for this.</h2>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Get Data</button>
        </form>
      </div>
    </div>
  );
}

export default App;
