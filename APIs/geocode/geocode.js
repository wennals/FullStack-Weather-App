const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/api/convert-location-to-geocode/:location", async (req, res) => {
  try {
    const location = req.params.location;
    const key = process.env.GEOCODE_API_KEY;
    const geocodeAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${key}&limit=1`;
    const axios_request = await axios.get(geocodeAPI);
    if (!axios_request) {
      res.status(404).send();
    }
    const data = axios_request.data;
    const geocode = {
      longitude: data.features[0].center[0],
      latitude: data.features[0].center[1]
    };

    res.send(geocode);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
