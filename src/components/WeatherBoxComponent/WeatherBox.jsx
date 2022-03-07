import './WeatherBox.css';
import React, { useState } from 'react';
import {
   celsiusToFahrenheit,
   fahrenheitToCelsius,
} from '../../helpers/temperatureConvert';
import { toUpperCaseLetter } from '../../helpers/toUpperCaseLetter';
import weatherInfo from '../../sample/weatherInfo';
import Clock from '../ClockComponent/Clock';

const WeatherBox = ({ weather }) => {
   const [temperature, setTemperature] = useState([
      Math.round(weather.main.temp),
      true,
   ]);

   return (
      <div className='WeatherBoxComponent'>
         <div className='first-container'>
            <div className='temperature'>
               <Clock />
               <h2 className='wheater-degrees-farenheit'>
                  {temperature}
                  <span className='degrees-farenheit'>
                     {temperature[1] ? '°C' : '°F'}
                  </span>
               </h2>
            </div>
            <div className='weather-icon-container'>
               <figure className='weather-icon'>
                  <img
                     src={weatherInfo.userWeather[weather.weather[0].icon].icon}
                     alt='cloudy weather'
                     className='weather-icon-image'
                  />
               </figure>
               <p className='text-info current-weather'>
                  {toUpperCaseLetter(weather.weather[0].description)}
               </p>
            </div>
         </div>
         <div className='second-container'>
            <h1 className='current-city-country'>
               {weather.name}, {weather.sys.country}
            </h1>
            <button
               className='button-convert'
               onClick={() => {
                  temperature[1]
                     ? setTemperature([
                          celsiusToFahrenheit(temperature[0]),
                          !temperature[1],
                       ])
                     : setTemperature([
                          fahrenheitToCelsius(temperature[0]),
                          !temperature[1],
                       ]);
               }}
            >
               {temperature[1] ? '°C to °F' : '°F to °C'}
            </button>
         </div>
         <div className='third-container'>
            <div className='weather-info wind-speed'>
               <p className='text-info'>
                  <i className='fa-solid fa-wind measure-icon'></i>{' '}
                  {weather.wind.speed} m/s
               </p>
            </div>
            <div className='weather-info clouds'>
               <p className='text-info'>
                  <i className='fa-solid fa-cloud measure-icon'></i>{' '}
                  {weather.clouds.all}%
               </p>
            </div>
            <div className='weather-info preassure'>
               <p className='text-info'>
                  <i className='fa-solid fa-temperature-three-quarters measure-icon'></i>{' '}
                  {weather.main.pressure} mb
               </p>
            </div>
            <div className='weather-info humidity'>
               <p className='text-info'>
                  <i className='fa-solid fa-droplet measure-icon'></i>{' '}
                  {weather.main.humidity}%
               </p>
            </div>
         </div>
      </div>
   );
};

export default WeatherBox;
