import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardBoxTemp from "../../Components/CardBoxTemp";
import CardBoxToday from "../../Components/CardBoxToday";
 import CardBoxForecast from "../../Components/CardNextForecast"

const Home = (props) => {
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
              28º
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
              Max.: 31º Min.: 25º
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
                  6%
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
                  90%
                </Text>
              </View>
            </View>

            <View style={{ width: 66, height: 50 }}>
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
                  19km/h
                </Text>
              </View>
            </View>
          </CardBoxTemp>
          <CardBoxToday />
          <CardBoxForecast />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Home;
