import { Component, OnInit, Input } from "@angular/core";
import { WeatherData } from "../models/weather.interface";

@Component({
  selector: "current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"]
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: WeatherData["currently"];
  @Input() location: string;

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
