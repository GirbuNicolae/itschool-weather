const apiKey = "56ada571ebf3fc4c5a432c9423a7339d";

const getCurrentWeatherEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForecastEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};
