// App.js
import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  console.log(API_KEY);
  const fetchWeatherDataByCity = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }
      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp,
        weatherCondition: data.weather[0].description,
        location: `${data.name}, ${data.sys.country}`,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    } catch (error) {
      console.error('Error fetching weather by city:', error);
      
    }
  };

  const fetchWeatherDataByLocation = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }
      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp,
        weatherCondition: data.weather[0].description,
        location: `${data.name}, ${data.sys.country}`,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    } catch (error) {
      console.error('Error fetching weather by location:', error);
  
    }
  };
  

  const handleCitySubmit = (city) => {
    fetchWeatherDataByCity(city);
  };

  const handleGetDeviceLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherDataByLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error obtaining location:', error);
          
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
     
    }
  };

  const handleBackClick = () => {
    setWeatherData(null);
  };

  return (
    <div>
      {!weatherData ? (
        <LocationInput
          onCitySubmit={handleCitySubmit}
          onGetDeviceLocation={handleGetDeviceLocation}
        />
      ) : (
        <WeatherDisplay
          weatherData={weatherData}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default App;
