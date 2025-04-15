import { Weather } from "@/lib/models";
import { CurrentWeatherResponseDto } from "./get-current-weather.dto";

export const mapCurrentWeatherToWeather = (
  response: CurrentWeatherResponseDto
): Weather => {
  return {
    id: response.weather[0].id,
    description: response.weather[0].description,
    temperature: {
      value: response.main.temp,
      min: response.main.temp_min,
      max: response.main.temp_max,
      feelsLike: response.main.feels_like,
    },
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    wind: response.wind,
    icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
  };
};
