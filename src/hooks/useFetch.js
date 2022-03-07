import { useState, useEffect } from 'react';
import axios from 'axios';
import { FetchError } from '../helpers/errors/FetchError';

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [errFetch, setErrFetch] = useState(null);

   useEffect(() => {
      if (!url) return;

      let isMounted = true;

      setIsLoading(true);

      axios.interceptors.response.use(
         (response) => {
            return response.data;
         },
         (error) => {
            const customError = new FetchError(
               'An Error has ocurred during the fetch!',
               true,
               error.response.status,
               error.response.statusText
                  ? error.response.statusText
                  : 'Error getting the data!',
               error.response
            );
            console.error(customError);
            return Promise.reject(customError);
         }
      );

      axios
         .get(url)
         .then((res) => {
            if (isMounted) {
               setData(res);
               setErrFetch({ error: false });
            }
         })
         .catch((err) => {
            if (isMounted) {
               const error = new FetchError(
                  err.message,
                  err.error,
                  err.status,
                  err.statusText,
                  err.response
               );
               setErrFetch(error);
            }
         })
         .finally(() => setIsLoading(false));

      return () => (isMounted = false);
   }, [url]);

   return {
      data,
      isLoading,
      errFetch,
   };
};

export default useFetch;
