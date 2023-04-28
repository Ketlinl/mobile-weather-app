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
    getWeather().then(response => {
      this.setState({ weather: response.data });
      const date = response.data.results.date.split("/").slice(0, 2).join("/");
      const forecast = response.data.results.forecast.find(
        (item) => item.date === date
      );
      this.setState({ currentWeather: forecast });
    }).catch(error => {
      console.log(error);
    })
  }

  changeLocation = async (code) => {
    const response = await getWeather(code);
    this.setState({ weather: response.data });
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
  font-family: "SFProMedium";
  margin-top: 10px;
  font-size: 64px;
  align-items: center;
  margin-left: 32px;
  color: #ffffff;
`;

const TextPrecipitations = styled.Text`
  font-family: "SFProRegular";
  margin-top: 5px;
  font-size: 18px;
  align-items: center;
  color: #ffffff;
`;

const TextTemperature = styled.Text`
  font-family: "SFProRegular";
  margin-top: 2px;
  font-size: 18px;
  align-items: center;
  color: #ffffff;
`;

export default Home;
