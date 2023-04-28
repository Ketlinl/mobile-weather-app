import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardBoxTemp from "../../Components/CardBoxTemp";
import CardBoxToday from "../../Components/CardBoxToday";
import CardBoxForecast from "../../Components/CardNextForecast";
import { getWeather } from "./api";
import styled from "styled-components/native";
import { SelectField } from "../../Components/SelectField";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      currentWeather: null,
      selectedPlace: null,
      dropdownOpen: false,
      dayBackground: ["#29B2DD", "#33AADD", "#2DC8EA"],
      nightBackground: ["#08244F", "#134CB5", "#0B42AB"]
    };
  }

  componentDidMount() {
    /*getWeather().then(response => {
      this.setState({ weather: response.data });
      const date = response.data.results.date.split("/").slice(0, 2).join("/");
      const forecast = response.data.results.forecast.find(
        (item) => item.date === date
      );
      this.setState({ currentWeather: forecast });
    }).catch(error => {
      console.log(error);
    })*/
    const mock = {
      "by":"default",
      "valid_key":false,
      "results":{
        "temp":17,
        "date":"28/04/2023",
        "time":"13:10",
        "condition_code":"28",
        "description":"Tempo nublado",
        "currently":"dia",
        "cid":"",
        "city":"São Paulo, SP",
        "img_id":"28",
        "humidity":90,
        "cloudiness":75.0,
        "rain":0.0,
        "wind_speedy":"4.12 km/h",
        "wind_direction":140,
        "sunrise":"06:25 am",
        "sunset":"05:42 pm",
        "condition_slug":"cloudly_day",
        "city_name":"São Paulo",
        "forecast":[
          {"date":"28/04","weekday":"Sex","max":20,"min":16,"cloudiness":100.0,"rain":0.0,"rain_probability":21,"wind_speedy":"3.76 km/h","description":"Tempo nublado","condition":"cloudly_day"},{"date":"29/04","weekday":"Sáb","max":22,"min":15,"cloudiness":100.0,"rain":0.14,"rain_probability":57,"wind_speedy":"3.66 km/h","description":"Chuvas esparsas","condition":"rain"},{"date":"30/04","weekday":"Dom","max":25,"min":16,"cloudiness":2.0,"rain":0.36,"rain_probability":30,"wind_speedy":"2.57 km/h","description":"Chuvas esparsas","condition":"rain"},{"date":"01/05","weekday":"Seg","max":25,"min":16,"cloudiness":0.0,"rain":0.0,"rain_probability":8,"wind_speedy":"4.28 km/h","description":"Tempo limpo","condition":"clear_day"},{"date":"02/05","weekday":"Ter","max":25,"min":16,"cloudiness":0.0,"rain":0.14,"rain_probability":20,"wind_speedy":"2.52 km/h","description":"Chuvas esparsas","condition":"rain"},{"date":"03/05","weekday":"Qua","max":26,"min":16,"cloudiness":4.0,"rain":0.0,"rain_probability":0,"wind_speedy":"3.08 km/h","description":"Tempo limpo","condition":"clear_day"},{"date":"04/05","weekday":"Qui","max":26,"min":17,"cloudiness":34.0,"rain":0.0,"rain_probability":24,"wind_speedy":"3.5 km/h","description":"Parcialmente nublado","condition":"cloud"},{"date":"05/05","weekday":"Sex","max":22,"min":18,"cloudiness":77.0,"rain":1.52,"rain_probability":94,"wind_speedy":"2.98 km/h","description":"Chuvas esparsas","condition":"rain"},{"date":"06/05","weekday":"Sáb","max":21,"min":16,"cloudiness":100.0,"rain":29.04,"rain_probability":100,"wind_speedy":"1.62 km/h","description":"Chuva","condition":"rain"},{"date":"07/05","weekday":"Dom","max":21,"min":16,"cloudiness":99.0,"rain":19.98,"rain_probability":100,"wind_speedy":"3.05 km/h","description":"Chuva","condition":"rain"}],"cref":"a88b33"},"execution_time":0.0,"from_cache":true}
    this.setState({ weather: mock });
    const date = mock.results.date.split("/").slice(0, 2).join("/");
    const forecast = mock.results.forecast.find(
      (item) => item.date === date
    );
    this.setState({ currentWeather: forecast });
  }

  changeLocation = async (code) => {
    console.log(code)
    //const response = await getWeather(code);
    //this.setState({ weather: response.data });
  };

  render() {
    if (!this.state.weather || !this.state.currentWeather) return;
    const day = this.state.weather.results.currently === "dia";

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={day ? this.state.dayBackground : this.state.nightBackground}>
          <ScrollView>
            <ViewContainer>
              <ViewPicker style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require("../../../assets/map.png")}  />
                <SelectField
                  options={[
                    { label: "São Paulo", value: 455827 },
                    { label: "Fortaleza", value: 455830 },
                    { label: "Brasília", value: 455819 },
                    { label: "Gramado", value: 457224 },
                  ]}
                  placeholder={this.state.weather.results.city_name}
                  onChange={code => this.changeLocation(code)}
                />
              </ViewPicker>
              <ViewImage>
                <Image source={require("../../../assets/notify.png")} />
              </ViewImage>
            </ViewContainer>

            <Precipitations style={{zIndex: -1}}>
              <Image style={{ width: 220, height: 220}} source={day ? require("../../../assets/sun.png") : require("../../../assets/cloud_1.png")} />
              <TextTemp>{this.state.weather.results.temp}º</TextTemp>
              <TextPrecipitations>Precipitations</TextPrecipitations>
              <TextTemperature>
                Max.: {this.state.currentWeather.max}º Min.:{" "}
                {this.state.currentWeather.min}º
              </TextTemperature>
            </Precipitations>

            <CardBoxTemp weather={this.state.weather} />
            <CardBoxToday weather={this.state.weather} />
            <CardBoxForecast weather={this.state.weather} />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const ViewContainer = styled.View`
  margin-top: 80px;
  flex-direction: row;
  justify-content: space-around;
`;

const ViewPicker = styled.View`
  width: 150px;
  height: 50px;
`;

const ViewImage = styled.View`
  width: 30px;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
`;

const Precipitations = styled.View`
  margin-top: 35px;
  justify-content: center;
  align-items: center;
`;

const TextTemp = styled.Text`
  margin-top: 10px;
  font-size: 64px;
  align-items: center;
  margin-left: 32px;
  color: #ffffff;
`;

const TextPrecipitations = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  align-items: center;
  color: #ffffff;
`;

const TextTemperature = styled.Text`
  margin-top: 2px;
  font-size: 18px;
  align-items: center;
  color: #ffffff;
`;

export default Home;
