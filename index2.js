//Require and call the function fetchMyIP in this file.
// call .then on its return value.
// This then call should take in a callback which accepts the response body and, for now, prints it to the screen.

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes  } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));



