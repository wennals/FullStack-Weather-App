import { Component, OnInit, Input, Output } from "@angular/core";
import { WeatherData } from "../models/weather.interface";
import { EventEmitter } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: "current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"]
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: WeatherData["currently"];
  @Input() location: string;
  @Input() locationOptions: string[];
  @Input() alerts: WeatherData["alerts"];
  @Output() locationQuery: EventEmitter<string> = new EventEmitter();
  @Output() weatherQuery: EventEmitter<string> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  getLocations(event: string) {
    this.locationQuery.emit(event);
  }

  queryWeather(event: string) {
    this.weatherQuery.emit(event);
  }

  getAlerts() {
    const dialogRef = this.dialog.open(AlertComponent, {
      height: "300px",
      data: this.alerts
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
