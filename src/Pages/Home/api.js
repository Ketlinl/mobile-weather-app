import axios from "axios";

export const getWeather = () => {
 const url = "https://api.hgbrasil.com/weather";
 return axios.get(url);
}