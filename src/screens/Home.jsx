// import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import ContactInfo from "./ContactsInfo";
import Sensors from "./Sensors";
import Screenshot from "./Screenshot";
import LocalAuthentication from "./LocalAuthentication";

const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactInfo} />
        <Stack.Screen name="Notificação" component={Notify} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="Orientação" component={MyScreenOrientation} />
        <Stack.Screen name="Sensors" component={Sensors} />
        <Stack.Screen name="Screenshot" component={Screenshot} />
        <Stack.Screen name="Autenticação" component={LocalAuthentication} />
      </Stack.Navigator>
  );
}