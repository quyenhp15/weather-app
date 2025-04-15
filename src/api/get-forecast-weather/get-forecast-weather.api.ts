import axios from 'axios';
import { mapForecastWeatherToWeather } from './get-forecast-weather.mapper';
import { Weather } from '@/lib/models';

export const getForecastWeathers = async (city: string): Promise<Weather[]> => {
  const response = await axios.get(
    `${process.env.weatherMapApiBaseUrl}/forecast`,
    {
      params: {
        q: city,
        appid: process.env.weatherMapApiKey,
      },
    }
  );

  return mapForecastWeatherToWeather(response.data);
};
