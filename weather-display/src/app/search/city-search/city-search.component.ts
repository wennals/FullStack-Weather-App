import { Component, OnInit, Input } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { LocationConverstionService } from "src/app/services/location-conversion.service";
import { WeatherLookupService } from "src/app/services/weather-lookup.service";
import { LatLong } from "src/app/models/latlong.interface";
import { WeatherData } from "src/app/models/weather.interface";

@Component({
  selector: "city-search",
  templateUrl: "./city-search.component.html",
  styleUrls: ["./city-search.component.scss"]
})
export class CitySearchComponent implements OnInit {
  @Input("matAutocompletePosition") position = "below";

  search: FormControl = new FormControl("");
  locationOptions: string[] = [];
  currentWeather: WeatherData;
  location: string;
  constructor(
    private locationConverstionService: LocationConverstionService,
    private weatherService: WeatherLookupService
  ) {}

  ngOnInit(): void {
    this.search.setValue("Baltimore,MD,USA");
    this.location = this.search.value;
    this.queryWeather();
    this.onChanges();
  }

  onChanges() {
    this.search.valueChanges.subscribe((value: string) => {
      if (value !== "") {
        this.locationConverstionService
          .getLocationList(value)
          .subscribe((places: string[]) => {
            this.locationOptions = places;
          });
      }
    });
  }

  queryWeather(event?: KeyboardEvent) {
    if (event) {
      if (event.keyCode !== 13) {
        return;
      }
    }
    this.location = this.search.value;
    this.weatherService
      .getLatLong(this.location)
      .subscribe((geocode: LatLong) => {
        this.weatherService
          .getWeather(geocode)
          .subscribe((weatherData: WeatherData) => {
            this.currentWeather = weatherData;
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
