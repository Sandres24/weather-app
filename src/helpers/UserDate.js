export const from24To12Format = (date) => {
   let hours = date.getHours();
   const minutes = date.getMinutes();
   if (hours === 0) hours = 12;
   if (hours > 12) hours = hours - 12;
   return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
   }`;
};

export const secondsFormat = (date) => {
   const seconds = date.getSeconds();
   return `${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const dayOrNight = (codeTime) => {
   const currentTimeSet = codeTime[codeTime.length - 1];
   if (currentTimeSet === 'd') return true;
   if (currentTimeSet === 'n') return false;
};

export const dayOrNightByHour = (date) => {
   const hours = date.getHours();
   if (hours < 12) return 'a.m';
   return 'p.m';
};
