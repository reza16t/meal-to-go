import { ActivityIndicator, View } from "react-native";

export default function Loader() {
   return (
      <View className="flex-1">
         <ActivityIndicator
            size={100}
            className="absolute mt-[-50]   bg-white opacity-70  h-screen w-screen z-10"
         ></ActivityIndicator>
      </View>
   );
}
