import TabBarIcon from "../utils/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "../screens/Map";
import Setting from "../screens/Setting";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => TabBarIcon(color, size, route),
            tabBarActiveTintColor: "#99ff11",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
         })}
      >
         <Tab.Screen name="Home" component={HomeNavigation} />
         <Tab.Screen name="Map" component={Map} />
         <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
   );
}
