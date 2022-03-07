import './MessageError.css';
import React from 'react';

export const MessageError = ({ errorInfo }) => {
   return (
      <div className='MessageErrorComponent'>
         <figure className='acces-denied-container'>
            <img
               src={errorInfo.image}
               alt='Acces denied'
               className='acces-denied-image'
            />
         </figure>
         <h2 className='message-error'>{errorInfo.message}</h2>
      </div>
   );
};
