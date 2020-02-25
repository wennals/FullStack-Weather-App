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

  private convertToLatLong(data: LatLong): LatLong {
    return {
      latitude: data.latitude,
      longitude: data.longitude
    };
  }

  getWeather(geocode: LatLong): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `/api/get-current-weather-data/${geocode.latitude}/${geocode.longitude}`
    );
  }

  private convertToWeatherData(data: WeatherData) {
    return {
      time: data.time,
      summary: data.summary,
      icon: data.icon,
      nearestStormDistance: data.nearestStormDistance,
      nearestStormBearing: data.nearestStormBearing,
      precipIntensity: data.precipIntensity,
      precipProbability: data.precipProbability,
      temperature: data.temperature,
      apparentTemperature: data.apparentTemperature,
      dewPoint: data.dewPoint,
      humidity: data.humidity,
      pressure: data.pressure,
      windSpeed: data.windSpeed,
      windGust: data.windGust,
      windBearing: data.windBearing,
      cloudCover: data.cloudCover,
      uvIndex: data.uvIndex,
      visibility: data.visibility,
      ozone: data.ozone
    };
  }
}
