import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";

import { LocationSearchComponent } from "../location-search/location-search.component";
import { LocationConverstionService } from "../services/location-conversion.service";
import { HttpClientModule } from "@angular/common/http";
import { WeatherLookupService } from "../services/weather-lookup.service";
import { WeatherDashboard } from "./weather-dashboard.component";
import { CurrentWeatherComponent } from "../current-weather/current-weather.component";
import { HourlyWeatherComponent } from "../hourly-forecast/hourly-forecast.component";
import { DailyForecastComponent } from "../daily-forecast/daily-forecast.component";
import { MatDialogModule } from "@angular/material/dialog";
import { AlertComponent } from "../alert/alert.component";

@NgModule({
  declarations: [
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherDashboard,
    HourlyWeatherComponent,
    DailyForecastComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LocationConverstionService, WeatherLookupService],
  exports: [
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherDashboard,
    HourlyWeatherComponent,
    DailyForecastComponent,
    AlertComponent
  ]
})
export class WeatherModule {}
