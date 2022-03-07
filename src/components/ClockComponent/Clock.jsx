import './Clock.css';
import React from 'react';
import useTimer from '../../hooks/useTimer';
import {
   dayOrNightByHour,
   from24To12Format,
   secondsFormat,
} from '../../helpers/UserDate';

const Clock = () => {
   const { date } = useTimer(1000);

   return (
      <p className='text-info weather-time'>
         {from24To12Format(date)}
         <span className='wheather-subtime'>
            <span className='am-pm'>{dayOrNightByHour(date)}</span>
            <span className='seconds'>{secondsFormat(date)}</span>
         </span>
      </p>
   );
};

export default Clock;
