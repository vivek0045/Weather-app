// WeatherDisplay.js
import React from 'react';
import thermometer from '../image/thermometer.svg'
import humidityimg from '../image/humidity.svg';

const WeatherDisplay = ({ weatherData, onBackClick }) => {
  const { temperature, weatherCondition, location, feelsLike, humidity, icon } = weatherData;

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center">
          <button onClick={onBackClick} className="text-blue-500 text-2xl">
            ←
          </button>
          <h1 className="text-xl text-center font-bold mb-4 text-blue-500">Weather App</h1>
           <div></div>
        </div>
        <div className=' h-[1px] w-[300px] bg-slate-300'></div>
        <div className="flex flex-col items-center py-4">
          <img src={icon} alt="Weather Icon" className="w-24 h-24" />
          <h2 className="text-6xl font-bold">{temperature}°C</h2>
          <p className="text-gray-500 text-lg">{weatherCondition}</p>
          <p className="text-gray-500 text-sm mb-4">{location}</p>
          <div className=' h-[1px] w-[300px] bg-slate-300'></div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center justify-center w-[50%]">
                <img src={thermometer} alt="Thermometer" className="w-6 h-6 mr-1" />
                    <div>
                        <span className="text-gray-500 text-sm"> {feelsLike}°C</span>
                        <p className=' text-[10px]'>Feels like</p>
                    </div>
            </div>
            <div className=' w-[1px] h-[70px] bg-slate-300'></div>
            <div className="flex items-center justify-center w-[50%]">
              <img src={humidityimg} alt="Humidity" className="w-6 h-6 mr-1" />
              <div>
                <span className="text-gray-500 text-sm">{humidity}%</span>
                <p className=' text-[10px]'>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
