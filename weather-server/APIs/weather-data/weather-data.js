const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get(
  "/api/get-current-weather-data/:latitude/:longitude",
  async (req, res) => {
    try {
      const latitude = req.params.latitude;
      const longitude = req.params.longitude;
      const key = "9498f170ec8d01f3fe191899146c67f6";

      const weatherAPI = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;
      const axios_response = await axios.get(weatherAPI);
      if (!axios_response) {
        res.status(404).send();
      }
      const forecast = axios_response.data.currently;
      res.send(forecast);
    } catch (error) {
      res.status(500).send();
    }
  }
);

module.exports = router;
