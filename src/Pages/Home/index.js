import { View, Text } from "react-native";

const Home = props => {

  return (
    <View style={{flex: 1, backgroundColor: 'steelblue'}}>
      <Text>Bem vindo</Text>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
    </View>
  )
}

export default Home;
