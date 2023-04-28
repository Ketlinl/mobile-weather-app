import { View, Text, ActivityIndicator } from "react-native";

const Loading = props => {
  if (props.error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Ocorreu algum problema de conexão com a API: {props.error}</Text>
      </View>
    )
  } else {
    return (
      <View>
        <ActivityIndicator size="large" color={"#000"} />
      </View>
    )
  }
}

export default Loading;