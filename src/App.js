import './App.css';
import useFetch from './hooks/useFetch';
import useCurrentLocation from './hooks/useCurrentLocation';
import generalData from './sample/generalData';
import Card from './components/CardComponent/Card';
import Loading from './components/LoadingComponent/Loading';
import weatherInfo from './sample/weatherInfo';
import { MessageError } from './components/MessageErrorComponent/MessageError';
import { dayOrNight } from './helpers/UserDate';

function App() {
   const { position, isGettingPosition, errPosition } = useCurrentLocation();
   const { data, isLoading, errFetch } = useFetch(
      position
         ? `${generalData.baseUrlByGeolocation}lat=${position.latitude}&lon=${position.longitude}&units=${generalData.units}&appid=${generalData.apiKey}`
         : null
   );

   return (
      <div
         className='App'
         style={
            data
               ? dayOrNight(data.weather[0].icon)
                  ? {
                       backgroundImage: `url(${weatherInfo.userTime.day.background})`,
                    }
                  : {
                       backgroundImage: `url(${weatherInfo.userTime.night.background})`,
                    }
               : {}
         }
      >
         {data && <Card weather={data} />}
         {(isGettingPosition || isLoading) && <Loading />}
         {errPosition?.error && (
            <MessageError errorInfo={generalData.errorLocation} />
         )}
         {errFetch?.error && (
            <MessageError errorInfo={generalData.errorFetch} />
         )}
      </div>
   );
}

export default App;
