/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {

      const data = JSON.parse(body);
      const ip = data.ip;
      callback(null, ip);
    }
  });
};
/**
 * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
 * Input:
 *   - The ip (ipv4) address (string)
 *   - A callback (to pass back an error or the lat/lng object)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The lat and lng as an object (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' }
 */

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.success) {
      const msg = `Success Code was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(msg), null);
      return;
    } else {
      const lat = data.latitude;
      const lon = data.longitude;
      const latLon = {lat, lon};
      callback(null, latLon);
    }
  });

};

const fetchFlyoverTimes = function(latLng, alt) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`, (error, response, body) => {

  });

};

module.exports = { fetchMyIP, fetchCoordsByIP };