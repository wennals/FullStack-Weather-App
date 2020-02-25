# WeatherApp

## Description
This project demonstrates my knowledge of and ability to use external API's in a full stack application. As a challange for myself I decided to develop a dynamic weather application that has an autocomple search capability that updates as the user types. I have also applied dynamic styling for the weather icons and background, each weather forecast has an associated background.

## View In The Web
The project can be viewed on heroku via the following link:

## Download and View locally
1. Clone the repository to the desired directory:
    - git clone https://github.com/wennals/FullStack-Weather-App.git
2. Download the required dependencies
    - cd into "weather-server"
    - npm install
    - cd into "../weather-display"
    -npm install
3. Set up the external API keys in weather-server/:
    - cd into "/weather-server"
    - rename the ".env-same" file to ".env"
    - Obtain the following API keys:
        ..* WEATHER_DATA_API_KEY: https://darksky.net/dev
        ..* GEOCODE_API_KEY: https://account.mapbox.com/auth/signin/?route-to=%22https://account.mapbox.com/%22
        ..* GOOGLE_PLACES_API_KEY: console.developers.google.com
            - authorize the key to be used with the Google Places API
4. Start up the server 
    - cd into "/weather-server"
    - npm start
5. Build and serve the app
    - cd into "/weather-display"
    - npm start
6. Open your browser to: localhost:4200/  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).