import { useEffect, useState } from 'react';

const useTimer = (delay) => {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
      let timer = null;

      timer = setInterval(() => {
         setDate(new Date());
      }, delay);

      return () => clearInterval(timer);
   }, [delay]);

   return { date };
};

export default useTimer;
