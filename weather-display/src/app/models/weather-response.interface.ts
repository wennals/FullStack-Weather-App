import { Weather } from "./weather.interface";
import { WeatherData } from "./weather-data.interface";

export class WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: WeatherData;
  hourly: Weather;
  daily: Weather;
  flags: {
    "darksky-unavailable"?: boolean;
    sources: string[];
    "nearest-station": number;
    units: string;
  };
  alerts: {
    description: string;
    expires: number;
    regions: string[];
    severity: string;
    time: number;
    title: string;
    uri: string;
  }[];
  offset: number;
}
