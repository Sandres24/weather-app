import errorLocationImage from '../assets/icons/error-location.png';
import errorFetchImage from '../assets/icons/error-fetch.png';

const generalData = {
   baseUrlByGeolocation: 'https://api.openweathermap.org/data/2.5/weather?',
   units: 'metric',
   apiKey: '87cd4480273eaf6d6cb73b991b6391a3',
   errorLocation: {
      image: errorLocationImage,
      message:
         'It seems like We had a problem getting your ubication, check if your browser supports geolocation feature, if It does, then check the permissions clicking in your navigator...',
   },
   errorFetch: {
      image: errorFetchImage,
      message:
         'Sorry, there was an error while getting the data, try freshing your browser.',
   },
};

export default generalData;
