import axios from "axios";
import { HG_KEY } from "../../constants";

export const getWeather = (code = null) => {
  let url = `https://api.hgbrasil.com/weather?key=${HG_KEY}`;
  if (code) {
    url = `${url}&woeid=${code}`;
  }

  return axios.get(url);
}