const express = require("express");
const placesRouter = require("./APIs/google-places/places");
const geocodeRouter = require("./APIs/geocode/geocode");
const weatherRouter = require("./APIs/weather-data/weather-data");
require("dotenv").config();

const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(placesRouter);
app.use(geocodeRouter);
app.use(weatherRouter);
app.use(
  express.static(path.join(__dirname, "/weather-display/dist/weather-app"))
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/weather-display/dist/weather-app/index.html")
  );
});

app.listen(port, () => {});
