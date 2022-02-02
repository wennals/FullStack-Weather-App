import { Injectable } from "@angular/core";
import { LatLong } from "../models/latlong.interface";
import { Observable } from "rxjs";
import { WeatherResponse } from "../models/weather-response.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherLookupService {
  constructor(private httpClient: HttpClient) {}

  getLatLong(location: string): Observable<LatLong> {
    return this.httpClient.get<LatLong>(
      `/api/convert-location-to-geocode/${location}`
    );
  }

  getWeather(geocode: LatLong): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(
      `/api/get-current-weather-data/${geocode.latitude}/${geocode.longitude}`
    );
  }
}
