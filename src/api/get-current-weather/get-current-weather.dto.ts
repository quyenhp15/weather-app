import {
  AtmosphericResponseDto,
  CloudsResponseDto,
  CoordResponseDto,
  RainResponseDto,
  SysResponseDto,
  WeatherResponseDto,
  WindResponseDto,
} from '../common';

export type CurrentWeatherResponseDto = {
  coord: CoordResponseDto;
  weather: WeatherResponseDto[];
  base: string;
  main: AtmosphericResponseDto;
  visibility: number;
  wind: WindResponseDto;
  rain?: RainResponseDto;
  clouds: CloudsResponseDto;
  dt: number;
  sys: SysResponseDto;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
