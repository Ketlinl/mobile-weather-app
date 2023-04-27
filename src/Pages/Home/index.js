import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#08244F", "#134CB5", "#0B42AB"]}
        style={{ height: 900 }}
      >
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

        <View
          style={{
            marginTop: 31,
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
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
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 60, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#FFFFFF" }}
                >
                  Today
                </Text>
              </View>
            </View>
            <View style={{ width: 60, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  Mar, 9
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  23ºC
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  26ºC
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  24ºC
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  23ºC
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../../assets/Union_w.png")} />
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
                <Image source={require("../../../assets/Union_w.png")} />
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
                <Image source={require("../../../assets/Union.png")} />
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
                <Image source={require("../../../assets/Cloud_w.png")} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: 40,
            marginRight: 40,

            flexDirection: "row",
            justifyContent: "space-around",
            height: 67,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  15.00
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  16.00
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  17.00
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
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}
                >
                  18.00
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 140, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#FFFFFF" }}
                >
                  Next Forecast
                </Text>
              </View>
            </View>
            <View style={{ width: 25, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../../assets/calendar.png")} />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 80, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#FFFFFF" }}
                >
                  Monday
                </Text>
              </View>
            </View>

            <View style={{ width: 36, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../../assets/rain.png")} />
              </View>
            </View>
            <View style={{ width: 90, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#FFFFFF" }}
                >
                  13ºC
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#FFFFFF" }}
                >
                  10ºC
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 47,
            backgroundColor: "#001026",
            opacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOpacity: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 18,
            }}
          >
            <View style={{ width: 80, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#FFFFFF" }}
                >
                  Tuesday
                </Text>
              </View>
            </View>

            <View style={{ width: 36, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../../assets/Cloud.png")} />
              </View>
            </View>
            <View style={{ width: 90, height: 50 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#FFFFFF" }}
                >
                  17ºC
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#FFFFFF" }}
                >
                  12ºC
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Home;
