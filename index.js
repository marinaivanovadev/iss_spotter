const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP, fetchISSFlyoverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  } else {
    console.log("It worked! Returned IP:", ip);
    fetchCoordsByIP(ip, (error, data) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Coordinates:", data);
        fetchISSFlyoverTimes(data, (error, data) => {
          if (error) {
            console.log("Error:", error);
          } else {
            console.log('It worked! Returned flyover times:' , data);
          }
        });
      }
    });
  }
});