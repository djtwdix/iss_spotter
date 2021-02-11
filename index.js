const { fetchIP, fetchLocation, fetchISSFlyOver} = require("./iss");

//IP fetch test
fetchIP((err, IP) => {
  if (err) {
    console.log("error: ", err)
  } else {
    console.log("IP: ", IP);
  }
})

fetchLocation('174.118.201.150', (err, location) => {
  if (err) {
    console.log("error: ", err)
  } else {
    console.log("Coordinates: ", location);
  }
})

fetchISSFlyOver({ latitude: 45.8122, longitude: -66.6784 }, (err, flyOver) => {
  if (err) {
    console.log("error: ", err)
  } else {
    console.log("flyOver: ", flyOver);
  }
})