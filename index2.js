//Require and call the function fetchMyIP in this file.
// call .then on its return value.
// This then call should take in a callback which accepts the response body and, for now, prints it to the screen.

// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes  } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));



const { nextISSTimesForMyLocation } = require('./iss_promised');


const printFlies = function(flies) {
  for (const pass of flies) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation()
  .then((flies) => {
    printFlies(flies);
  })
  .catch((error) => {
    console.log("It didn't work!", error.message);
  });
