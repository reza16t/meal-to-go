import {
   TransitionPresets,
   createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator();
export default function HomeNavigation() {
   return (
      <Stack.Navigator
         screenOptions={() => ({
            ...TransitionPresets.ModalPresentationIOS,
            //    tabBarIcon: ({ color, size }) => TabBarIcon(color, size, route),
            tabBarActiveTintColor: "#99ff11",
            tabBarInactiveTintColor: "gray",

            headerShown: false,
         })}
      >
         <Stack.Screen name="Restaurants" component={Home} />
         <Stack.Screen name="RestaurantDetails" component={Details} />
      </Stack.Navigator>
   );
}
