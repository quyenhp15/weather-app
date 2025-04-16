import {
  AtmosphericResponseDto,
  CityResponseDto,
  CloudsResponseDto,
  RainResponseDto,
  SysResponseDto,
  WeatherResponseDto,
  WindResponseDto,
} from "../common";

export type ForecastResponseDto = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItemResponseDto[];
  city: CityResponseDto;
};

export type ForecastItemResponseDto = {
  dt: number;
  main: AtmosphericResponseDto;
  weather: WeatherResponseDto[];
  clouds: CloudsResponseDto;
  wind: WindResponseDto;
  visibility: number;
  pop: number;
  rain?: RainResponseDto;
  sys: SysResponseDto;
  dt_txt: string;
};

export type ForecastMainResponseDto = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};
