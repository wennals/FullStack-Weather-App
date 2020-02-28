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

@NgModule({
  declarations: [
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherDashboard
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LocationConverstionService, WeatherLookupService],
  exports: [LocationSearchComponent, CurrentWeatherComponent, WeatherDashboard]
})
export class WeatherModule {}
