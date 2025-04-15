import { Weather } from '@/lib/models';
import { ForecastResponseDto } from './get-forecast-weather.dto';

export const mapForecastWeatherToWeather = (
  response: ForecastResponseDto
): Weather[] => {
  return response.list.map(forecast => {
    return {
      id: forecast.weather[0].id,
      description: forecast.weather[0].description,
      temperature: {
        value: forecast.main.temp,
        min: forecast.main.temp_min,
        max: forecast.main.temp_max,
        feelsLike: forecast.main.feels_like,
      },
      humidity: forecast.main.humidity,
      pressure: forecast.main.pressure,
      wind: forecast.wind,
      icon: forecast.weather[0].icon,
    };
  });
};
