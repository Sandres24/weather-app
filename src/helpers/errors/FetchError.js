export class FetchError extends Error {
   constructor(message, err, status, statusText, response) {
      super(message);
      this.name = 'Fetch Error';
      this.error = err;
      this.status = status;
      this.statusText = statusText;
      this.response = response;
   }
}
