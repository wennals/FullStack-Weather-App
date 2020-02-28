import { Component, OnInit, Input, Output } from "@angular/core";
import { LocationConverstionService } from "src/app/services/location-conversion.service";
import { WeatherLookupService } from "src/app/services/weather-lookup.service";
import { LatLong } from "src/app/models/latlong.interface";
import { WeatherData } from "src/app/models/weather.interface";
import { EventEmitter } from "protractor";

@Component({
  selector: "weather-dashboard",
  templateUrl: "./weather-dashboard.component.html",
  styleUrls: ["./weather-dashboard.component.scss"]
})
export class WeatherDashboard implements OnInit {
  @Input("matAutocompletePosition") position = "below";
  @Output()
  locationOptions: string[];
  location: string = "Baltimore,MD,USA";
  currentWeather: WeatherData["currently"];
  hourly: WeatherData["hourly"];
  daily: WeatherData["daily"];
  alerts: WeatherData["alerts"];
  timezone: WeatherData["timezone"];
  isValidSearch: boolean = false;
  constructor(
    private locationConverstionService: LocationConverstionService,
    private weatherService: WeatherLookupService
  ) {}

  ngOnInit(): void {}

  locationQuery(event: string) {
    this.locationConverstionService
      .getLocationList(event)
      .subscribe((places: string[]) => {
        this.locationOptions = places;
      });
  }

  queryWeather(event: string) {
    this.location = event;
    this.weatherService.getLatLong(event).subscribe((geocode: LatLong) => {
      this.weatherService
        .getWeather(geocode)
        .subscribe((weather: WeatherData) => {
          this.currentWeather = weather.currently;
          this.hourly = weather.hourly;
          this.daily = weather.daily;
          this.alerts = weather.alerts;
          this.timezone = weather.timezone;
        });
    });
  }

  getIcon(icon: string): string {
    switch (icon) {
      case "clear-day":
        return "wi wi-day-sunny";
      case "clear-night":
        return "wi wi-night-clear";
      case "partly-cloudy-day":
        return "wi wi-day-cloudy";
      case "partly-cloudy-night":
        return "wi wi-night-cloudy";
      case "cloudy":
        return "wi wi-cloudy";
      case "rain":
        return "wi wi-rain";
      case "sleet":
        return icon;
      case "snow":
        return "wi wi-snow";
      case "wind":
        return "wi wi-windy";
      case "fog":
        return "wi wi-fog";
    }
  }

  getBackground(icon: string): string {
    let image: string;
    switch (icon) {
      case "clear-day":
        image = "clear-day.jpeg";
        break;
      case "clear-night":
        image = "clear-night.jpeg";
        break;
      case "partly-cloudy-day":
        image = "partly-cloudy-day.jpeg";
        break;
      case "partly-cloudy-night":
        image = "partly-cloudy-night.jpeg";
        break;
      case "cloudy":
        image = "cloudy.jpg";
        break;
      case "rain":
        image = "rain.jpeg";
        break;
      case "sleet":
        image = "sleet.";
        break;
      case "snow":
        image = "snow.jpeg";
        break;
      case "wind":
        image = "wind-alt.jpeg";
        break;
      case "fog":
        image = "fog.jpeg";
        break;
      default:
        image = "clear-day.jpeg";
        break;
    }
    return `../../../assets/images/${image}`;
  }
}
