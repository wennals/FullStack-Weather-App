import { Component, Input, OnInit } from "@angular/core";
import { WeatherData } from "../models/weather.interface";

@Component({
  selector: "hourly-forecast",
  templateUrl: "./hourly-forecast.component.html",
  styleUrls: ["./hourly-forecast.component.scss"]
})
export class HourlyWeatherComponent implements OnInit {
  @Input() hourly: WeatherData["hourly"];

  constructor() {}

  ngOnInit() {}

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
        return "wi wi-sleet";
      case "snow":
        return "wi wi-snow";
      case "wind":
        return "wi wi-windy";
      case "fog":
        return "wi wi-fog";
    }
  }
}
