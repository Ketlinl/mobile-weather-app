import styled from "styled-components/native";
import { View, Image } from "react-native";
import { getImage } from "../utils";

const CardBoxForecast = (props) => {
  return (
    <Background>
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" , marginBottom: 19}}>
          <TextTitle>Next Forecast</TextTitle>
          <Image source={require("../../assets/calendar.png")} />
        </View>
        {props.weather.results.forecast.map((item, index) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TextDescription>{item.weekday}</TextDescription>
                <Image style={{flexBasis: 40}} source={getImage(item.condition)} />
                <TextDescription>{item.max}º</TextDescription>
                <TextDescription>{item.min}º</TextDescription>
            </View>
        ))}
      </View>
    </Background>
  );
};

const Background = styled.View`
  margin-top: 20px;
  margin-left: 40px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 16, 38, 0.3);
  box-shadow: 0 0;
  shadow-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 14px 14px 30px 14px;
`;

const TextTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const TextDescription = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
export default CardBoxForecast;
