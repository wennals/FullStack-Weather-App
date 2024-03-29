const express = require('express');
const placesRouter = require('./APIs/google-places/places');
const geocodeRouter = require('./APIs/geocode/geocode');
const weatherRouter = require('./APIs/weather-data/weather-data');

const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(placesRouter);
app.use(geocodeRouter);
app.use(weatherRouter);
const clientPath = path.join(__dirname, '/public');
app.use(express.static(clientPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(port, () => {});
