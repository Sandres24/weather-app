import './Card.css';
import React from 'react';
import weatherInfo from '../../sample/weatherInfo';
import WeatherBox from '../WeatherBoxComponent/WeatherBox';

const Card = ({ weather }) => {
   return (
      <div
         className='CardComponent'
         style={{
            backgroundImage: `url(${
               weatherInfo.userWeather[weather.weather[0].icon].background
            })`,
         }}
      >
         <WeatherBox weather={weather} />
      </div>
   );
};

export default Card;
