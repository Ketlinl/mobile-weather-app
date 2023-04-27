import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

const CardBoxToday = (props) => {
  return (
    <Background>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextTitle>Today</TextTitle>
        <TextDescription>Mar, 9</TextDescription>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TextTemp>23ºC</TextTemp>
          <Image source={require("../../assets/Union_w.png")} />
          <TextDescription style={{ marginTop: 25}}>15.00</TextDescription>
        </View>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TextTemp>26ºC</TextTemp>
          <Image source={require("../../assets/Union_w.png")} />
          <TextDescription style={{ marginTop: 25}}>16.00</TextDescription>
        </View>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TextTemp>24ºC</TextTemp>
          <Image source={require("../../assets/Union_w.png")} />
          <TextDescription style={{ marginTop: 25}}>17.00</TextDescription>
        </View>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TextTemp>23ºC</TextTemp>
          <Image source={require("../../assets/Union_w.png")} />
          <TextDescription style={{ marginTop: 25}}>18.00</TextDescription>
        </View>
      </View>
    </Background>
  );
};

const Background = styled.View`
  margin-top: 20px;
  margin-left: 40px;
  margin-left: 40px;
  margin-right: 40px;
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

const TextTemp = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 32px;

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
  line-height: 21px;
  color: #ffffff;
`;

export default CardBoxToday;
