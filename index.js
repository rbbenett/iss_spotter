// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP('67.38.165.77', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }

//   console.log("It worked! Returned Coords:", coords);
// });