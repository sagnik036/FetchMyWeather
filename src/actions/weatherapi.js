import axios from "axios";

const WeatherApiFetch = (name) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=cf65d0c5f5cfffb9e7c92e59ec5e2e80`
    )
    .then((obj) => {
      return obj;
    });
};

export default WeatherApiFetch;
