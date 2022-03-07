export class currentLocationError extends Error {
   constructor(message, err, description) {
      super(message);
      this.name = 'Location Error';
      this.error = err;
      this.description = description;
   }
}
