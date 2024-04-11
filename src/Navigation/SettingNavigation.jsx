import {
   TransitionPresets,
   createStackNavigator,
} from "@react-navigation/stack";
import Setting from "../screens/Setting";
import CameraScreen from "../screens/Camera";

const Stack = createStackNavigator();
export default function SettingNavigation() {
   return (
      <Stack.Navigator
         screenOptions={() => ({
            headerShown: false,
         })}
      >
         <Stack.Screen name="Profile " component={Setting} />
         <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
   );
}
