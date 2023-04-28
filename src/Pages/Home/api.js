import axios from "axios";

export const getWeather = (code = null) => {
  let url = "https://api.hgbrasil.com/weather";
  if (code) {
    url = `${url}?woeid=${code}`;
  }

  return axios.get(url);
}