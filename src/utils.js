export const getImage = condition => {
  switch(condition) {
    case "rain":
      return require("../assets/rain.png");
    case "cloudly_day":
      return require("../assets/Union_w.png");
    case "storm":
      return require("../assets/Cloud.png");
    case "cloud":
      return require("../assets/Union.png");
    case "cloudly_night":
      return require("../assets/Cloud_w.png");
    default:
      return require("../assets/Union_w.png");
  }
}
/*
storm - tempestade
snow - neve
hail - granizo
rain - chuva
fog - neblina
clear_day - dia limpo
clear_night - noite limpa
cloud - nublado
cloudly_day - nublado de dia
cloudly_night - nublado de noite
none_day - erro ao obter mas está de dia
none_night - erro ao obter mas está de noite
*/