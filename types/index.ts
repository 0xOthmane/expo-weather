export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: CurrentWeatherUnits;
  current_weather: CurrentWeather;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  sunrise: string;
  sunset: string;
  windspeed_10m_max: string;
}

export interface Daily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  sunrise: string[];
  sunset: string[];
  windspeed_10m_max: number[];
}