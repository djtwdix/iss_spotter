const { fetchIP, fetchLocation, fetchISSFlyOver, nextISSTimesForMyLocation } = require("./iss");

//function takes in arr (passTimes)
const printOut = function (passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime}, for ${duration} seconds!`);

  }
};

//function that finds ISS fly over times near your location
nextISSTimesForMyLocation((err, passTimes) => {
  if (err) {
    console.log("error: ", err)
  } else {
    printOut(passTimes);
  }
})