//require request
const request = require("request");

//function to fetch IP from IPify API
const fetchIP = (callback) => {
  request("https://api.ipify.org?format=json", (error, response, data) => {
    //if error send error data to callback param 1
    if (error) {
      return callback(error, null)
    }
    //if request error send error data to callback param 1
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    //parse data for IP
      const IP = JSON.parse(data)
      //input IP to callback param 2
      callback(null, IP.ip);
  });
};


//Function to fetch Coordinates 
const fetchLocation = (IP, callback) => {
  request(`https://freegeoip.app/json/${IP}`, (error, response, data) => {
    //if error send error data to callback param 1
    if (error) {
      return callback(error, null)
    }
    //if request error send error data to callback param 1
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    //parse data for coordinates
      const {latitude, longitude} = JSON.parse(data)
      //input coordinates to callback param 2
      callback(null, {latitude, longitude});
  });
};

//http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON


//Function that fetches ISS fly over times by coordinates
const fetchISSFlyOver = (location, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}`, (error, response, data) => {
    //if error send error data to callback param 1
    if (error) {
      return callback(error, null)
    }
    //if request error send error data to callback param 1
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    //parse data for flyOver Times
      const flyOverArray = JSON.parse(data).response
      //input coordinates to callback param 2
      callback(null, flyOverArray);
  });
};



module.exports = {
  fetchIP,
  fetchLocation,
  fetchISSFlyOver
}