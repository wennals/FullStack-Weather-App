import { Component, OnInit, Input, Output } from "@angular/core";
import { LocationConverstionService } from "src/app/services/location-conversion.service";
import { WeatherLookupService } from "src/app/services/weather-lookup.service";
import { LatLong } from "src/app/models/latlong.interface";
import { WeatherResponse } from "src/app/models/weather-response.interface";
import { WeatherData } from "../models/weather-data.interface";
import { Weather } from "../models/weather.interface";

@Component({
  selector: "weather-dashboard",
  templateUrl: "./weather-dashboard.component.html",
  styleUrls: ["./weather-dashboard.component.scss"]
})
export class WeatherDashboard implements OnInit {
  @Input("matAutocompletePosition") position = "below";
  locationOptions: string[];
  location: string = "Baltimore,MD,USA";
  currentWeather: WeatherData;
  hourly: Weather;
  daily: Weather;
  alerts: WeatherResponse["alerts"];
  timezone: WeatherResponse["timezone"];
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
        .subscribe((weather: WeatherResponse) => {
          this.currentWeather = weather.currently;
          this.hourly = weather.hourly;
          this.daily = weather.daily;
          this.alerts = weather.alerts;
          this.timezone = weather.timezone;
        });
    });
  }

  getBackground(icon: string): string {
    let image: string;
    switch (icon) {
      case "clear-day":
        image = "clear-day.jpg";
        break;
      case "clear-night":
        image = "clear-night.jpg";
        break;
      case "partly-cloudy-day":
        image = "partly-cloudy-day.jpg";
        break;
      case "partly-cloudy-night":
        image = "partly-cloudy-night.jpg";
        break;
      case "cloudy":
        image = "cloudy.jpg";
        break;
      case "rain":
        image = "rain.jpg";
        break;
      case "sleet":
        image = "sleet.jpg";
        break;
      case "snow":
        image = "snow.jpg";
        break;
      case "wind":
        image = "wind.jpg";
        break;
      case "fog":
        image = "fog.jpg";
        break;
      default:
        image = "clear-day.jpg";
        break;
    }
    return `../../../assets/images/${image}`;
  }
}
