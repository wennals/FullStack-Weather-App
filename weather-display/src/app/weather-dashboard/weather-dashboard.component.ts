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
  @Output()
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
}
