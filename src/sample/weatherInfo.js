import backgroundDay from '../assets/images/day-backgound.png';
import backgroundNight from '../assets/images/night-background.png';
import skyBackgroundDay from '../assets/images/sky-day.png';
import skyBackgroundNight from '../assets/images/sky-night.png';
import cloudsBackgroundDay from '../assets/images/clouds-day.png';
import cloudsBackgroundNight from '../assets/images/clouds-night.png';
import rainBackgroundDay from '../assets/gif/rain-day.gif';
import rainBackgroundNight from '../assets/gif/rain-night.gif';
import thunderstormBackgroundDay from '../assets/images/thunderstorm-day.png';
import thunderstormBackgroundNight from '../assets/images/thunderstorm-night.png';
import snowBackgroundDay from '../assets/images/snow-day.png';
import snowBackgroundNight from '../assets/images/snow-night.png';
import mistBackgroundDay from '../assets/images/mist-day.png';
import mistBackgroundNight from '../assets/images/mist-night.png';
import clearSkyD from '../assets/icons/01d.png';
import clearSkyN from '../assets/icons/01n.png';
import fewCloudsD from '../assets/icons/02d.png';
import fewCloudsN from '../assets/icons/02n.png';
import scatteredCloudsD from '../assets/icons/03d.png';
import scatteredCloudsN from '../assets/icons/03n.png';
import brokenCloudsD from '../assets/icons/04d.png';
import brokenCloudsN from '../assets/icons/04n.png';
import showerRainD from '../assets/icons/09d.png';
import showerRainN from '../assets/icons/09n.png';
import rainD from '../assets/icons/10d.png';
import rainN from '../assets/icons/10n.png';
import thunderstormD from '../assets/icons/11d.png';
import thunderstormN from '../assets/icons/11n.png';
import snowD from '../assets/icons/13d.png';
import snowN from '../assets/icons/13n.png';
import mistD from '../assets/icons/50d.png';
import mistN from '../assets/icons/50n.png';

const weatherInfo = {
   userTime: {
      day: {
         background: backgroundDay,
      },
      night: {
         background: backgroundNight,
      },
   },
   userWeather: {
      '01d': {
         icon: clearSkyD,
         background: skyBackgroundDay,
      },
      '01n': {
         icon: clearSkyN,
         background: skyBackgroundNight,
      },
      '02d': {
         icon: fewCloudsD,
         background: cloudsBackgroundDay,
      },
      '02n': {
         icon: fewCloudsN,
         background: cloudsBackgroundNight,
      },
      '03d': {
         icon: scatteredCloudsD,
         background: cloudsBackgroundDay,
      },
      '03n': {
         icon: scatteredCloudsN,
         background: cloudsBackgroundNight,
      },
      '04d': {
         icon: brokenCloudsD,
         background: cloudsBackgroundDay,
      },
      '04n': {
         icon: brokenCloudsN,
         background: cloudsBackgroundNight,
      },
      '09d': {
         icon: showerRainD,
         background: rainBackgroundDay,
      },
      '09n': {
         icon: showerRainN,
         background: rainBackgroundNight,
      },
      '10d': {
         icon: rainD,
         background: rainBackgroundDay,
      },
      '10n': {
         icon: rainN,
         background: rainBackgroundNight,
      },
      '11d': {
         icon: thunderstormD,
         background: thunderstormBackgroundDay,
      },
      '11n': {
         icon: thunderstormN,
         background: thunderstormBackgroundNight,
      },
      '13d': {
         icon: snowD,
         background: snowBackgroundDay,
      },
      '13n': {
         icon: snowN,
         background: snowBackgroundNight,
      },
      '50d': {
         icon: mistD,
         background: mistBackgroundDay,
      },
      '50n': {
         icon: mistN,
         background: mistBackgroundNight,
      },
   },
};

export default weatherInfo;
