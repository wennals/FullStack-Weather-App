import { Component, OnInit } from "@angular/core";
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
  searchForm: FormGroup;
  locationOptions: string[] = [];
  currentWeather: WeatherData;
  constructor(
    private locationConverstionService: LocationConverstionService,
    private weatherService: WeatherLookupService
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl("")
    });
    this.searchForm.controls.search.setValue("Baltimore,MD,USA");
    this.queryWeather();
    this.onChanges();
  }

  onChanges() {
    if (this.searchForm.controls.search.value != null) {
      this.searchForm.controls.search.valueChanges.subscribe(
        (value: string) => {
          this.locationConverstionService
            .getLocationList(value)
            .subscribe((places: string[]) => {
              this.locationOptions = places;
            });
        }
      );
    }
  }

  queryWeather() {
    const value = this.searchForm.controls.search.value;
    this.weatherService.getLatLong(value).subscribe((geocode: LatLong) => {
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
    switch (icon) {
      case "clear-day":
        return "../../../assets/images/clear-day.jpeg";
      case "clear-night":
        return "../../../assets/images/clear-night.jpeg";
      case "partly-cloudy-day":
        return "../../../assets/images/partly-cloudy-day.jpeg";
      case "partly-cloudy-night":
        return "../../../assets/images/partly-cloudy-night.jpeg";
      case "cloudy":
        return "../../../assets/images/cloudy.jpg";
      case "rain":
        return "../../../assets/images/rain.jpeg";
      case "sleet":
        return "../../../assets/images/sleet.";
      case "snow":
        return "../../../assets/images/snow.jpeg";
      case "wind":
        return "../../../assets/images/wind-alt.jpeg";
      case "fog":
        return "../../../assets/images/fog.jpeg";
    }
  }
}
