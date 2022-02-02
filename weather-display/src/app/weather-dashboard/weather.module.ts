import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from "../alert/alert.component";
import { CurrentWeatherComponent } from "../current-weather/current-weather.component";
import { ForecastComponent } from "../forecast/forecast.component";
import { LocationSearchComponent } from "../location-search/location-search.component";
import { LocationConverstionService } from "../services/location-conversion.service";
import { WeatherLookupService } from "../services/weather-lookup.service";
import { WeatherDashboard } from "./weather-dashboard.component";

@NgModule({
  declarations: [
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherDashboard,
    ForecastComponent,
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
    ForecastComponent,
    AlertComponent
  ]
})
export class WeatherModule {}
