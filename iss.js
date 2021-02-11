//require request
const request = require("request");

//function fetch IP from IPify API
const fetchIP = (callback) => {
  request("https://api.ipify.org?format=json", (error, response, data) => {
    if (error) {
      return callback(error, null)
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
      const IP = JSON.parse(data)
      callback(null, IP.ip);
  });
};



const fetchLocation = (IP, callback) => {
  request(`https://freegeoip.app/json/${IP}`, (error, response, data) => {
    if (error) {
      return callback(error, null)
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
      const {latitude, longitude} = JSON.parse(data)
      callback(null, {latitude, longitude});
  });
};



module.exports = {
  fetchIP,
  fetchLocation
}