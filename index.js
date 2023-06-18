const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

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
        console.log("Data:", data);
      }
    });
  }
});