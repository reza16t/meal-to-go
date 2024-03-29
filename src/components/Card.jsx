import { Image, Text, View } from "react-native";
import { Title } from "../style/TextStyle";

export default function Card({ item }) {
   return (
      <View className="bg-green-50 p-5 flex-1 ">
         {item.map((item) => (
            <View
               key={item.name}
               className="bg-white p-4 h-80 rounded-md  shadow-2xl shadow-black"
            >
               <Image
                  source={require("../../assets/pexels-photo-1279330.webp")}
                  className="h-48 w-full  bg-white "
               ></Image>
               <Title>{item.name}</Title>
               <Text>{item.rating}</Text>
               <Text className="text-[10px]">{item.location}</Text>
            </View>
         ))}
      </View>
   );
}
