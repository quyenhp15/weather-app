export type Temperature = {
  value: number;
  min: number;
  max: number;
  feelsLike: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Weather = {
  id: number;
  description: string;
  temperature: Temperature;
  humidity: number;
  pressure: number;
  wind: Wind;
  icon: string;
};
