const express = require("express");
const placesRouter = require("./APIs/google-places/places");
const geocodeRouter = require("./APIs/geocode/geocode");
const weatherRouter = require("./APIs/weather-data/weather-data");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(placesRouter);
app.use(geocodeRouter);
app.use(weatherRouter);

app.listen(port, () => {
  console.log("Server connection established on port: " + port);
});
