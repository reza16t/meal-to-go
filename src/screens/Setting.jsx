import { signOut } from "firebase/auth";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../API/firebase";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Setting() {
   const navigation = useNavigation();
   return (
      <View className="flex-1 bg-green-50">
         <TouchableOpacity
            className="flex-1 items-center justify-center"
            onPress={() => navigation.navigate("Camera")}
         >
            <Image
               // eslint-disable-next-line no-undef
               source={require("../../assets/avatar1.png")}
               className="h-44 w-44 rounded-full"
            ></Image>
         </TouchableOpacity>
         <View className="flex-[2]">
            <TouchableOpacity className=" flex-row p-3">
               <FontAwesome
                  name="heart"
                  size={25}
                  color={"black"}
               ></FontAwesome>
               <Text className="pl-2">Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
               className=" flex-row p-3"
               onPress={() => signOut(auth)}
            >
               <FontAwesome
                  name="sign-out"
                  size={25}
                  color={"black"}
               ></FontAwesome>
               <Text className="pl-2">SignOut</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
