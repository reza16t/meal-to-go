import TabBarIcon from "../utils/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "../screens/Map";
import HomeNavigation from "./HomeNavigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../API/firebase";
import React, { useState } from "react";
import SignIn from "../screens/SignIn";
import Loader from "../components/Loader";
import {
   TransitionPresets,
   createStackNavigator,
} from "@react-navigation/stack";
import Account from "../screens/Account";
import SignUp from "../screens/SignUp";
import SettingNavigation from "./SettingNavigation";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
   const [IsAuth, setIsAuth] = useState("loading");
   // const [Loading, setLoading] = useState(true);
   onAuthStateChanged(auth, (user) => {
      setIsAuth(user);
      console.log(user);
      // setLoading(false);
   });
   if (IsAuth == "loading") return <Loader></Loader>;

   return (
      <>
         {IsAuth ? (
            <Tab.Navigator
               screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) =>
                     TabBarIcon(color, size, route),
                  tabBarActiveTintColor: "#99ff11",
                  tabBarInactiveTintColor: "gray",
                  headerShown: false,
               })}
            >
               <Tab.Screen name="Home" component={HomeNavigation} />
               <Tab.Screen name="Map" component={Map} />
               <Tab.Screen name="Settings" component={SettingNavigation} />
            </Tab.Navigator>
         ) : (
            <Stack.Navigator
               screenOptions={() => ({
                  ...TransitionPresets.FadeFromBottomAndroid,

                  headerShown: false,
               })}
            >
               <Stack.Screen name="Main" component={Account} />
               <Stack.Screen name="SignIn" component={SignIn} />
               <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
         )}
      </>
   );
}
