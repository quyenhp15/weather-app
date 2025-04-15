import axios, { AxiosResponse } from 'axios';
import { mapCurrentWeatherToWeather } from './get-current-weather.mapper';
import { Weather } from '@/lib/models';
import { CurrentWeatherResponseDto } from './get-current-weather.dto';

export const getCurrentWeathers = async (city: string): Promise<Weather> => {
  const response: AxiosResponse<CurrentWeatherResponseDto> = await axios.get(
    `${process.env.weatherMapApiBaseUrl}/weather`,
    {
      params: {
        q: city,
        appid: process.env.weatherMapApiKey,
      },
    }
  );

  return mapCurrentWeatherToWeather(response.data);
};
