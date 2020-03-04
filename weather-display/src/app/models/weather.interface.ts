import { WeatherData } from "./weather-data.interface";

export interface Weather {
  summary?: string;
  icon?: string;
  data: WeatherData | WeatherData[];
}
