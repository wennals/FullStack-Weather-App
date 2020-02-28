import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LatLong } from "../models/latlong.interface";
import { Observable, fromEventPattern } from "rxjs";
import { WeatherData } from "../models/weather.interface";

@Injectable()
export class WeatherLookupService {
  constructor(private httpClient: HttpClient) {}

  getLatLong(location: string): Observable<LatLong> {
    return this.httpClient.get<LatLong>(
      `/api/convert-location-to-geocode/${location}`
    );
  }

  getWeather(geocode: LatLong): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `/api/get-current-weather-data/${geocode.latitude}/${geocode.longitude}`
    );
  }
}
