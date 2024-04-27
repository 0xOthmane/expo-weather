import { Platform, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { Home } from './pages/Home/Home';
import ForeCast from './pages/ForeCast/ForeCast';

import fond from './assets/fond.jpg';
import { s } from './App.style';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';

export default function App() {
  const [isFontLoaded] = useFonts({
    'Alatar-Regular': AlataRegular,
  });
  const Stack = createNativeStackNavigator();

  const navTheme = {
    colors: {
      background: 'transparent',
    },
  };

  // https://docs.expo.dev/push-notifications/push-notifications-setup/
  async function subscribeToNotifications() {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("failed to get push token for push notification");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for push notifications.");
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  }
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={fond}
        style={s.img_background}
        imageStyle={s.img}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded ? (
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forecast" component={ForeCast} />
              </Stack.Navigator>
            ) : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
