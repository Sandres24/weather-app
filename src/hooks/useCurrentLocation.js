import { useState, useEffect } from 'react';
import { currentLocationError } from '../helpers/errors/currentLocationError';

const useCurrentLocation = () => {
   const [position, setPosition] = useState(null);
   const [isGettingPosition, setIsGettingPosition] = useState(false);
   const [errPosition, setErrPosition] = useState(null);

   const onSucces = (pos) => {
      setPosition({
         latitude: pos.coords.latitude,
         longitude: pos.coords.longitude,
      });
      setIsGettingPosition(false);
      setErrPosition({ error: false });
   };

   const onError = (err) => {
      setIsGettingPosition(false);
      const error = new currentLocationError('Access denied!', true, err);
      setErrPosition({ error: true, description: error });
      console.error(error);
   };

   useEffect(() => {
      let isMounted = true;

      if (isMounted) setIsGettingPosition(true);

      const getPosition = () => {
         if (isMounted)
            navigator.geolocation.getCurrentPosition(onSucces, onError);
      };

      if (navigator.geolocation) {
         getPosition();
      } else {
         const error = new currentLocationError(
            'Geolocation Error!',
            true,
            'Your browser does not support geolocation feature'
         );
         if (isMounted) setErrPosition(error);
         console.error(error);
      }
      return () => (isMounted = false);
   }, []);

   return {
      position,
      isGettingPosition,
      errPosition,
   };
};

export default useCurrentLocation;
