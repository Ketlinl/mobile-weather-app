import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

const CardBoxForecast = (props) => {
  return (
    <Background>
    <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Next Forecast</Text>
            <Text>Calendario</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Monday</Text>
            <Text>Imagem</Text>
            <Text>13º</Text>
            <Text>10º</Text>
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

export default CardBoxForecast;