const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',  (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`,  (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const lat = JSON.parse(body).latitude;
    const long = JSON.parse(body).longitude;
    let obj = {
      latitude: lat,
      longitude: long
    };
    
    callback(null, obj);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };