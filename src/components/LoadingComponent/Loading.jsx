import React from 'react';
import './Loading.css';
import loadingGif from '../../assets/gif/loading.gif';

const Loading = () => {
   return (
      <div className='LoadingComponent'>
         <figure className='loading-container'>
            <img src={loadingGif} alt='loading' className='loading' />
         </figure>
      </div>
   );
};

export default Loading;
