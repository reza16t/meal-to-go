import { Ionicons } from "@expo/vector-icons";

const IconName = {
   Settings: "settings",
   Map: "map",
   Home: "home",
};
export default function TabBarIcon(color, size, route) {
   const iconName = IconName[route.name];
   // You can return any component that you like here!
   return <Ionicons name={iconName} size={size} color={color} />;
}
