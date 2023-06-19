// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP, fetchISSFlyoverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } else {
//     console.log("It worked! Returned IP:", ip);
//     fetchCoordsByIP(ip, (error, data) => {
//       if (error) {
//         console.log("Error:", error);
//       } else {
//         console.log("Coordinates:", data);
//         fetchISSFlyoverTimes(data, (error, data) => {
//           if (error) {
//             console.log("Error:", error);
//           } else {
//             console.log('It worked! Returned flyover times:' , data);
//           }
//         });
//       }
//     });
//   }
// });


const printFlies = function(flies) {
  for (const pass of flies) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, flies) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printFlies(flies);
});