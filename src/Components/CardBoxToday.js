import styled from "styled-components/native";
import { css } from "styled-components";
import { View, Image } from "react-native";
import { getImage } from "../utils";

const CardBoxToday = (props) => {
  const dateString = props.weather.results.date;
  const dateSplited = dateString.split("/");
  const date = new Date(
    `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}`
  );
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const timeNumber = parseInt(props.weather.results.time.split(":")[0]);
  const day = props.weather.results.currently === "dia";
  const temp = props.weather.results.temp;
  const condition = props.weather.results.condition_slug;
  const times = [
    {
      temp: `${temp - 2}ºC`,
      img: getImage("rain"),
      time: `${timeNumber - 2}:00`,
      currentTime: false,
    },
    {
      temp: `${temp - 1}ºC`,
      img: getImage("storm"),
      time: `${timeNumber - 1}:00`,
      currentTime: false,
    },
    {
      temp: `${temp}ºC`,
      img: getImage(condition),
      time: `${timeNumber}:00`,
      currentTime: true,
    },
    {
      temp: `${temp + 1}ºC`,
      img: day ? getImage("cloudly_day") : getImage("cloudly_night"),
      time: `${timeNumber + 1}:00`,
      currentTime: false,
    },
  ];

  return (
    <Background isDay={day}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextTitle>Today</TextTitle>
        <TextDescription>
          {month[date.getUTCMonth()]}, {date.getUTCDate()}
        </TextDescription>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {times.map((item, index) => (
          <TimeContainer isDay={day} isCurrentTime={item.currentTime} key={index}>
            <TextTemp>{item.temp}</TextTemp>
            <Image source={item.img} forecast />
            <TextDescription style={{ marginTop: 25 }}>
              {item.time}
            </TextDescription>
          </TimeContainer>
        ))}
      </View>
    </Background>
  );
};

const currentTimeCss = css`
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background: ${props => props.isDay ? "#4899E333" : "#2566A333"};
  border: 1px solid ${props => props.isDay ? "#8EBBFF" : "#5096FF"};
  filter: blur(1px);
`;

const TimeContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 20px;
  ${props => props.isCurrentTime && currentTimeCss}
`;

const Background = styled.View`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
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
  padding: 14px 14px 20px 14px;
`;

const TextTemp = styled.Text`
  font-family: 'SFProRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
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
  font-family: 'SFProRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

export default CardBoxToday;
