import { Text, TouchableOpacity, View } from "react-native";
import { BgImage } from "../style/BackgroundImage";
import { GoogleSvg } from "../style/GoogleSvg";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function Account() {
   const navigation = useNavigation();
   return (
      <BgImage className="flex items-center justify-center">
         <View className="absolute h-screen w-screen bg-white opacity-20"></View>
         <View className="absolute bottom-[60%] h-[40%] w-screen">
            <LottieView
               key={"animation"}
               autoPlay
               loop
               style={{ flex: 1 }}
               resizeMode="cover"
               // eslint-disable-next-line no-undef
               source={require("../../assets/watermelon.json")}
               imageAssetsFolder="images"
            ></LottieView>
         </View>
         <View className="w-[100%] ">
            <Text className="mb-5 text-center text-4xl  font-bold text-green-600">
               welcome to mealtogo
            </Text>
            <TouchableOpacity
               className="w-[100%] items-center rounded-2xl"
               onPress={() => navigation.navigate("SignIn")}
            >
               <View className="h-12 w-[90%] items-center justify-center rounded-[50px] bg-green-400">
                  <Text className="text-lg text-white">Signin</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               className="w-[100%] items-center rounded-2xl pt-5"
               onPress={() => navigation.navigate("SignUp")}
            >
               <View className="h-12 w-[90%] items-center justify-center rounded-[50px] bg-green-400">
                  <Text className="text-lg text-white">Signup</Text>
               </View>
            </TouchableOpacity>
            <Text className="mt-5 w-screen text-center">or</Text>
            <TouchableOpacity className="w-[100%] items-center rounded-2xl pt-5">
               <View className="h-12 w-[90%] flex-row items-center justify-center rounded-[50px] bg-white">
                  <GoogleSvg></GoogleSvg>
                  <Text className="text-md ml-3 text-green-500">
                     Continue with Google
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
      </BgImage>
   );
}
