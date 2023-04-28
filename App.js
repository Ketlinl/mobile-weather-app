import RouterNavigation from "./src/routes";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SFProRegular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFProMedium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
    'SFProBold': require('./assets/fonts/SF-Pro-Display-Bold.ttf'),
    'AlegreyaSansBold': require('./assets/fonts/AlegreyaSans-Bold.ttf'),
    'AlegreyaSansMedium': require('./assets/fonts/AlegreyaSans-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RouterNavigation />;
}
