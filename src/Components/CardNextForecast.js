import styled from "styled-components/native";
import { View, Image } from "react-native";
import { getImage } from "../utils";

const CardBoxForecast = (props) => {
  const day = props.weather.results.currently === "dia";
  const daysOfWeek = {
    "Seg": "Monday",
    "Ter": "Tuesday",
    "Qua": "Wednesday",
    "Qui": "Thursday",
    "Sex": "Friday",
    "Sáb": "Saturday",
    "Dom": "Sunday"
  }

  return (
    <Background isDay={day}>
      <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" , marginBottom: 19}}>
          <TextTitle>Next Forecast</TextTitle>
          <Image source={require("../../assets/calendar.png")} />
        </View>
        {props.weather.results.forecast.map((item, index) => (
          <ForecastContainer key={index}>
            <TextDescription style={{flexBasis: 95, fontFamily: "AlegreyaSansBold"}}>{daysOfWeek[item.weekday]}</TextDescription>
            <Image style={{width: 35, height:23}} source={getImage(item.condition)} />
            <View style={{ flexDirection: "row", justifyContent: "space-between" , marginLeft: 30}}>
              <TextDescription style={{flexBasis: 36}}>{item.max}º</TextDescription>
              <TextDescription style={{color: '#ffffff80',flexBasis: 24}}>{item.min}º</TextDescription>
            </View>
          </ForecastContainer>
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
  background-color: ${props => props.isDay ? "#1040844d" : "#0010264d"};
  box-shadow: 0 0;
  shadow-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 14px 14px 30px 14px;
`;

const ForecastContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextTitle = styled.Text`
  font-family: 'SFProBold';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const TextDescription = styled.Text`
  font-family: 'AlegreyaSansMedium';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  height: 33px;
  flex-basis: 55px;
`;
export default CardBoxForecast;
