import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Pages/Home";
import SCREENS from "./Pages";

const Stack = createNativeStackNavigator();

const RouterNavigation = props => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          headerBackVisible: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default RouterNavigation;
