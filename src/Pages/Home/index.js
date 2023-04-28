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
    this.state={
      weather: null,
      selectedWeather: null
    };
  }

  async componentDidMount(){
    const response = await getWeather();
    //console.log(response.data)
    this.setState({weather: response.data});
  }

  __forecastPress = selectedForecast => {
    this.setState({ selectedWeather: selectedForecast })
  }

  render() {
    if(!this.state.weather) return;
    return (
      <View style={{ flex: 1 }}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#08244F", "#134CB5", "#0B42AB"]}
          >
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
                  placeholder={{ label: "Fortaleza", value: null }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: "JavaScript", value: "JavaScript" },
                    { label: "TypeScript", value: "TypeScript" },
                    { label: "Python", value: "Python" },
                    { label: "Java", value: "Java" },
                    { label: "C++", value: "C++" },
                    { label: "C", value: "C" },
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
                {this.state.weather.results.condition_code}º
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
                Max.: {this.state.weather.results.forecast.max}º Min.: {this.state.weather.results.forecast.min}º
              </Text>
            </View>

            <CardBoxTemp>
              <View style={{ width: 50, height: 50 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../../assets/noun.png")} />
                  <Text
                    style={{ fontSize: 14, color: "white", fontWeight: "700" }}
                  >
                   {this.state.weather.results.rain}%
                  </Text>
                </View>
              </View>

              <View style={{ width: 50, height: 50 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../../assets/img1.png")} />
                  <Text
                    style={{ fontSize: 14, color: "white", fontWeight: "700" }}
                  >
                    {this.state.weather.results.humidity}%
                  </Text>
                </View>
              </View>

              <View style={{ width: 80, height: 50 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../../assets/format.png")} />
                  <Text
                    style={{ fontSize: 14, color: "white", fontWeight: "700" }}
                  >
                    {" "}
                    {this.state.weather.results.wind_speedy}
                  </Text>
                </View>
              </View>
            </CardBoxTemp>
            <CardBoxToday weather={this.state.weather} />
            <CardBoxForecast forecastPress={this.__forecastPress} weather={this.state.weather} />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
};

export default Home;
