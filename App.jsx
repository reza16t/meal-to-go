import { StatusBar, SafeAreaView, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Map from "./src/screens/Map";
import Setting from "./src/screens/Setting";
import TabBarIcon from "./src/utils/TabBarIcon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NativeWindStyleSheet } from "nativewind";
import { UseFont } from "./src/utils/UseFont";

NativeWindStyleSheet.setOutput({
   default: "native",
});

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
   return (
      <>
         <SafeAreaView className="flex-1 ">
            <QueryClientProvider client={queryClient}>
               <UseFont>
                  <NavigationContainer>
                     <Tab.Navigator
                        screenOptions={({ route }) => ({
                           tabBarIcon: ({ color, size }) =>
                              TabBarIcon(color, size, route),
                           tabBarActiveTintColor: "#99ff11",
                           tabBarInactiveTintColor: "gray",
                           headerShown: false,
                        })}
                     >
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Map" component={Map} />
                        <Tab.Screen name="Settings" component={Setting} />
                     </Tab.Navigator>
                  </NavigationContainer>
               </UseFont>
               {Platform.OS === "web" && (
                  <ReactQueryDevtools initialIsOpen={true} />
               )}
            </QueryClientProvider>
         </SafeAreaView>
         <StatusBar style="auto" />
      </>
   );
}
