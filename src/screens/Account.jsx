import { Text, TouchableOpacity, View } from "react-native";
import { BgImage } from "../style/BackgroundImage";
import { GoogleSvg } from "../style/GoogleSvg";
import { useNavigation } from "@react-navigation/native";

export default function Account() {
   const navigation = useNavigation();
   return (
      <BgImage className="flex justify-center items-center">
         <View className="bg-white opacity-20 h-screen w-screen absolute"></View>
         <View className="w-[100%] ">
            <TouchableOpacity
               className="w-[100%] items-center rounded-2xl"
               onPress={() => navigation.navigate("SignIn")}
            >
               <View className="bg-green-400 h-12 w-[90%] rounded-[50px] items-center justify-center">
                  <Text className="text-white text-lg">Signin</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               className="w-[100%] items-center rounded-2xl pt-5"
               onPress={() => navigation.navigate("SignUp")}
            >
               <View className="bg-green-400 h-12 w-[90%] rounded-[50px] items-center justify-center">
                  <Text className="text-white text-lg">Signup</Text>
               </View>
            </TouchableOpacity>
            <Text className="w-screen text-center mt-5">or</Text>
            <TouchableOpacity className="w-[100%] items-center rounded-2xl pt-5">
               <View className="bg-white h-12 w-[90%] rounded-[50px] items-center justify-center flex-row">
                  <GoogleSvg></GoogleSvg>
                  <Text className="text-green-500 text-md ml-3">
                     Continue with Google
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
      </BgImage>
   );
}
