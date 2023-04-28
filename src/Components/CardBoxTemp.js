import { Text, Image } from "react-native";
import styled from "styled-components/native";

const CardBoxTemp = props => {
  const day = props.weather.results.currently === "dia";
  const temps = [
    {
      img: require("../../assets/noun.png"),
      text: `${props.weather.results.rain}%`,
      basis: '50px'
    },
    {
      img: require("../../assets/img1.png"),
      text: `${props.weather.results.humidity}%`,
      basis: '50px'
    },
    {
      img: require("../../assets/format.png"),
      text: ` ${props.weather.results.wind_speedy}%`,
      basis: '100px'
    }
  ]

  return (
    <Container isDay={day} header={props.header}>
      <FlexContainer>
        {temps.map((item, index) => (
          <TempBox key={index} basis={item.basis}>
              <Image source={item.img} />
              <Text style={{ fontSize: 14, color: "white", fontWeight: "700", fontFamily: "SFProBold" }}>
                {item.text}
              </Text>
          </TempBox>
        ))}
      </FlexContainer>
    </Container>
  )
}

const TempBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-basis: ${props => props.basis}
`;

const Container = styled.View`
    margin-top: 31px;
    margin-left: 40px;
    margin-right: 40px;
    flex-direction: row;
    justify-content: space-around;
    height: 47px;
    background-color: ${props => props.isDay ? "#1040844d" : "#0010264d"};
    box-shadow: 0 0;
    shadow-radius: 20px;
    shadow-color: rgba(0, 0, 0, 0.25);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const FlexContainer = styled.View`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: space-around;
`;

export default CardBoxTemp;