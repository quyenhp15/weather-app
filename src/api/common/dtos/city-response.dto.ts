import { CoordResponseDto } from './coord-response.dto';

export type CityResponseDto = {
  id: number;
  name: string;
  coord: CoordResponseDto;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
