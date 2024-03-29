import { Component, OnInit, Input, Output } from "@angular/core";
import { WeatherData } from "../models/weather-data.interface";
import { EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "../alert/alert.component";
import { WeatherResponse } from "../models/weather-response.interface";

@Component({
  selector: "current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"]
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: WeatherData;
  @Input() location: string;
  @Input() locationOptions: string[];
  @Input() alerts: WeatherResponse["alerts"];
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
}
