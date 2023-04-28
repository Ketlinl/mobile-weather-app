import React, { Component, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardBoxTemp from "../../Components/CardBoxTemp";
import CardBoxToday from "../../Components/CardBoxToday";
 import CardBoxForecast from "../../Components/CardNextForecast";
 import {getWeather} from "./api";


class Home extends Component {
  constructor(props) {
   super(props);
    this.state = {
      weather: null,
      currentWeather: null,
      selectedPlace: null
    };
  }

  async componentDidMount(){
    const response = await getWeather();
    this.setState({weather: response.data});
    const date = response.data.results.date.split("/").slice(0, 2).join("/");
    const forecast = response.data.results.forecast.find(item => item.date === date);
    this.setState({ currentWeather: forecast })
  }

  changeLocation = async code => {
    const response = await getWeather(code);
    this.setState({weather: response.data});
  }

  render() {
    if(!this.state.weather || !this.state.currentWeather) return;

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#08244F", "#134CB5", "#0B42AB"]}>
          <ScrollView>
            <View
              style={{
                marginTop: 80,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ width: 120, height: 50 }}>
                <RNPickerSelect
                  placeholder="São Paulo"
                  onValueChange={(value) => this.changeLocation(value)}
                  items={[
                    { label: "São Paulo", value: 455827 },
                    { label: "Fortaleza", value: 455830 },
                    { label: "Brasília", value: 455819 },
                    { label: "Gramado", value: 457224 }
                  ]}
                />
              </View>

              <View
                style={{
                  width: 30,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Image source={require("../../../assets/notify.png")} />
              </View>
            </View>

            <View
              style={{
                marginTop: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../../assets/cloud_1.png")} />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 64,
                  alignItems: "center",
                  marginLeft: 32,
                  color: "#FFFFFF",
                }}
              >
                {this.state.weather.results.temp}º
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  alignItems: "center",
                  color: "#FFFFFF",
                }}
              >
                Precipitations
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontSize: 18,
                  alignItems: "center",
                  color: "#FFFFFF",
                }}
              >
                Max.: {this.state.currentWeather.max}º Min.: {this.state.currentWeather.min}º
              </Text>
            </View>

            <CardBoxTemp weather={this.state.weather} />
            <CardBoxToday weather={this.state.weather} />
            <CardBoxForecast weather={this.state.weather} />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
};

export default Home;
