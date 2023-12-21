// LocationInput.js
import React, { useState } from 'react';

const LocationInput = ({ onCitySubmit, onGetDeviceLocation }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCitySubmit(city);
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl text-center font-bold mb-4 text-blue-500">Weather App</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex justify-center items-center'>
            <input
              type="text"
              placeholder="Enter city name"
              className="w-full p-2 border border-gray-300 rounded text-center input-placeholder-center"
              value={city}
              onChange={handleCityChange}
              autoFocus
            />
          </div>

          <div className=' flex justify-center items-center'>
            <div className=' h-[1px] w-[140px] bg-slate-300'></div>
            <div className="text-center text-sm text-slate-400 ml-2 mr-2 ">or</div>
            <div className=' h-[1px] w-[140px] bg-slate-300'></div>
          </div>
          
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            onClick={onGetDeviceLocation}
          >
            Get Device Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationInput;
