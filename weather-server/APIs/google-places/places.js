const express = require("express");
const axios = require("axios");

const router = new express.Router();

router.get("/api/get-auto-complete-locations/:location", async (req, res) => {
  try {
    const location = req.params.location;
    const key = process.env.GOOGLE_PLACES_API_KEY;
    const placesAPI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=${key}`;
    const axios_response = await axios.get(placesAPI);
    if (!axios_response) {
      return res.status(404).send();
    }
    const predictions = axios_response.data.predictions;
    const places = predictions.map(place => place.description);
    res.send(places);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
